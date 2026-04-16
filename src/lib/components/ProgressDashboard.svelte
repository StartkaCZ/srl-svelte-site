<!-- Interactive SRL progress tracking dashboard -->

<script>
    // Schedules a function to run as soon as the component has been mounted to the DOM. 
    // This is where you can safely access browser APIs like localStorage.
    import { onMount } from 'svelte';
    // Import the shared strategies store — single source of truth
    import { strategies } from "$lib/stores/topics";
    /**
     * @typedef {{ id: string, title: string, completed: boolean }} StrategyItem
     */

    /** @type {StrategyItem[]} */
    let items = $state($strategies.map(strategy => ({
        id: strategy.id,
        title: strategy.title,
        completed: false
    })));

    // Key for localStorage to persist progress
    const STORAGE_KEY = 'srl-progress';

    /** @type {number} - Count of completed items */
    let completedCount = $derived(items.filter(i => i.completed).length);

    /** @type {number} - Percentage complete (0-100) */
    let progressPercent = $derived(items.length > 0 ? 
        Math.round((completedCount / items.length) * 100) : 
        0
    );

    /**
     * Toggles the completed status of an item.
     * @param {string} id - The item's unique id
     */
    function toggle(id) {
        items = items.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );

        // Save the updated state to localStorage
        if (typeof window !== 'undefined') { // Guard against SSR
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        }
    }

    // Load saved progress from localStorage on component mount
    onMount(() => {
        // Guard against SSR environments where 'window' might not be defined
        if (typeof window !== 'undefined') {
            const savedProgress = localStorage.getItem(STORAGE_KEY);
            // If we have saved progress, try to parse it and load it into our state
            if (savedProgress) {
                try {
                    items = JSON.parse(savedProgress);
                } catch (e) {
                    console.warn('Failed to parse saved progress. Resetting.');
                }
            }
        }
    });
</script>


<section class="dashboard">
    <h2>Your SRL Progress</h2>

    <!-- Progress Bar -->
    <div 
        class="progress-container" 
        role="progressbar"
        aria-valuenow={progressPercent} 
        aria-valuemin="0" 
        aria-valuemax="100"
    >
        <div class="progress-bar" style="width: {progressPercent}%"></div>
    </div>
    
    <p class="progress-label">
        {completedCount} of {items.length} completed — {progressPercent}%
    </p>

    <!-- Strategy checklist -->
    <ul class="checklist">
        {#each items as item (item.id)}
            <li
                class="check-item"
                class:done={item.completed}
            >
            <label>
                <input
                    type="checkbox"
                    checked={item.completed}
                    onchange={() => toggle(item.id)}
                />
                    {item.title}
                </label>
            </li>
        {/each}
    </ul>

    <!-- Conditional completion message -->
    {#if progressPercent === 100}
        <div class="celebration">
            <p>All strategies complete! Great work.</p> 
        </div> 
    {/if} 
</section>


<style>
    .dashboard {
        background: var(--colour-surface);
        border: 1px solid var(--colour-border);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-xl);
        max-width: 480px;
        box-shadow: var(--shadow-md);
    }

    .dashboard h2 {
        font-size: var(--font-size-xl);
        color: var(--colour-text);
        margin-bottom: var(--spacing);
    }

    /* Progress bar track */
    .progress-container {
        background: var(--colour-border);
        border-radius: var(--border-radius);
        height: 12px;
        overflow: hidden;
        margin-bottom: var(--spacing-sm);
    }

    /* Progress bar fill */
    .progress-bar {
        height: 100%;
        background: var(--colour-primary);
        border-radius: var(--border-radius);
        transition: width 0.4s ease;
    }

    .progress-label {
        font-size: var(--font-size-sm);
        color: var(--colour-text-muted);
        margin-bottom: var(--spacing-lg);
    }

    .checklist {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .check-item {
        background: var(--colour-bg);
        border: 1px solid var(--colour-border);
        border-radius: var(--border-radius);
        padding: var(--spacing-sm) var(--spacing);
        transition: background 0.2s ease, border-color 0.2s ease;
    }

    .check-item label {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        cursor: pointer;
        font-size: var(--font-size-base);
        color: var(--colour-text);
    }

    /* Completed state */
    .check-item.done {
        background: color-mix(in srgb, var(--colour-success) 10%, transparent);
        border-color: var(--colour-success);
    }

    .check-item.done label {
        color: var(--colour-text-muted);
        text-decoration: line-through;
    }

    /* Celebration banner */
    .celebration {
        margin-top: var(--spacing-lg);
        padding: var(--spacing);
        background: color-mix(in srgb, var(--colour-primary) 10%, transparent);
        border: 1px solid var(--colour-primary);
        border-radius: var(--border-radius);
        text-align: center;
        font-size: var(--font-size-base);
        color: var(--colour-primary);
    }
</style>
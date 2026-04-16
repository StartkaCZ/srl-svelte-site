<script>
    // Import the shared strategies store — single source of truth
    import { strategies } from '$lib/stores/topics.js';
    // Import the StrategyCard component for consistent card styling
    import StrategyCard from '$lib/components/StrategyCard.svelte';
</script>


<!-- Header section -->
<section class="topics-header container">
    <h1>SRL Strategy Catalogue</h1>
    <p class="subtitle">Explore a range of strategies to enhance your self-regulated learning.</p>
</section>

<!-- Strategy cards grid -->
<section class="topics-grid container">
    <!-- Grid of strategy cards -->
    {#each $strategies as strategy (strategy.id)}
        <StrategyCard 
            id={strategy.id}
            title={strategy.title} 
            description={strategy.description} 
            icon={strategy.icon}
        />
    {/each}
</section>


<style>
    /* ========== Header Section ========== */
    .topics-header {
        text-align: center;
        padding: var(--spacing-2xl) var(--spacing);
    }

    .topics-header h1 {
        font-size: var(--font-size-3xl);
        color: var(--colour-text);
        margin-bottom: var(--spacing);
    }

    .subtitle {
        font-size: var(--font-size-lg);
        color: var(--colour-text-muted);
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }

    /* ========== Grid Layout ========== */
    .topics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: var(--spacing-lg);
        padding: 0 var(--spacing) var(--spacing-2xl);
        max-width: var(--max-width);
        margin: 0 auto;
    }
</style>
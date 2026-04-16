<script>
    import { resolve } from '$app/paths';
    // Import the shared strategies store — single source of truth
    import { strategies } from '$lib/stores/topics.js';
    import ProgressDashboard from '$lib/components/ProgressDashboard.svelte';
</script>

<!-- Home page: introduces the SRL website to visitors -->

<!-- ======= HERO SECTION ======= -->
<section class="hero">
    <div class="container">
        <h1>Master Your Learning</h1>
        <p class="hero-subtitle">
            Self-Regulated Learning (SRL) empowers you to take control of your
            educational journey. Explore strategies, set goals, and reflect on
            your progress.
        </p>
        <a href={resolve("/topics")} class="btn">Explore Strategies →</a>
    </div>
</section>

<!-- ======= SRL TOPICS ======= -->
<!-- Using <section> here instead of <main> — <main> lives in +layout.svelte -->
<section class="container topics-section">
    <h2>Core SRL Concepts</h2>

    <section class="topics">
        <!-- Each article represents one SRL topic -->
         {#each $strategies as strategy (strategy.id)}
            <article class="card">
                <h3>{strategy.title}</h3>
                <p>{strategy.description}</p>
                <a 
                    href={resolve(`/topics/${strategy.id}`)} 
                    class="btn btn--outline"
                >Learn more →</a>
            </article>
        {/each}
    </section>
</section>

<!-- Progress dashboard — reads from the shared store -->
<section class="container dashboard-section">
    <ProgressDashboard />
</section>


<style>
    /* ======= HERO SECTION ======= */
    .hero {
        background: linear-gradient(
            135deg, 
            var(--colour-primary), 
            var(--colour-secondary)
        );
        color: var(--colour-surface);
        padding: var(--spacing-2xl) var(--spacing);
        text-align: center;
    }

    .hero h1 {
        font-size: var(--font-size-3xl);
        font-family: var(--font-family);
        margin-bottom: var(--spacing);
    }

    .hero-subtitle {
        font-size: var(--font-size-lg);
        color: rgba(255, 255, 255, 0.85);
        max-width: 600px;
        margin: 0 auto var(--spacing-xl);
        line-height: 1.6;
    }

    /* ======= SHARED BUTTON ======= */
    .btn {
        display: inline-block;
        background: var(--colour-surface);
        color: var(--colour-primary);
        padding: var(--spacing-sm) var(--spacing-xl);
        border-radius: var(--border-radius);
        font-size: var(--font-size-base);
        font-weight: 600;
        text-decoration: none;
        transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .btn:hover {
        box-shadow: var(--shadow-md);
        transform: translateY(-2px);
    }

    .btn--outline {
        background: transparent;
        color: var(--colour-primary);
        border: 2px solid var(--colour-primary);
    }

    .btn--outline:hover {
        background: var(--colour-primary);
        color: var(--colour-surface);
    }

    /* ======= TOPICS SECTION ======= */
    .topics-section {
        padding: var(--spacing-2xl) var(--spacing);
        max-width: var(--max-width);
        margin: 0 auto;
    }

    .topics-section h2 {
        font-size: var(--font-size-2xl);
        color: var(--colour-text);
        margin-bottom: var(--spacing-xl);
        text-align: center;
    }

    .topics {
        display: grid;
        grid-template-columns: repeat(
            auto-fill, 
            minmax(280px, 1fr)
        );
        gap: var(--spacing-lg);
    }

    /* ======= TOPIC CARDS ======= */
    .card {
        background: var(--colour-surface);
        border: 1px solid var(--colour-border);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-xl);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: var(--spacing);
        transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .card:hover {
        box-shadow: var(--shadow-md);
        transform: translateY(-3px);
    }

    .card h3 {
        font-size: var(--font-size-xl);
        color: var(--colour-text);
        margin: 0;
    }

    .card p {
        font-size: var(--font-size-base);
        color: var(--colour-text-muted);
        line-height: 1.6;
        flex: 1;
        margin: 0;
    }

    .card .btn--outline {
        align-self: flex-start;
        margin-top: auto;
    }

    /* ======= PROGRESS DASHBOARD ======= */
    .dashboard-section {
        padding: var(--spacing-xl) 0;
    }
</style>
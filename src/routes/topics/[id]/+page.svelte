<script>
    import { resolve } from '$app/paths';
    /** @type {import('./$types').PageProps} */
    let { data } = $props();

    /** @type {{ strategy: import('$lib/stores/topics.js').SRLItem }} */
	const { strategy } = data;
</script>


<section class="hero">
    <div class="container">
        <span class="hero-icon" aria-hidden="true">{strategy.icon}</span>
        <h1>{strategy.title}</h1>
        <p class="subtitle">{strategy.description}</p>
    </div>
</section>

<section class="container detail-page">
    <article class="detail-card">
        <p>{strategy.detail}</p>
    </article>
    <a href={resolve("/topics")} class="back-link">← Back to Topics</a>
</section>


<style>
    .hero {
        background: var(--colour-primary);
        color: white;
        padding: var(--spacing-2xl) 0;
        text-align: center;
    }
    .hero h1, .hero .subtitle { color: white; }

    .hero-icon {
        display: block;
        font-size: 3rem;
        line-height: 1;
        margin-bottom: var(--spacing);
    }

    .detail-page {
        padding: var(--spacing-2xl) 0;
        max-width: 720px;
    }

    .detail-card {
        background: var(--colour-surface);
        border: 1px solid var(--colour-border);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-lg);
        box-shadow: var(--shadow-sm);
        margin-bottom: var(--spacing-lg);
    }

    .back-link {
        color: var(--colour-primary);
        font-weight: 600;
        opacity: 0.85;
        transition: opacity 0.2s;
    }
    .back-link:hover { opacity: 1; }
</style>
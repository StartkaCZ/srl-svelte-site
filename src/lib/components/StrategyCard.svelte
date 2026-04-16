<script>
    import { resolve } from '$app/paths';
    /**
     * @typedef {Object} Props 
     * @property {string} id is the unique identifier for the strategy, used in the URL.
     * @property {string} title is the title of the strategy.
     * @property {string} description is a brief description of the strategy.
     * @property {string} [icon] is an optional icon representing the strategy, defaulting to '★' if not provided.
    */

    /** @type {Props} */
    const {
        id,
        title, 
        description, 
        icon = '★' 
    } = $props();
</script>


<article class="strategy-card">
    <span class="card-icon" aria-hidden="true">{icon}</span>
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={resolve(`/topics/${id}`)} class="btn btn--outline">Explore</a>
</article>


<style>
    .strategy-card {
        background: var(--colour-surface);
        border: 1px solid var(--colour-border);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-xl);
        display: flex;
        flex-direction: column;
        gap: var(--spacing);
        box-shadow: var(--shadow-sm);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .strategy-card:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
    }

    .card-icon {
        font-size: 2rem;
        line-height: 1;
    }

    .strategy-card h2 {
        font-size: var(--font-size-xl);
        color: var(--colour-text);
        margin: 0;
    }

    .strategy-card p {
        font-size: var(--font-size-base);
        color: var(--colour-text-muted);
        line-height: 1.6;
        flex: 1;
        margin: 0;
    }

    .strategy-card .btn--outline {
        align-self: flex-start;
        margin-top: auto;
    }
</style>
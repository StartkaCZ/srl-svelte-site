<script>
    import { asset, resolve } from '$app/paths';
    // Import Navigation using the $lib alias — always resolves to src/lib/
    import Navigation from '$lib/components/Navigation.svelte';
</script>


<header class="site-header">
    <div class="header-inner">
        <a href={resolve("/")} class="brand">
            <!-- <img class="brand-icon" src={asset("/logo.png")} alt="Site Logo" /> -->
            <span class="brand-name">SRL Svelte Site</span>
        </a>
        <Navigation />
    </div>
</header>


<style>
    /* sticky + z-index keeps the header above page content while scrolling */
    .site-header {
        background: var(--colour-surface);
        border-bottom: 1px solid var(--colour-border);
        box-shadow: var(--shadow-sm);
        position: sticky;
        top: 0;
        z-index: 100;
    }

    /* flex + space-between pushes the brand left and nav right */
    .header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-sm) var(--spacing);
        max-width: var(--max-width);
        margin: 0 auto;
    }

    /* text-decoration: none removes the default anchor underline */
    .brand {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        text-decoration: none;
        color: var(--colour-text);
        transition: color 0.2s ease;
    }

    .brand:hover {
        color: var(--colour-primary);
    }

    .brand-icon {
        font-size: 1.5rem;
        line-height: 1;
    }

    /* letter-spacing tightens the wordmark for a more polished look */
    .brand-name {
        font-size: var(--font-size-lg);
        font-weight: 700;
        letter-spacing: -0.02em;
    }
</style>
<!--
    Displayed automatically by SvelteKit when:
    - A page route doesn't exist (404)
    - A load() function throws an error
    - An unexpected server error occurs (500)
-->
<script>
    // $app provides the error and page stores
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
</script>


<section class="container error-page">
    <!-- Large status code display -->
    <span class="status-code">{page.status}</span>

    <h1>{page.error?.message ?? 'Something went wrong'}</h1>

    <p class="error-description">
        {#if page.status === 404}
            The page you are looking for <code>{page.url.pathname}</code> 
            could not be found. It may have been moved or the URL might be incorrect.
        {:else if page.error}
            {page.error.message}: An error occurred while loading the page. 
            Please try again later.
        {:else}
            An unexpected error occurred. Please try again or
            return to the home page.
        {/if}
    </p>

    <!-- Navigation options -->
    <div class="error-actions">
        <a href={resolve("/")} class="btn-primary">← Go Home</a>
        <a href={resolve("/topics")} class="btn-secondary">View Topics</a>
    </div>
</section>


<style>
    .error-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        max-width: 480px;
        text-align: center;
    }

    /* Large decorative status code */
    .status-code {
        font-size: 6rem;
        font-weight: 900;
        color: var(--colour-primary);
        opacity: 0.15;
        display: block;
        line-height: 1;
        margin-bottom: var(--spacing);
    }

    h1 { margin-bottom: var(--spacing); }

    .error-description {
        color: var(--colour-text-muted);
        margin-bottom: var(--spacing-xl);
    }

    .error-actions {
        display: flex;
        gap: var(--spacing);
        justify-content: center;
        flex-wrap: wrap;
    }

    code {
        padding: var(--space-xs) var(--space-sm);
        border-radius: var(--radius-lg);
        font-size: var(--font-size-xl);
    }

    .btn-primary,
    .btn-secondary {
        padding: var(--spacing-sm) var(--spacing-lg);
        border-radius: var(--border-radius);
        font-weight: 600;
        transition: transform 0.2s;
    }
    .btn-primary:hover,
    .btn-secondary:hover { transform: translateY(-2px); }

    .btn-primary {
        background: var(--colour-primary);
        color: white;
    }
    .btn-secondary {
        border: 2px solid var(--colour-border);
        color: var(--colour-text);
    }
</style>
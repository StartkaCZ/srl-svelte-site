<!--
    Root layout: wraps every page on the site.
    Header and Footer appear on all pages automatically.
-->
<script>
    import favicon from '$lib/assets/favicon.svg';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<!-- Overall page structure -->
<div class="app">
    <!-- Site header (sticky, appears on all pages) -->
    <Header />

    <main class="page-content">
        <!-- 
            The slot is replaced with the current page content.
            For example, when on /topics, SvelteKit renders
            topics/+page.svelte here automatically.
        -->
        {@render children()}
    </main>

    <!-- Site footer (appears on all pages) -->
    <Footer />
</div>

<style>
    /*
        Use flexbox to create a sticky footer layout.
	The page content grows to fill available space,
        pushing the footer to the bottom even on short pages.
    */
    :global(body) {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .app {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .page-content {
        flex: 1; /* Grows to fill space between header and footer */
    }
</style>
<script>
    import { resolve } from '$app/paths';
    // Import the page state to detect the current URL
    import { page } from '$app/state';

    /**
     * Navigation link definition.
     * @typedef {{ href: string, label: string }} NavLink
     */

    /** @type {NavLink[]} */
    const links = [
        { href: '/',        label: 'Home' },
        { href: '/topics',  label: 'Topics' },
        { href: '/about',   label: 'About' }
    ];
</script>


<!-- Semantic nav element with ARIA label -->
<nav aria-label="Primary navigation">
    <ul>
        {#each links as link}
        <li>
            <!--
                class:active applies the "active" class when
                the current URL matches this link's href.
                $page.url.pathname gives us the current path.
            -->
            <a
                href={resolve(link.href)}
                class:active={
                    // Check if the current path includes the link's href for root and nested routes.
                    page.url.pathname.includes(link.href) && link.href !== '/' ||
                    // otherwise, for the root path ('/'), check for exact match
                    page.url.pathname === link.href}
            > 
                {link.label}
            </a>
        </li>
        {/each}
    </ul>
</nav>


<style>
    nav ul {
        display: flex;
        list-style: none;
        gap: var(--spacing-lg);
    }

    nav a {
        color: inherit;        /* Inherit colour from parent */
        font-weight: 500;
        padding: var(--spacing-xs) 0;
        border-bottom: 2px solid transparent;
        transition: border-color 0.2s ease, color 0.2s ease;
    }

    /* Active state — underline the current page link */
    nav a.active,
    nav a:hover {
        color: var(--colour-primary);
        border-bottom-color: var(--colour-primary);
    }
</style>
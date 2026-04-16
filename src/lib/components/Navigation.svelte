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
        {#each links as link, i}
        <li>
            <!--
                class:active applies the "active" class when
                the current URL matches this link's href.
                $page.url.pathname gives us the current path.
                The first link is active by default if no other links match.
            -->
            <a
                href={resolve(link.href)}
                class:active={
                    i === 0 
                        ? !links.some((l, idx) =>
                            idx !== 0 && page.url.pathname.includes(l.href)
                        )
                        : (page.url.pathname.includes(link.href) && link.href !== '/')
                }
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
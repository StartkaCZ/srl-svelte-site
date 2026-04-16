<script>
    import { resolve } from '$app/paths';
    /**
     * Dynamic year for copyright notice.
     * Uses JavaScript's built-in Date object.
     * @type {number}
     */
    const year = new Date().getFullYear();
</script>


<footer class="site-footer">
    <div class="container footer-inner">

        <!-- Copyright notice with dynamic year -->
        <p class="copyright">
            © {year} SRL Learning Hub. All rights reserved.
        </p>

        <!-- Secondary navigation links -->
        <nav aria-label="Secondary navigation">
            <ul>
                <li><a href={resolve("/")}>Home</a></li>
                <li><a href={resolve("/topics")}>Topics</a></li>
                <li><a href={resolve("/about")}>About</a></li>
            </ul>
        </nav>

    </div>
</footer>


<style>
    .site-footer {
        background: var(--colour-text);     /* Dark background */
        color: var(--colour-bg);            /* Light text on dark bg */
        padding: var(--spacing-xl) 0;
        margin-top: auto;                   /* Push to bottom of page */
    }

    .footer-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--spacing);
    }

    .copyright {
        color: var(--colour-text-muted);
        font-size: var(--font-size-sm);
        margin: 0;   /* Override global p margin */
    }

    /* Footer nav list */
    nav ul {
        display: flex;
        list-style: none;
        gap: var(--spacing-lg);
    }

    nav a {
        color: var(--colour-bg);
        font-size: var(--font-size-sm);
        opacity: 0.75;
        transition: opacity 0.2s;
    }
    nav a:hover { 
        opacity: 1; 
    }

    /* Stack on small screens */
    @media (max-width: 600px) 
    {
        .footer-inner { 
            flex-direction: column; 
            text-align: center; 
        }

        nav ul { 
            justify-content: center; 
        }
    }
</style>
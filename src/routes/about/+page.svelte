<script>
    /**
     * @typedef {{ name: string, role: string, bio: string }} TeamMember
     * @type {TeamMember[]}
     */
    const team = [
        { 
            name: 'Dr. A. Zimmerman', role: 'SRL Researcher',
            bio: 'Pioneered self-regulation models in educational psychology.' 
        },
        { 
            name: 'Dr. B. Pintrich',  role: 'Motivation Theorist',
            bio: 'Developed the MSLQ — a leading tool for measuring SRL.'
        }
    ];

    /** SRL cycle phases */
    const phases = [
        { 
            phase: 'Forethought',
            description: 'Goal setting and strategic planning before a task.'
        },
        { 
            phase: 'Performance',
            description: 'Self-monitoring and applying learning strategies during a task.'
        },
        {
            phase: 'Reflection',
            description: 'Evaluating outcomes and adjusting strategies after a task.'
        }
    ];
</script>


<!-- Hero banner -->
<section class="hero">
    <div class="container">
        <h1>About SRL Learning Hub</h1>
        <p>
            We are committed to making Self-Regulated 
            Learning accessible to every student.
        </p>
    </div>
</section>

<section class="container page-grid">

    <section class="panel srl-cycle">
        <h2>The SRL Cycle</h2>
        <p>
            Self-Regulated Learning follows a three-phase cycle, 
            originally described by Zimmerman (2000).
        </p>
        <div class="phases-grid">
            {#each phases as phase, i}
                <article class="phase-card">
                    <span class="phase-number">{i + 1}</span>
                    <h3>{phase.phase}</h3>
                    <p>{phase.description}</p>
                </article>
            {/each}
        </div>
    </section>

    <section class="panel team">
        <h2>Inspired By</h2>
        <div class="team-grid">
            {#each team as member (member.name)}
                <article class="member">
                    <h3>{member.name}</h3>
                    <p class="role">{member.role}</p>
                    <p>{member.bio}</p>
                </article>
            {/each}
        </div>
    </section>

</section>


<style>
    .hero {
        background: var(--colour-primary);
        color: white;
        padding: var(--spacing-2xl) 0;
        text-align: center;
    }
    .hero h1 { color: white; }

    section { padding: var(--spacing-2xl) 0; }
    h2      { margin-bottom: var(--spacing-lg); }

    /* Responsive grid — reflows without media queries */
    .phases-grid,
    .team-grid {
        display: grid;
        gap: var(--spacing-lg);
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }

    .phase-card,
    .member {
        background:    var(--colour-surface);
        border:        1px solid var(--colour-border);
        border-radius: var(--border-radius-lg);
        padding:       var(--spacing-lg);
        box-shadow:    var(--shadow-sm);
    }

    /* Circular phase number badge */
    .phase-number {
        display:         inline-flex;
        align-items:     center;
        justify-content: center;
        width:           2.5rem;
        height:          2.5rem;
        background:      var(--colour-primary);
        color:           white;
        border-radius:   50%;
        font-weight:     700;
        margin-bottom:   var(--spacing);
    }

    .member .role {
        color:          var(--colour-primary);
        font-weight:    600;
        font-size:      var(--font-size-sm);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom:  var(--spacing-sm);
    }

    .page-grid {
        display: grid;
        gap: var(--spacing-lg);
        grid-template-columns: 1.15fr 0.85fr;
        align-items: start;
    }

    .panel {
        background: var(--colour-surface);
        border: 1px solid var(--colour-border);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-lg);
        box-shadow: var(--shadow-sm);
    }

    .panel h2 {
        margin-bottom: var(--spacing-sm);
    }

    .team-grid {
        display: grid;
        gap: var(--spacing);
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }

    @media (max-width: 860px) {
        .page-grid { grid-template-columns: 1fr; }
    }
</style>
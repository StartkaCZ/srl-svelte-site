import { readable } from 'svelte/store';

/**
 * @typedef {Object} SRLItem
 * @property {string} id is a unique identifier for the item, used for routing and linking
 * @property {string} title is the display name of the item, shown in the UI
 * @property {string} description provides a brief overview of the item's content or purpose
 * @property {string} icon is the name of an icon from the chosen icon library that visually represents the item
 * @property {string} detail (optional) is a more in-depth explanation or content related to the item, used on the detail page
 */

/** @type {SRLItem[]} */
const strategiesItems = [
    { 
        id: 'goal-setting',
        title: 'Goal Setting',
        description: 'Define SMART goals to guide your study sessions.',
        icon: '🎯',
        detail: 'Set Specific, Measurable, Achievable, Relevant, and Time-bound goals to stay focused and motivated in your learning journey.'
    },
    { 
        id: 'self-monitoring',
        title: 'Self-Monitoring',
        description: 'Track your progress and adjust your approach when needed.', 
        icon: '📊',
        detail: 'Regularly check your understanding and progress towards your goals. Use tools like checklists, progress bars, or journals to stay on track and make informed adjustments to your study strategies.'
    },
    { 
        id: 'metacognition',
        title: 'Metacognition',
        description: 'Plan, monitor, and evaluate your own learning process.',
        icon: '🧠',
        detail: 'Develop awareness of your own thinking and learning processes. Plan how to approach a learning task, monitor your comprehension and progress, and evaluate the effectiveness of your strategies to become a more self-directed learner.'   
    },
    { 
        id: 'motivation',
        title: 'Motivation and Mindset',
        description: 'Build a growth mindset that embraces challenge.',
        icon: '🔥',
        detail: 'Cultivate a growth mindset by viewing challenges as opportunities to learn and grow. Stay motivated by celebrating small wins, seeking support from peers, and reminding yourself of the purpose behind your learning goals.'
    },
    { 
        id: 'time-management',
        title: 'Time Management',
        description: 'Study smarter using the Pomodoro technique and planning.',
        icon: '⏰',
        detail: 'Use the Pomodoro technique to break your study sessions into focused intervals (e.g., 25 minutes of work followed by a 5-minute break). Plan your study schedule in advance to ensure you allocate time for all your subjects and activities.'
    },
    { 
        id: 'reflection',
        title: 'Reflection and Review', 
        description: 'Consolidate learning through regular structured review.',
        icon: '📓',
        detail: 'Set aside time for regular reflection and review of what you have learned. Use techniques like summarizing key points, creating mind maps, or discussing concepts with peers to deepen your understanding and retention of the material.'
    }
];

/** @type {import('svelte/store').Readable<SRLItem[]>} */
export const strategies = readable( strategiesItems );
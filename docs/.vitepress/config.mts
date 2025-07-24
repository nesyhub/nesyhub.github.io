import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NesyHub",
  description: "NeuroSymbolic Hub",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Getting Started',
        items: [
          { text: 'Fundamentals', link: '/getting-started/fundamentals' },
          { text: 'Technical Deep Dives', link: '/getting-started/deep-dives' },
          { text: 'Comparative Analysis', link: '/getting-started/comparative' },
        ]
      },
      {
        text: 'Research Hub',
        items: [
          { text: 'Academic Papers', link: '/research/papers' },
          { text: 'Principal Investigators', link: '/research/pis' },
          { text: 'Conferences & Events', link: '/research/conferences' },
        ]
      },
      {
        text: 'Industry Hub',
        items: [
          { text: 'Company Profiles', link: '/industry/companies' },
          { text: 'Career Resources', link: '/industry/careers' },
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'Discussion Forums', link: '/community/forums' },
          { text: 'Expert Interviews', link: '/community/interviews' },
        ]
      },
      {
        text: 'Tools & Resources',
        items: [
          { text: 'Software Libraries', link: '/tools/libraries' },
          { text: 'Development Frameworks', link: '/tools/frameworks' },
          { text: 'Educational Resources', link: '/tools/education' },
        ]
      },
      {
        text: 'News & Updates',
        items: [
          { text: 'Latest News', link: '/news/latest' },
          { text: 'Events', link: '/news/events' },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Mission Statement', link: '/about/mission' },
          { text: 'Team Information', link: '/about/team' },
          { text: 'Contact Details', link: '/about/contact' },
          { text: 'Code of Conduct', link: '/about/code-of-conduct' },
          { text: 'Contribution Guidelines', link: '/about/contributing' },
        ]
      }
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Fundamentals',
          link: '/getting-started/fundamentals',
          items: [
            { text: 'What is neuro-symbolic AI?', link: '/getting-started/fundamentals#what-is-neuro-symbolic-ai' },
            { text: 'Key concepts and terminology', link: '/getting-started/fundamentals#key-concepts-and-terminology' },
            { text: 'Historical development', link: '/getting-started/fundamentals#historical-development' },
          ]
        },
        {
          text: 'Technical Deep Dives',
          link: '/getting-started/deep-dives',
          items: [
            { text: 'Methodologies', link: '/getting-started/deep-dives#methodologies' },
            { text: 'Architecture patterns', link: '/getting-started/deep-dives#architecture-patterns' },
            { text: 'Implementation guides', link: '/getting-started/deep-dives#implementation-guides' },
          ]
        },
        {
          text: 'Comparative Analysis',
          link: '/getting-started/comparative',
          items: [
            { text: 'vs. pure neural approaches', link: '/getting-started/comparative#vs-pure-neural-approaches' },
            { text: 'vs. symbolic AI', link: '/getting-started/comparative#vs-symbolic-ai' },
            { text: 'Hybrid advantages', link: '/getting-started/comparative#hybrid-advantages' },
          ]
        }
      ],
      '/research/': [
        {
          text: 'Academic Papers',
          link: '/research/papers',
          items: [
            { text: 'Peer-reviewed publications', link: '/research/papers#peer-reviewed-publications' },
            { text: 'Preprints (arXiv, bioRxiv)', link: '/research/papers#preprints-arxiv-biorxiv' },
            { text: 'Workshop papers', link: '/research/papers#workshop-papers' },
            { text: 'Books', link: '/research/papers#books' },
          ]
        },
        {
          text: 'Principal Investigators',
          link: '/research/pis',
          items: [
            { text: 'Principal investigators', link: '/research/pis#principal-investigators' },
            { text: 'Google Scholar', link: '/research/pis#google-scholar' },
          ]
        },
        {
          text: 'Conferences & Events',
          link: '/research/conferences',
          items: [
            { text: 'Upcoming conferences', link: '/research/conferences#upcoming-conferences' },
          ]
        }
      ],
      '/industry/': [
        {
          text: 'Company Profiles',
          link: '/industry/companies',
          items: [
            { text: 'Company profiles', link: '/industry/companies#company-profiles' },
          ]
        },
        {
          text: 'Career Resources',
          link: '/industry/careers',
          items: [
            { text: 'Career resources', link: '/industry/careers#career-resources' },
          ]
        }
      ],
      '/community/': [
        {
          text: 'Discussion Forums',
          link: '/community/forums',
          items: [
            { text: 'Discussion forums', link: '/community/forums#discussion-forums' },
          ]
        },
        {
          text: 'Expert Interviews',
          link: '/community/interviews',
          items: [
            { text: 'Expert interviews', link: '/community/interviews#expert-interviews' },
          ]
        }
      ],
      '/tools/': [
        {
          text: 'Software Libraries',
          link: '/tools/libraries',
          items: [
            { text: 'Software libraries', link: '/tools/libraries#software-libraries' },
          ]
        },
        {
          text: 'Development Frameworks',
          link: '/tools/frameworks',
          items: [
            { text: 'Development frameworks', link: '/tools/frameworks#development-frameworks' },
          ]
        },
        {
          text: 'Educational Resources',
          link: '/tools/education',
          items: [
            { text: 'Educational resources', link: '/tools/education#educational-resources' },
          ]
        }
      ],
      '/news/': [
        {
          text: 'Latest News',
          link: '/news/latest',
          items: [
            { text: 'Latest news', link: '/news/latest#latest-news' },
          ]
        },
        {
          text: 'Events',
          link: '/news/events',
          items: [
            { text: 'Events', link: '/news/events#events' },
          ]
        }
      ],
      '/about/': [
        {
          text: 'Mission Statement',
          link: '/about/mission',
        },
        {
          text: 'Team Information',
          link: '/about/team',
        },
        {
          text: 'Contact Details',
          link: '/about/contact',
        },
        {
          text: 'Code of Conduct',
          link: '/about/code-of-conduct',
        },
        {
          text: 'Contribution Guidelines',
          link: '/about/contributing',
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nesyhub/nesyhub.github.io' }
    ]
  }
})

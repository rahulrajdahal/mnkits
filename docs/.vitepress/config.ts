import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mn Kits",
  description: "Reusable components for react.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        link: '/docs'
      }
      , {
        text: 'Mn kits',
        items: [
          { text: 'Overview', link: '/docs/overview' },
          { text: 'Why Mn Kits?', link: '/docs/why-mnkits' },
          { text: 'Installation', link: '/docs/installation' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Card', link: '/components/card' },
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

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
        text: 'Mn kits',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Why Mn Kits?', link: '/why-mnkits' },
          { text: 'Installation', link: '/installation' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/button' },
          { text: 'Input', link: '/input' }
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

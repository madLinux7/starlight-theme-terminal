import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeTerminal from 'starlight-theme-terminal'


export default defineConfig({
  site: 'https://madlinux7.github.io/starlight-theme-terminal',
  base: '/starlight-theme-terminal',
  integrations: [
    starlight({
      title: 'Starlight Terminal',
      favicon: '/favicon.svg',
      // defaultLocale: 'en',
      // locales: {
      //   en: {
      //     label: 'English',
      //     lang: 'en',
      //   },  
      //   fr: {
      //     label: 'French',
      //     lang: 'fr',
      //   },
      // },
      editLink: {
        baseUrl: 'https://github.com/madLinux7/starlight-theme-terminal/edit/main/docs/',
      },
      tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 4},
      plugins: [starlightThemeTerminal()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization', 'components-override'],
        },
        { label: 'Examples', autogenerate: { directory: 'examples' } },
        { label: 'Custom Components', autogenerate: { directory: 'components' } },
      ],  
      social: [
        { href: 'https://github.com/madLinux7/starlight-theme-terminal', icon: 'github', label: 'GitHub' },
      ],      
    }),
  ],
})

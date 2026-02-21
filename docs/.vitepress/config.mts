import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Заметки программиста",
  description: "Григорий Емилиянов инженер-программист",
  base: "/portfolio-egrigoriy/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Домашняя', link: '/' },
    ],
    logo: '/public/myphoto.png',
    sidebar: [
      {
        text: 'Разделы',
        items: [
          { text: 'Java-приложения', link: '/java' },
          { text: 'Python-приложения', link: '/python' },
          { text: 'Мобильные приложения', link: '/mobile' },
		  { text: 'Интернет вещей', link: '/iot' },
          { text: 'САПР', link: '/cad' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/egrigoriy/' }
    ],
	locales: {
		root: {
		  label: 'Русский',
		  lang: 'ru'
		},
	},
  }
})

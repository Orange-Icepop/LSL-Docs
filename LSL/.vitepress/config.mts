import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "柠方服务器启动器-快速、便捷的MC开服器",
  description: "柠方服务器启动器（LSL）是由橙子冰棒（Orange-Icepop）制作的MC JAVA版开服器，包含Mod下载、核心下载等额外功能，使开设模组端不再麻烦。我们还提供对开发MC开服器的关键技术点教程，让开服器成为继启动器以后的第二个可大批量自定义的MC社区程序。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Orange-Icepop/LSL' }
    ]
  }
})

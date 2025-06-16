import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', icon: 'material-symbols:menu-book', link: '/blog/' },
  { text: '标签', icon: 'mdi:tag', link: '/blog/tags/' },
  { text: '归档', icon: 'material-symbols:archive-sharp', link: '/blog/archives/' },
  {
    text: '笔记',
    icon: 'icon-park-solid:bookshelf',
    items: [
      { text: '阅读', icon: 'flat-color-icons:reading', link: '/notes/read/README.md' },
      { text: '语言', icon: 'solar:programming-outline', link: '/notes/language/README.md' },
      { text: '框架', icon: 'mdi:electron-framework', link: '/notes/framework/README.md' },
      { text: '工具', icon: 'vscode-icons:folder-type-tools', link: '/notes/tools/README.md' },
      { text: '其他', icon: 'basil:other-1-outline', link: '/notes/others/README.md' },
    ]
  },
  { text: '友链', icon: 'game-icons:three-friends', link: '/friend-chain/' },
])

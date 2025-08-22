/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'flat-color-icons:home' },
  { text: '博客', link: '/blog/', icon: 'streamline-ultimate-color:blogger-logo' },
  { text: '标签', link: '/blog/tags/', icon: 'icon-park:tag' },
  { text: '归档', link: '/blog/archives/', icon: 'streamline-color:archive-box-flat' },
  {
    text: '系列文章',
    icon: 'icon-park:book-one',
    items: [
      { text: '框架', link: '/notes/framework/README.md', icon: 'devicon:framework7' },
      { text: '语言', link: '/notes/language/README.md', icon: 'material-icon-theme:wolframlanguage' },
      { text: '工具', link: '/notes/tools/README.md', icon: 'material-icon-theme:folder-tools' },
      { text: '阅读', link: '/notes/read/README.md', icon: 'icon-park:read-book' },
      { text: '其他', link: '/notes/others/README.md', icon: 'icon-park:other' },
    ]
  },
  {
    text: '更多',
    icon: 'icon-park:more-two',
    items: [
      { text: '友情链接', link: '/more/friends.md', icon: 'fluent-color:link-24' },
      { text: '我的项目', link: '/more/projects.md', icon: 'material-icon-theme:folder-project' },
      { text: '网址导航', link: '/more/navigation.md', icon: 'devicon:reactnavigation' },
    ]
  },
])

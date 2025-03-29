import { viteBundler } from '@vuepress/bundler-vite'
import path from 'node:path'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '绘夏合羽',
  head: [['link', { rel: 'icon', href: './images/logo[32x32].ico'}]],
  description: '绘夏合羽的 vuepress 站点',

  bundler: viteBundler(),

  theme: plumeTheme({
    // 部署域名
    // hostname: 'https://url/',
    
    // 对主题内部使用的插件进行自定义配置
    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
          //  强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['c', 'java', 'python', 'html', 'css', 'typescript', 'javascript', 'sql', 'vue', 'md', 'tex', 'bash', 'shell'],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        align: true, // 对齐容器
        mark: true, // 标记语法
        tasklist: true, // 任务列表语法
        attrs: true, // 属性语法
        sup: true, // 上标语法
        sub: true, // 下标语法
        footnote: true, // 注脚语法

        // 以下可选项在 主题中默认不启用，
        // 请在主题中自行配置
        // include: true, // Markdown 导入支持
        // chart: true, // 图表支持
        // echarts: true, // ECharts 图表支持
        // flowchart: true, // 流程图支持
        // markmap: true, // Markmap 图表支持
        // stylize: true, // 对行内语法进行样式化以创建代码片段
        // playground: true, // 交互演示
        // kotlinPlayground: true, // Kotlin 交互演示
        // vuePlayground: true, // Vue 交互演示
        // sandpack: true, // sandpack 交互演示
        demo: true, // 代码案例
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        pdf: true,
      //   caniuse: true,
      //   plot: true,
        bilibili: true,
        youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      },

      /**
      * markdownMath
      * @see https://theme-plume.vuejs.press/config/plugins/markdown-image/
      */
      markdownImage: {
        
        // figure: true,  // 启用 figure

        // 启用图片懒加载
        lazyload: true,

        // 启用图片标记
        // mark: true,

        // 启用图片大小
        // size: true,
      },

      /**
      * markdownMath
      * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
      */
      markdownMath: {
        type: 'katex',
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),

})

import comp from "/Users/hxhy/Code/HuiXiaHeYu.github.io/docs/.vuepress/.temp/pages/notes/read/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/read/\",\"title\":\"读书笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"读书笔记\",\"createTime\":\"2024/11/10 14:53:24\",\"permalink\":\"/notes/read/\"},\"readingTime\":{\"minutes\":0.28,\"words\":85},\"git\":{},\"filePathRelative\":\"notes/read/README.md\",\"headers\":[],\"bulletin\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

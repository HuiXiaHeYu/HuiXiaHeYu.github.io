import comp from "/Users/hxhy/Code/Blog/docs/.vuepress/.temp/pages/notes/framework/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/framework/\",\"title\":\"框架\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"框架\",\"createTime\":\"2024/11/10 14:53:24\",\"permalink\":\"/notes/framework/\"},\"readingTime\":{\"minutes\":0.35,\"words\":105},\"git\":{},\"filePathRelative\":\"notes/framework/README.md\",\"headers\":[],\"bulletin\":true}")
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

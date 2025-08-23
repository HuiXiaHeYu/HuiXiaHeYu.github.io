import comp from "/Users/hxhy/Code/Blog/docs/.vuepress/.temp/pages/notes/tools/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/tools/\",\"title\":\"工具包\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"工具包\",\"createTime\":\"2024/11/10 18:51:49\",\"permalink\":\"/notes/tools/\"},\"readingTime\":{\"minutes\":0.37,\"words\":110},\"git\":{},\"filePathRelative\":\"notes/tools/README.md\",\"headers\":[],\"bulletin\":true}")
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

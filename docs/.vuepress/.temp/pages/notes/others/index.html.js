import comp from "/Users/hxhy/Code/Blog/docs/.vuepress/.temp/pages/notes/others/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/others/\",\"title\":\"其他\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"其他\",\"createTime\":\"2024/11/10 14:53:24\",\"permalink\":\"/notes/others/\"},\"readingTime\":{\"minutes\":0.23,\"words\":69},\"git\":{},\"filePathRelative\":\"notes/others/README.md\",\"headers\":[],\"bulletin\":true}")
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

import comp from "/Users/hxhy/Code/Blog/docs/.vuepress/.temp/pages/notes/language/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/language/\",\"title\":\"编程语言\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"编程语言\",\"createTime\":\"2024/11/12 12:27:50\",\"permalink\":\"/notes/language/\"},\"readingTime\":{\"minutes\":0.3,\"words\":90},\"git\":{},\"filePathRelative\":\"notes/language/README.md\",\"headers\":[],\"bulletin\":true}")
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

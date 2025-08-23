import comp from "/Users/hxhy/Code/Blog/docs/.vuepress/.temp/pages/friends/index.html.vue"
const data = JSON.parse("{\"path\":\"/friends/\",\"title\":\"友情链接\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"友情链接\",\"description\":\"友情链接描述文本\",\"permalink\":\"/friends/\",\"contentPosition\":\"after\",\"list\":[{\"name\":\"pengzhanbo\",\"link\":\"https://pengzhanbo.cn/\",\"avatar\":\"https://github.com/pengzhanbo.png\",\"desc\":\"即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。\"},{\"name\":\"小冰\",\"link\":\"https://shangjhih.github.io\",\"avatar\":\"https://github.com/shangjhih.png\",\"desc\":\"A university student from China\"}],\"draft\":true,\"pageLayout\":\"friends\"},\"readingTime\":{\"minutes\":0.24,\"words\":73},\"git\":{},\"filePathRelative\":\"more/friends.md\",\"headers\":[],\"type\":\"friends\",\"bulletin\":true}")
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

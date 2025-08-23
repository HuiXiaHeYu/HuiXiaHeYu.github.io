import './articleTagColors.css'
export const articleTagColors = {"Crack":"3rml","Vue":"3rml","Workflow":"y3oy","Spider":"57u6","Auto.js":"l6uj","vue":"3rml","C/C++":"c3fb","Latex":"wju4","Mysql":"xbc2","Python":"xbc2","English":"xbc2","Deep Learning":"oqkw","计算机网络":"32kc","Conda":"1zr8","Git":"6ogu","Wsl":"6ogu"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}

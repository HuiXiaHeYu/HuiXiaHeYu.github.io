import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+plugin-shiki@2.0.0-rc.112_@vuepress+shiki-twoslash@2.0.0-rc.112_typescript@5._67ff467d9f4229629565b1d202b698a6/node_modules/@vuepress/plugin-shiki/lib/client/styles/shiki.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-diff.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-error-level.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-focus.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-word-highlight.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/whitespace.css"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+highlighter-helper@2.0.0-rc.112_@vueuse+core@13.7.0_vue@3.5.19_typescript@5.9_9c7b6f0107ff5d9b3481f5f3163dc6ec/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"
import { enhanceTwoslash } from "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+shiki-twoslash@2.0.0-rc.112_typescript@5.9.2_vue@3.5.19_typescript@5.9.2__vue_d586d6f26d0695e3dd23644fde62b54e/node_modules/@vuepress/shiki-twoslash/lib/client/index.js"
import "/Users/hxhy/Code/HuiXiaHeYu.github.io/node_modules/.pnpm/@vuepress+shiki-twoslash@2.0.0-rc.112_typescript@5.9.2_vue@3.5.19_typescript@5.9.2__vue_d586d6f26d0695e3dd23644fde62b54e/node_modules/@vuepress/shiki-twoslash/lib/client/styles/twoslash.css"
export default {
  enhance({ app }) {
    enhanceTwoslash(app)
  },
  setup() {
    setupCollapsedLines()
  },
}

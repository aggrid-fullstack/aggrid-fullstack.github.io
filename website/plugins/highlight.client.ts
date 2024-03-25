import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import highlightJS from '@highlightjs/vue-plugin'
// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/isbl-editor-dark.css'

// https://www.fabiofranchino.com/log/how-to-use-syntax-highlight-js-in-a-nuxt-website/



export default defineNuxtPlugin((nuxtApp) => {
    // hljs.registerLanguage('pgsql', pgsql)
    // hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('typescript', typescript)
    nuxtApp.vueApp.use(highlightJS)
})
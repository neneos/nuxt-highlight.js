const path = require('path')

module.exports = function highlightJs(moduleOptions) {
    this.addPlugin(path.resolve(__dirname, 'vue-highlight.js'))
    this.options.css.push({ src: 'highlight.js/styles/default.css', lang: 'css' })
}

module.exports.meta = require('./package.json');
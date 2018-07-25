const path = require('path')

module.exports = function AnimateCss(moduleOptions) {
    this.addPlugin(path.resolve(__dirname, 'vue-highlight.js'))
}

module.exports.meta = require('./package.json');
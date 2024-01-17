const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  pages: {
    index: {
      entry: 'src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      entry: 'src/pages/Index/main.js',
      template: 'public/index.html',
      title: 'About Me',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
})

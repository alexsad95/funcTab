module.exports = {
  pages: {
    tab: {
      template: 'public/browser-extension.html',
      entry: './src/tab/main.js',
      title: 'funcTab',
    },
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js',
        },
      },
    },
  },
  configureWebpack: {
    devtool: 'cheap-module-source-map',
  },
};

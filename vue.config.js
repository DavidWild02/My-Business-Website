const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
  chainWebpack: webpackConfig => {
    const dir = path.resolve(__dirname, 'src/assets/icons');

    webpackConfig.module
        .rule("svg")
          .include
            .add(dir)
            .end()
          .use('file-loader')
            .loader('svg-sprite-loader')
            .options({
              extract: true,
              spriteFilename: svgPath => `sprite${svgPath.substr(-4)}` 
            })


    webpackConfig
        .plugin('svg-sprite')
          .use(SpriteLoaderPlugin);
  }
};

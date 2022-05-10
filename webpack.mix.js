const mix = require('laravel-mix')
const path = require('path')

require('./mix')

mix
  .setPublicPath("dist")
  .js("resources/js/field.js", "js")
  .sass('resources/sass/field.scss', 'dist/css')
  .vue({ version: 3 })
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/js/'),
      },
    },
  })
  .nova("silvanite/novafieldcheckboxes");

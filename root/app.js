const axis = require('axis')
const rupture = require('rupture')
const autoprefixer = require('autoprefixer-stylus')

module.exports = {
  ignore: ['**/layout.pug', '**/_*', '**/.*', '_cache/**', 'readme.md', 'test/**', 'yarn.lock'],
  entry: { 'js/main': ['./assets/js/index.coffee'] },
  matchers: {
    html: '*(**/)*.pug',
    css: '*(**/)*.styl',
    js: '**/*.coffee'
  },
  module: {
    rules: [{
      test: /\.styl$/,
      use: [{
        loader: 'stylus-loader',
        options: {
          use: [axis(), rupture(), autoprefixer()]
        }
      }]
    }, {
      test: /\.pug$/,
      use: [{
        loader: 'pug-static-loader',
        options: {
          pretty: true,
          locals: { foo: 'bar' }
        }
      }]
    }, {
      test: /\.coffee$/,
      use: [{ loader: 'coffee-loader' }]
    }]
  },
  resolve: { extensions: ['.coffee', '.js'] }
}

const axis = require('axis')
const rupture = require('rupture')
const autoprefixer = require('autoprefixer-stylus')

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.pug', '**/_*', '**/.*', '_cache/**', 'readme.md', 'test/**', 'yarn.lock'],
  entry: { 'js/main': ['./assets/js/index.coffee'] },
  matchers: { js: '**/*.coffee' },
  module: {
    rules: [{
      test: /\.styl$/,
      use: [{
        loader: 'source-loader'
      }, {
        loader: 'stylus-loader',
        options: {
          _spikeExtension: 'css',
          use: [axis(), rupture(), autoprefixer()]
        }
      }]
    }, {
      test: /\.pug$/,
      use: [{
        loader: 'pug-static-loader',
        options: {
          pretty: true,
          locals: { foo: 'bar' },
          _spikeExtension: 'html'
        }
      }]
    }, {
      test: /\.coffee$/,
      use: [{ loader: 'coffee-loader' }]
    }]
  },
  resolve: { extensions: ['.coffee', '.js'] }
}

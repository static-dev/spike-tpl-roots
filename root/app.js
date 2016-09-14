const path = require('path')
const axis = require('axis')
const rupture = require('rupture')
const autoprefixer = require('autoprefixer-stylus')
const HardSourcePlugin = require('hard-source-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.jade', '**/_*', '**/.*', '_cache/**', 'readme.md'],
  entry: { 'js/main': ['./assets/js/index.coffee'] },
  matchers: { js: '**/*.coffee' },
  jade: {
    pretty: true,
    locals: { foo: 'bar' }
  },
  stylus: {
    use: [axis(), rupture(), autoprefixer()]
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: 'source!stylus', extension: 'css' },
      { test: /\.jade$/, loader: 'source!jade-static', extension: 'html' },
      { test: /\.coffee$/, loader: 'coffee' }
    ],
    resolve: { extensions: ['', '.coffee', '.js'] }
  },
  plugins: [
    new HardSourcePlugin({
      environmentPaths: { root: __dirname },
      recordsPath: path.join(__dirname, '_cache/records.json'),
      cacheDirectory: path.join(__dirname, '_cache/hard_source_cache')
    })
  ]
}

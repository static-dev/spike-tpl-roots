const {UglifyJsPlugin, DedupePlugin, OccurrenceOrderPlugin} = require('webpack').optimize

module.exports = {
  // disable source maps
  devtool: false,
  // webpack optimization and minfication plugins
  plugins: [
    new UglifyJsPlugin(),
    new DedupePlugin(),
    new OccurrenceOrderPlugin()
  ],
  // image optimization
  module: {
    loaders: [{ test: /\.(jpe?g|png|gif|svg)$/i, loader: 'source-loader!image-webpack' }]
  },
  // minify html
  jade: {
    pretty: false,
    locals: { foo: 'bar' }
  }
}

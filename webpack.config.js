const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './webpack/entry.js',
  output: {
    path: 'docs/assets/',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            'style',
            'css?sourceMap!sass?sourceMap'
        )
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?name=images/[name].[ext]',
        exclude: /(node_modules)/
      }
    ]
  },
  sassLoader: {
    includePaths: [ 'assets/_sass' ]
  },
  plugins: [
    new ExtractTextPlugin('css/main.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: './build',
  //   port: 3000,
  //   hot: true,
  //   hotOnly: true
  // },
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options:{
          presets: ['react', 'stage-0', ['env', {
            targets: {
              browsers: ['last 2 versions']
            }
          }]]
        }
      },
      {
        test: /\.(gif|jpg|png|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/image',
              publicPath: './assets/image'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
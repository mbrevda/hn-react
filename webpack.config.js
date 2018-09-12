const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin')

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  plugins: [new HtmlWebpackPlugin(), new HtmlWebpackRootPlugin()],
  resolve: {
    modules: [__dirname, 'node_modules']
  },
  resolveLoader: {
    modules: ['node_modules']
  }
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('@babel/polyfill');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: { app: ['@babel/polyfill', path.join(__dirname, './src/index.js')] },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          exclude: /(node_modules)|(build)/,
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    // new CopyPlugin({
    //   patterns: [{ from: 'src/assets', to: '' }],
    // }),
    // new ExtractTextPlugin({
    //   filename: 'styles.css',
    //   disable: false,
    //   allChunks: true,
    // }),
    new CleanWebpackPlugin(),
  ],
};

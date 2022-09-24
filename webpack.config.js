const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  // 현재 개발 모드에서 작업 중임을 알려줌.
  mode,
  devtool: mode === 'development' ? 'inline-source-map' : false,
  // entry: 웹팩에게 어플리케이션이 어디서 시작하고 어디서부터 파일들을 묶을건지 시작점을 정해준다.
  entry: path.join(__dirname, './src/index.tsx'),
  // output: 번들링 된 결과물을 어디다 둘 것인지에 대한 설정이 가능.
  output: {
    path: path.resolve(__dirname, 'build'),
    // 번들이 생기는 경로를 지정. webpack-dev-server도 이를 참조
    publicPath: '/',
    filename: '[name].js',
  },
  // export한 JS 모듈이 어떻게 변환되는지 정의한다. 방법은 rules에 정의한 대로 이루어진다.
  module: {
    rules: [
      // 첫번째 룰: ES6, JSX 구문 변환에 대한 것.
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      // 두번째 룰: CSS 처리에 대한 것.
      {
        test: /\.css/i,
        use: [
          'style-loader',
          // css-loader 소스맵 옵션 활성화
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          // sass-loader 소스맵 옵션 활성화
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]',
        },
      },
    ],
  },
  // resolve: 웹팩이 해석할 확장자를 지정.
  resolve: { extensions: ['.tsx', '.ts', '.js', '.jsx'] },
  // webpack-dev-server의 옵션을 설정
  devServer: {
    // 정적 파일 경로 설정
    static: path.join(__dirname, 'public/'),
    port: 3000,
    // devserver 에서만 핫로딩 가능하게
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // 번들링된 JS를 주입하고 결과물을 옮길 대상이 되는 파일을 지정
      template: path.join(__dirname, './public/index.html'),
      favicon: path.join(__dirname, './public/favicon.ico'),
      // 주석제거 및 화이트 스페이스 제거
      minify:
        process.env.NODE_ENV === 'production'
          ? { collapseWhitespace: true, removeComments: true }
          : false,
    }),
    ...(process.env.NODE_ENV === 'production'
      ? [new MiniCssExtractPlugin({ filename: '[name].css' })]
      : []),
    new CleanWebpackPlugin(),
  ],
};

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { env } = process;
const path = require('path');

const options = {
  mode: env.NODE_ENV,
  entry: './index.jsx',
  context: __dirname,
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js|.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']      
},
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV) }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  devtool: env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : undefined
};
module.exports = options;

// const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
// const path = require( 'path' );
// const webpack = require('webpack');
// const { env } = process;

// module.exports = {
//    mode: env.NODE_ENV,
//    context: __dirname,
//    entry: './index.jsx',
//    output: {
//       path: path.resolve( __dirname, 'dist' ),
//       filename: 'main.js',
//       publicPath: '/',
//    },
//    devServer: {
//       historyApiFallback: true
//    },
//    module: {
//       rules: [
//          {
//             test: /\.js|.jsx$/,
//             use: 'babel-loader',
//          },
//          {
//             test: /\.css$/,
//             use: ['style-loader', 'css-loader'],
//          },
//          {
//             test: /\.(png|j?g|svg|gif)?$/,
//             use: 'file-loader'
//          }
// ]
//    },
//    plugins: [
//       new HtmlWebPackPlugin({
//          template: path.resolve( __dirname, 'public/index.html' ),
//          filename: 'index.html'
//       })
//    ]
// };
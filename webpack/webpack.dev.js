const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
     index: path.resolve(__dirname, "..", "src", "index.tsx"),
  },
  resolve: {
     extensions: [".ts", ".js"],
  },
  module: {
     rules: [
        {
           test: /\.tsx?$/,
           loader: "ts-loader",
           exclude: /node_modules/,
        },
        {
          test:/\.(s*)css$/,
          use: [
             miniCss.loader,
             'css-loader',
             'sass-loader',
          ]
       },
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
             loader: "babel-loader"
         }
     },
     ],
  },
  plugins: [
   new HtmlWebpackPlugin({ template: './src/index.html' }),
   new miniCss({
      filename: 'style.css',
   }),
  ],
 devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
}
const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: {
     index: path.resolve(__dirname, "..", "src", "index.ts"),
  },
  output: {
     path: path.join(__dirname, "../public"),
     filename: "[name].js",
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
     ],
  },
  plugins: [
   new miniCss({
      filename: 'style.css',
   }),
  ],
}
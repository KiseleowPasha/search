const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
      app: './index.jsx',
    },
    module: {
        rules: [
          { test: /\.(woff(2)?|eot|ttf|otf|svg|ttc)$/, type: 'asset/inline' },
          { test: /\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader'] },
          { test: /\.(js)$/, use: 'babel-loader' },
          { test: /\.(png|jpe?g|svg|gif)$/i, use: { loader: 'file-loader' }},
          {
            test: /\.js(x)?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-transform-runtime',
                ],
              },
            },
          },
        ]
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      devtool: 'source-map',

      
      plugins:[
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
      }),
      //   new CopyWebpackPlugin({
      //     patterns: [
      //         { from: './src/assets/img', to: 'img' }
      //     ]
      // }),
      
        new HtmlWebpackPlugin({
          template: 'index.html',
          inject: 'body'
        })
      ],
      mode: 'production',
}
const webpack = require('webpack');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const glsl = require('webpack-glsl-loader');

const config = {
    output:{
        filename:'bundle.js'
    },
    plugins:[
        new UglifyPlugin ({
            sourceMap:true
        })
    ],    
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.(frag|vert)$/,
          loader: 'webpack-glsl-loader'
        }
      ]
    }
};

module.exports = config;
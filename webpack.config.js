const webpack = require('webpack');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const config = {
    output:{
        filename:'bundle.js'
    },
    plugins:[
        new UglifyPlugin ({
            sourceMap:true
        })
    ]
};

module.exports = config;
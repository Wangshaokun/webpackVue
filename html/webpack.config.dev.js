/**
 * Created by Administrator on 2017/4/27.
 */
let webpack = require("webpack");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
let webpackConfig =  require('./webpack.config.base');

webpackConfig.plugins.push(
    //DefinePlugin 里面的标识就相当于是全局变量
    new webpack.DefinePlugin({
        NODE_ENV: '"development"',
        BABEL_ENV: '"development"'
    }),
    new BrowserSyncPlugin({
        host:'localhost', // 实时监听
        port:7998,
        file:'',
        server:{
            baseDir:'./html/app'
        }
    })
);
module.exports =  webpackConfig;
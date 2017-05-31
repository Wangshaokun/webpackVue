/**
 * Created by Administrator on 2017/4/27.
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const autoprefixer = require('autoprefixer');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const plugins = [];
const rules = [
    {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
    },
    {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015',
        exclude: /node_modules/,
        query:{
            presets: ["es2015"]
        }
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders:['style-loader','css-loader']
    },
    {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', 'sass-loader']
        })
    },
    {
        test: /\.html/i,
        loader: 'html-loader?interpolate&attrs[]=img:src&attrs[]=link:href&attrs[]=script:src',
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]"
    }];
// let cont2 = 0;
plugins.push(
    new ExtractTextPlugin('../css/[name].css'),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        chunks:['register','vueShare','ProductList','ProductWith','record','Personal'],
        filename: '../js/common.bundle.js',
        minChunks: 2
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        chunks:['common'],
        filename:'../js/vendor.bundle.js',
        minChunks: Infinity
    })
);
module.exports = {
    entry: {
         register:__dirname+'/web/Compile/register.js',
         vueShare:__dirname+'/web/Compile/vueShare.js',
         ProductList:__dirname+'/web/Compile/ProductList.js',
         ProductWith:__dirname+'/web/Compile/ProductWith.js',
         record:__dirname+'/web/Compile/Record.js',
         Personal:__dirname+'/web/Compile/personal.js',
         mian:__dirname+'/web/Compile/registerSass.js',
        'vendor':['vue']

    },
    output: {
        path:path.resolve(__dirname+'/web/Compile',__dirname+'/app/js'),
        publicPath: './',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue': __dirname+'/app/build/vue/Vue.js'
        }
    },
    module: {
        rules: rules
    },
    plugins: plugins
};
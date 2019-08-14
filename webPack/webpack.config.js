var path = require('path')
var webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    context:path.resolve(__dirname,'./src'),
    entry:{
        app:'./app.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    // 低版本webpack压缩js写法
    // plugins:[
    //     new webpack.optimize.UglifyJsPlugin()
    // ]

    // 高版本 压缩js
    // 下载terser-webpack-plugin 插件，然后引入
    // new TerserPlugin
    optimization:{
        minimizer:[
            new TerserPlugin({
                cache:true,
                parallel:true, // 支持多进程
                sourceMap:true,
            })
        ]
    }
}
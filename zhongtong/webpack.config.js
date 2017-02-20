/**
 * Created by lihualong on 2017/2/15.
 */


var webpack = require('webpack');

module.exports = {
    /*入口*/
    entry: './entry.js',
    /*输出*/
    output: {
        path: '__dirname',
        publicPath:'img/',//资源的发布地址
        filename: 'output.js'
    },
    module: {
        /*loader配置*/
        loaders: [
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},

            {
                test: /\.(png|jpg|gif)$/,
                //limit 字段代表图片打包限制，当图片大小小于限制时会自动转成 base64 码引用
                //&后面都是对生成文件的指定
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }

        ]
    }
}

// var webpack = require('webpack')
//
// module.exports = {
//     entry: './entry.js',
//     output: {
//         path: __dirname,
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {test: /\.css$/, loader: 'style!css'}
//         ]
//     }
// }
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    //入口起点
    entry:'./src/index.js',
    // 另外一种写法
    // entry:{
    //     main:'./src/index.js',这个等价于entry:'./src/index.js'
    //     sub:'./src/index.js'第二次打包在sub的文件里
    // }
    //输出
    output:{
        //输出文件名
        filename:'built.js',//或者[name].js输出多个原来名字的不同文件
        //输出路径
        path:resolve(__dirname,'dist'),
        // publicPath:'http://www.baidu.com'生成出的文件的src
    },
    //loader的配置
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
                
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use:{
                    loader:'file-loader',
                }}
        ]
    },
    //plugins的配置
    plugins:[
        new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin() 
],
    //devServer：用于自动编译打开浏览器刷新浏览器
    // 启动devServer指令为：webpack-dev-server
    devServer:{
        contentBase:'./dist',
        open: true,//自动打开
        port:8080,//端口号
        hot:true,
        hotOnly: true,
    },

    //模式
    mode:'development',
    // mode:'production'
}
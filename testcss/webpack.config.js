const { resolve } = require('path');
module.exports={
    //入口起点
    entry:'./src/index.js',
    //输出
    output:{
        //输出文件名
        filename:'built.js',
        //输出路径
        path:resolve(__dirname,'dist')
    },
    //loader的配置
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
                
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name].[ext]',/*原来的名字,placeholders占位符*/
                        outputPath:'images/',
                        limit:20480,
                         }
                }}
        ]
    },
    //plugins的配置
    plugins:[
        fgsf
    ]
    ,
    //devServer：用于自动编译打开浏览器刷新浏览器
    // 启动devServer指令为：webpack-dev-server
    devServer:{
        contentBase:resolve(_dirname,'dist'),
        compress:true,
        //端口号
        port:3000
    },

    //模式
    mode:'development',
    // mode:'production'
}
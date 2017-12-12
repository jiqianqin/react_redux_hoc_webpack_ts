const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, 'src/index.tsx'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(tsx)$/,
            loader: 'tslint-loader',
            exclude: /node_modules/,
        },{
            test: /\.(tsx)?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },{
            test: /\.(js)$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        })
    ],
};
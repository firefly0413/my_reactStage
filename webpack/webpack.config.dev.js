const config = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

config.devtool = 'cheap-module-eval-source-map';

//环境配置
config.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify('dev'),
	},
    __DEVTOOLS__:true,
    __DEBUG__: true,
}));

//生成指定的html
Object.keys(config.entry).map((item) => {
	if (item !== 'vendor') {
		config.plugins.push(new HtmlWebpackPlugin({
			template: `./client/${item}.html`,
			filename: `${item}.html`,
			chunks: ['vendor', item],
		}));
	}
	return false;
});

module.exports = config;
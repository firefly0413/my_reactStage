const config = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

config.output.publicPath = './';

//压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
config.plugins.push(new OptimizeCssAssetsPlugin({
	assetNameRegExp: /\.css$/g,
	cssProcessor: require('cssnano'),
	cssProcessorOptions: {
		discardComments: {
			removeAll: true,
		},
	},
	canPrint: true,
}));

//压缩js
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false,
	},
	output: {
		comments: false,
	},
	sourceMap: true,
	mangle: true,
}));

//环境配置
config.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify('production'),
	},
	__DEVTOOLS__:false,
	__DEBUG__: false,
}));

//生成html
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
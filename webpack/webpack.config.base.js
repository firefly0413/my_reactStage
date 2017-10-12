const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:{
		index:path.resolve(__dirname,'../client/index.js'),
		vendor:['react']
	},
	output:{
		path:path.resolve(__dirname,'../assets'),
		filename:'js/[name].[hash:8].js',
		chunkFilename:'js/[name].[chunkhash:8].chunk.js',	//为按需加载的文件命名／require.ensure([]...
		publicPath: '/',
	},
	module:{
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react', 'stage-0'],
							plugins: [
								'transform-runtime',	//运行时编译
								'add-module-exports',
							],
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader?importLoaders=1',
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer')({
										browsers: ['ios >= 7.0'],
									}),
								],
							},
						},
					],
				}),
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader?importLoaders=1',
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer')({
										browsers: ['ios >= 7.0'],
									}),
								],
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								outputStyle: 'compact',
							},
						},
					],
				}),
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]',
					},
				],
			},
			{
				test: /\.(woff|woff2|ttf|eot|svg)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader?name=fonts/[name].[hash:8].[ext]',
					},
				],
			},
		]
	},
	resolve: {
		extensions: [' ', '.js', '.jsx', '.scss'],
        alias: {//注册路径,减少../
			client:path.resolve(__dirname,'../client'),
			components:path.resolve(__dirname,'../components')
		}
    },
	plugins: [
		new ExtractTextPlugin({
			filename: 'stylesheet/[name].css',
			disable: false,
			allChunks: true,
		})
	],
}
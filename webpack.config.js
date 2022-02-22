const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV || 'production', // development, production, none
	entry: './9-module/2-task/index.js',
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: [{
				  loader: 'expose-loader',
				  options: {
					exposes: ['myNameSpace'],
				  },
				}],
				exclude: /node_modules/,
			  },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({template: './9-module/2-task/index.html'}),
	]
};

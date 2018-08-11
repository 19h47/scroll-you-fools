const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifier = require('webpack-notifier');

const production = process.env.NODE_ENV === 'production';
const path = require('path');

module.exports = {
	watch: production ? false : true,
	entry: path.resolve(__dirname, 'src/ReverseScroll.js'),
	resolve: {
		alias: {
			Utils: path.resolve(__dirname, 'src/utils'),
		}
	},
	module: {
		rules: [
		{
			enforce: 'pre',
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader'
		},
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new WebpackNotifier(),
	],
	devtool: production ? false : 'source-map',
};

const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [{
			// ローダーの処理対象ファイル
			test: /\.tsx?$/,
			// ローダーの処理対象から外すディレクトリ
			exclude: /node_modules/,
			use: [{
				// 利用するローダー
				loader: 'ts-loader',
			}]
		}]
	},
	plugins: [new UglifyJSPlugin()]
}
const { resolve } = require('path');
const chalk = require('chalk');

// plugins 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');



// configuration
module.exports = {
	mode: 'development',
	devServer: {
		host: 'localhost',
		port: 3000,
		compress: true,
		historyApiFallback: true,
		hot: true,
		https: false,
		inline: false,
		noInfo: false,
	},

	entry: {
		main: resolve(__dirname, '../app/index.js')		
	},
	output: {
		filename: '[name].js',
		path: resolve(__dirname, '../dist'),
		publicPath: "/",
	},
	resolve: {
		extensions: ['.js','.jsx','.scss'],
		alias: {
			'@components': resolve(__dirname, '../app/core/components'),
			'@store': resolve(__dirname, '../app/core/store'),
			'@utils': resolve(__dirname, '../app/core/utils'),
			'@configs': resolve(__dirname, '../app/core/configs'),
			'@pages': resolve(__dirname, '../app/pages'),
			'@store': resolve(__dirname, '../app/core/store'),
			'@images': resolve(__dirname, '../app/core/images'),
			'@actions': resolve(__dirname, '../app/core/actions'),
			'@hooks': resolve(__dirname, '../app/core/hooks'),
			'@api': resolve(__dirname, '../app/core/apis'),
			'@reducers': resolve(__dirname, '../app/core/reducers'),
			'@styles': resolve(__dirname, '../app/core/styles'),
			'@fonts': resolve(__dirname, '../app/core/fonts'),
			'@sounds': resolve(__dirname, '../app/core/sounts'),
		}
	},
	module: {
		rules: [
                        {
				test: /\.js?$/,
                                exclude: /node_modules/,
                                use: {
					loader: "babel-loader"
				}
                        },
			{
				test: /.html$/,
				use: 'html-loader',
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [ 
					CssExtractPlugin.loader, 
					'css-hot-loader', 
					'css-loader', 
					'sass-loader',
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg|)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'core/fonts'
						}
					}
				]
			},
			{
				test: /\.(png|jpg|ico)/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'core/images'
						}
					}
				]			
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			favicon: resolve(__dirname, '../app/core/images/tunein-favicon.ico'),
			template: resolve(__dirname, '../app/index.html'),
		}),
		new CssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].[id].css'
		}),
		new webpack.DefinePlugin({
			"process.env": { 
				NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
			}
		}),		

	],
	optimization: {
		splitChunks: {
			chunks: 'async',
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
				},
				default: {
					minChunks: 1,
					reuseExistingChunk: true
				}
			}
		}
	},
};


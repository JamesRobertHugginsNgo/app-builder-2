import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Path from 'path';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import * as url from 'url';

const APP_NAME = 'app-builder';
const APP_BASE = `/webapp/${APP_NAME}`;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default function (env, { mode }) {
	const isProduction = mode === 'production';

	return {

		// =====
		// MODE
		// =====

		mode: isProduction ? 'production' : 'development',

		// =====
		// ENTRY
		// =====

		entry: Path.resolve(__dirname, 'src/main.js'),

		// =====
		// OUTPUT
		// =====

		output: {
			clean: isProduction,
			path: Path.resolve(__dirname, `dist${APP_BASE}`),
			filename: 'scripts/[name].[contenthash:8].js',
			publicPath: APP_BASE
		},

		// =====
		// MODULE
		// =====

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								cacheDirectory: true,
								cacheCompression: false,
								envName: isProduction ? 'production' : 'development'
							}
						}
					]
				},
				{
					test: /\.css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'images/[name].[contenthash:8][ext][query]'
					}
				},
				{
					test: /\.svg$/i,
					type: 'asset/inline'
				},
				{
					test: /\.(eot|ttf|woff|woff2)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'fonts/[name].[contenthash:8][ext][query]'
					}
				},
				{
					test: /\.s[ac]ss$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
						'postcss-loader',
						'sass-loader'
					]
				// },
				// {
				// 	test: /\.html$/,
				// 	use: [
				// 		'html-loader'
				// 	]
				}
			]
		},

		// =====
		// PLUGIN
		// =====

		plugins: [
			isProduction && new MiniCssExtractPlugin({
				filename: '[name].[contenthash:8].css'
			}),
			new HtmlWebpackPlugin({
				inject: false,
				template: Path.resolve(__dirname, 'src/main.ejs'),
				filename: 'html/app.html',
				title: APP_NAME
			}),
			new HtmlWebpackPlugin({
				inject: false,
				template: Path.resolve(__dirname, 'src/main.ejs'),
				filename: 'index.html',
				title: APP_NAME
			})
		].filter(Boolean),

		// =====
		// RESOLVE
		// =====

		resolve: {
			extensions: ['.js', '.jsx']
		},

		// =====
		// OPTIMIZATION
		// =====

		optimization: {
			minimize: isProduction,
			minimizer: [
				new TerserWebpackPlugin({
					terserOptions: {
						compress: {
							comparisons: false
						},
						mangle: {
							safari10: true
						},
						output: {
							comments: false,
							ascii_only: true
						},
						warnings: false
					}
				}),
				new CssMinimizerPlugin()
			]
		},

		// =====
		// DEV SERVER
		// =====

		devServer: {
			open: `${APP_BASE}/index.html`
		}
	};
}

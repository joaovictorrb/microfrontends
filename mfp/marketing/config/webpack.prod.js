const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const prodConfi = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js'
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'marketing',
			exposes: {
				'./MarketingService': './src/bootstrap'
			},
			shared: packageJson.dependencies
		})
	]
}

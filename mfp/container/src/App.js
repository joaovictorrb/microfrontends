import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import MarketingService from './components/MarketingService'
import Header from './components/Header'

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
})

export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header />
					<MarketingService />
				</div>
			</StylesProvider>
		</BrowserRouter>
	)
}

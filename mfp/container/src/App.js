import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'

import Progress from './components/Progress'
import Header from './components/Header'

const Marketing = lazy(() => import('./components/MarketingService'))
const Auth = lazy(() => import('./components/AuthService'))
const Dashboard = lazy(() => import('./components/DashboardService'))

const generateClassName = createGenerateClassName({
	productionPrefix: 'co'
})

const history = createBrowserHistory()

export default () => {
	const [ isSignedIn, setIsSignedIn ] = useState(false)

	useEffect(
		() => {
			if (isSignedIn) history.push('/dashboard')
		},
		[ isSignedIn ]
	)

	return (
		<Router history={history}>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
					<Suspense fallback={<Progress />}>
						<Switch>
							<Route path='/auth'>
								<Auth onSignIn={() => setIsSignedIn(true)} />
							</Route>
							<Route path='/dashboard'>
								{!isSignedIn && <Redirect to='/' />}
								<Dashboard />
							</Route>
							<Route path='/' component={Marketing} />
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</Router>
	)
}

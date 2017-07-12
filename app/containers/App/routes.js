import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/Home'
import ChatCreator from 'containers/ChatCreator'

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/home" component={Home} />
		<Route path="/create" component={ChatCreator} />
	</Switch>
)

export default Routes

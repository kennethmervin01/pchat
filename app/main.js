import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from 'containers/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import clientReducer from 'reducers/client'
import { persistStore, autoRehydrate } from 'redux-persist'
import '../semantic/dist/semantic.min.css'

const store = createStore(clientReducer, undefined, compose(autoRehydrate()))
persistStore(store)

const AppContainer = () => (
	<BrowserRouter><App /></BrowserRouter>
)

render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('app'))

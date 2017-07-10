import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from 'containers/App'
import { BrowserRouter } from 'react-router-dom'
import '../semantic/dist/semantic.min.css'

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))

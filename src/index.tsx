import * as React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import App from 'ui/App'
import ui from 'ui/reducer'
import data from 'data/reducer'

const store = createStore(
  combineReducers({
    data,
    ui
  }),
  applyMiddleware(logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)

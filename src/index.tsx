import * as React from 'react'
import { render } from 'react-dom'
import App from 'App'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import dataReducer from 'data/reducer'
import appReducer from 'App/reducer'
import logger from 'redux-logger'

const reducer = combineReducers({
  data: dataReducer,
  app: appReducer,
  form: formReducer,
})

const enhancer = applyMiddleware(logger)
const store = createStore(reducer, enhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)

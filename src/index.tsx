import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from 'App'
import configureStore from './configure-store'

const { store, persistor } = configureStore()

render(
  <Provider store={store}>
    <PersistGate loading={<p>loading</p>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
)

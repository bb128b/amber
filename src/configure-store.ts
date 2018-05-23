import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import { reducer as formReducer } from 'redux-form'
import logger from 'redux-logger'

import dataReducer from 'data/reducer'
import appReducer from 'App/reducer'


const reducer = combineReducers({
  data: dataReducer,
  app: appReducer,
  form: formReducer,
})

const persistConf = {
  key: 'root',
  storage,
  // blacklist: ['form']
}

const persistedReducer: any = persistReducer(persistConf, reducer)

const enhancer = applyMiddleware(logger)

const configureStore = () => {
  const store = createStore(persistedReducer, enhancer)
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
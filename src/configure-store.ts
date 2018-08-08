import appReducer from 'App/reducer';
import dataReducer from 'data/reducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';

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
  const store = createStore(persistedReducer, enhancer, 
    // redux dev tools
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
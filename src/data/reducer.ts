import { combineReducers } from 'redux'
import notes from './notes/reducer'
import theme from './theme/reducer'

const reducer = combineReducers({
  notes,
  theme
})

export default reducer

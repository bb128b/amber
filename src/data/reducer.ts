import { combineReducers } from 'redux'
import notes from './notes/reducer'
import ui from 'pages/reducer'

const reducer = combineReducers({
  notes,
  ui
})

export default reducer

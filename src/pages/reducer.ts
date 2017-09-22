import { combineReducers } from 'redux'
import addNote from './Notes/AddNote/reducer'

const reducer = combineReducers({
  notes: combineReducers({
    addNote
  })
})

export default reducer

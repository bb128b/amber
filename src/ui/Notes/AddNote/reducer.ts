import Types from './actions'
import { Action } from 'utils/redux'

export type IState = {
  isOpen: boolean
}

const initialState = {
  isOpen: false
}

export default function reducer(state: IState = initialState, action: Action<Types, IState> = {}) {
  const { type } = action
  switch (type) {
    case Types.CHANGE_VISIBILITY:
      return Object.assign({}, state, { isOpen: action.isOpen })
    default:
      return state
  }
}

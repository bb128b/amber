import Types from './actions'
import { Action } from 'data/utils'

export type IState = {
  isOpen: boolean
}

const initialState = {
  isOpen: true
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

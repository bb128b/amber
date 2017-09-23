// import Types from './app-actions'
import { Action } from 'utils/redux'
import red from 'material-ui/colors/red'
import deepOrange from 'material-ui/colors/deepOrange'
import { Palette } from 'material-ui/styles/createPalette'

export type IState = {
  palette: Partial<Palette>
}

const initialState = {
  palette: {
    primary: deepOrange,
    secondary: red
    // type: 'dark', // Switching the dark mode on is a single property value change.
  }
}

export default function reducer(state: IState = initialState, action: Action<{}, IState> = {}) {
  const { type } = action
  switch (type) {
    // case Types.CHANGE_PALETTE_TYPE:
    //   return Object.assign({}, state, { isOpen: action.isOpen })
    default:
      return state
  }
}

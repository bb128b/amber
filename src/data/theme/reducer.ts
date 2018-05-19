// import Types from './app-actions'
import { Action } from 'utils/redux'
import red from '@material-ui/core/colors/red'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

export interface IState {
  palette: Partial<PaletteOptions>
}

const initialState = {
  palette: {
    primary: blueGrey,
    secondary: red,
    type: 'dark' as 'dark',
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

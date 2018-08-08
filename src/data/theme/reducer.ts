// import Types from './app-actions'
import { Action } from 'utils/redux'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import grey from '@material-ui/core/colors/grey'
// import cyan from '@material-ui/core/colors/cyan'

export interface IState {
  palette: Partial<PaletteOptions>
}

const initialState = {
  palette: {
    primary: grey,
    // secondary: cyan,
    type: 'light' as 'light',
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

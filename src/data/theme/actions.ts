// import { IState } from ',/app-reducer'
//
// // Actions
// enum Types {
//   UPDATE_PALETTE = 'pages/Notes/AddNote/CHANGE_VISIBILITY'
// }
// export default Types
//
// // Action Creators
// export function updatePalette(palette: Palette) {
//   return { type: Types.UPDATE_PALETTE, palette }
// }
//
// Selectors
export function getTheme(state: any) {
  return state.data.theme
}

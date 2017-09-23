// Actions
enum Types {
  CHANGE_VISIBILITY = 'data/notes/create'
}
export default Types

// Action Creators
export function show() {
  return { type: Types.CHANGE_VISIBILITY, isOpen: true }
}

export function hide() {
  return { type: Types.CHANGE_VISIBILITY, isOpen: false }
}

export function getNotes(state: any, ...paths: any[]) {
  return state.data.notes
  // return {
  //   ...paths.map(path => ({
  //     [path]: state.ui.notes.addNote[path]
  //   })
  //   )
  // }
}

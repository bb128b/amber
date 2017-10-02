// Actions
enum Types {
  CHANGE_VISIBILITY = 'pages/Notes/AddNote/CHANGE_VISIBILITY'
}
export default Types

// Action Creators
export function show() {
  return { type: Types.CHANGE_VISIBILITY, isOpen: true }
}

export function hide() {
  return { type: Types.CHANGE_VISIBILITY, isOpen: false }
}

export function extractState(state: any, ...paths: any[]) {
  return state.app.notes.createNote
  // return {
  //   ...paths.map(path => ({
  //     [path]: state.ui.notes.addNote[path]
  //   })
  //   )
  // }
}

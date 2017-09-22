// Actions
const CREATE = 'data/notes/CREATE'
const UPDATE = 'data/notes/UPDATE'
const REMOVE = 'data/notes/REMOVE'

// Reducer
interface INote {
  title?: string
  text?: string
}

const initialState = [{
  title: 'hey',
}, {
  text: 'hello'
}]

export default function reducer(state: INote[] = initialState, action: any = {}) {
  const { type, ...payload } = action

  switch (action.type) {
    case CREATE:
      return state.push(payload)
    // case UPDATE:
    //   return state.push(payload);
    // case REMOVE:
    //   return state.push(payload);
    // do reducer stuff
    default: return state
  }
}

// Action Creators
export function create(note: any) {
  return { type: CREATE, note }
}

export function update(note: any) {
  return { type: UPDATE, note }
}

export function remove(note: any) {
  return { type: REMOVE, note }
}

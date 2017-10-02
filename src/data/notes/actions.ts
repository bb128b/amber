// Model
export interface INote {
  title?: string
  description?: string
  createdAt: number
}

// Action Types
export enum ActionType {
  CREATE = 'data/notes/CREATE',
}

// Actions
export function createNote(note: Partial<INote>) {
  if (note && (note.title || note.description)) {
    return {
      type: ActionType.CREATE,
      payload: note,
    }
  } else {
    throw 'Title or description required'
  }
}

export function getNotes(state: any): INote[] {
  return state.data.notes
}

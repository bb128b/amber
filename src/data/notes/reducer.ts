import { ActionType, INote } from './actions'

// Initial State
const initialState = [{
  title: 'The trick to cereal',
  description: `The trick to cereal is keeping 70% of it above the milk.
          Get off the high road Summer.
          We all got pink eye because you wouldn't stop texting on the toilet.`,
  createdAt: 1,
}, {
  title: 'Meeseeks',
  description: `We all wanna die, we're meeseeks! Close.
          It's gonna make your kidneys shut down. Puh rum pum pow! Yea.`,
  createdAt: 2,
}, {
  description: `He's not pressing charges.
          That's gotta be the you shot me equivalent of not being mad.
          Not MY fault this is happening`,
  createdAt: 3,
}, {
  description: `What the fuck is going on?! You're our boy dawg, don't even trip.
          And that's why I always say 'Shumshumschilpiddydah!'`,
  createdAt: 4,
}]

// Reducer
export default function reducer(state: INote[] = initialState, action: any = {}) {
  const { type, payload } = action
  switch (type) {
    case ActionType.CREATE:
      return [...state, {
        createdAt: new Date().getTime(),
        ...payload,
      }]
    default: return state
  }
}

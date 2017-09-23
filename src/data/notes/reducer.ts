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
  title: 'The trick to cereal',
  text: `The trick to cereal is keeping 70% of it above the milk.
          Get off the high road Summer.
          We all got pink eye because you wouldn't stop texting on the toilet.`
}, {
  title: 'Meeseeks',
  text: `We all wanna die, we're meeseeks! Close.
          It's gonna make your kidneys shut down. Puh rum pum pow! Yea.`
}, {
  text: `He's not pressing charges.
          That's gotta be the you shot me equivalent of not being mad.
          Not MY fault this is happening`
}, {
  title: 'Jerry',
  text: `I just wanna die! Hmmm, human music.
          Since we're fighting, if you ever have an affair with that guy, I will
          come to the hotel room and blow my brains out all over your naked bodies.`
}, {
  text: `What the fuck is going on?! You're our boy dawg, don't even trip.
          And that's why I always say 'Shumshumschilpiddydah!'`
}, {
  text: `Principal Vagina here, don't let the name fool you;
          I'm very much in charge. Reminding you that tonight is our annual flu
          season dance. I don't know how many times I have to say this, but if
          you have the flu, stay home. The flu season dance is about awareness,
          not celebration. You don't bring dead babies to Passover.
          Full disclosure, Morty - it's not. Temporary superintelligence
          is just a side effect of the Megaseeds dissolving in your
          rectal cavity. Rikitikitavi, bitch! Wow I really crononberg'd up the
          whole place huh Morty, just a bunch a cronenbergs walkin around.`
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

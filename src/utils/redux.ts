export type Action<Type, State> = {
  type?: Type
} & Partial<State>

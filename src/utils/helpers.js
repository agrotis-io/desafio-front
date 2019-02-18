export const createReducer = (initialState, handlers) => (
  (previousState = initialState, action) => (
    handlers[action.type]
      ? handlers[action.type](previousState, action)
      : previousState
  )
);

import { isEmpty } from 'ramda';

export const createReducer = (initialState, handlers) => (
  (previousState = initialState, action) => (
    handlers[action.type]
      ? handlers[action.type](previousState, action)
      : previousState
  )
);

export const isEmptyOrFalsy = (value) => (
  isEmpty(value) ||
  (typeof value === 'undefined') ||
  (value === null)
);

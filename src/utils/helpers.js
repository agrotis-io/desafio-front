import { isEmpty } from 'ramda';

/**
 * Creates a reducer structure mapping
 * action types and their respective
 * handlers.
 *
 * @param {*} initialState
 * @param {object} handlers
 */
export const createReducer = (initialState, handlers) => (
  (previousState = initialState, action) => (
    handlers[action.type]
      ? handlers[action.type](previousState, action)
      : previousState
  )
);

/**
 * Checks if a given value is falsy.
 * Falsy values fall under the following
 * cases:
 *
 * 1) An undefined value;
 * 2) A null value;
 * 3) https://ramdajs.com/docs/#isEmpty
 *
 * @param {*} value
 */
export const isEmptyOrFalsy = (value) => (
  isEmpty(value) ||
  (typeof value === 'undefined') ||
  (value === null)
);

/**
 * A no-operation function. Useful for
 * function placeholders.
 */
export const noop = () => {};

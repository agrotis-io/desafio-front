import TYPES from '@app/actions/document-status/types';

export const createActionSet = (payload) => ({
  type: TYPES.set,
  payload,
});

export const createActionAppend = (payload) => ({
  type: TYPES.append,
  payload,
});
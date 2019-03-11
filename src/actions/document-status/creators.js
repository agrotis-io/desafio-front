import TYPES from '@app/actions/document-status/types';

export const createActionAppend = (payload) => ({
  type: TYPES.append,
  payload,
});
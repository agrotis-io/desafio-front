import { TYPES as ACTION_TYPES } from 'actions/document-status';

const reducer = (previousState = [], action) => {
  if (action.type === ACTION_TYPES.fetchAll) {
    return [...action.payload];
  }

  return previousState;
};

export default reducer;

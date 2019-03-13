import { concat } from 'ramda';
import { createReducer } from '@app/utils/helpers';
import ACTION_TYPES from '@app/actions/document-status/types';

const initialState = {
  totalRecords: 0,
  records: [],
};

const handleSet = (
  previousState,
  { payload: { records, totalRecords } },
) => ({
  totalRecords,
  records: [...records],
});

const handleAppend = (
  previousState,
  { payload: { records, totalRecords } },
) => ({
  totalRecords,
  records: concat(previousState.records, records),
});

const handlers = {
  [ACTION_TYPES.append]: handleAppend,
  [ACTION_TYPES.set]: handleSet,
};

export default createReducer(initialState, handlers);

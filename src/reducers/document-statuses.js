import { concat } from 'ramda';
import { TYPES as ACTION_TYPES } from '@app/actions/document-status';
import { createReducer } from '@app/utils/helpers';

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
  [ACTION_TYPES.set]: handleSet,
  [ACTION_TYPES.append]: handleAppend,
};

export default createReducer(initialState, handlers);

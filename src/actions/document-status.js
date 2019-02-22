import { get } from '@app/api';

export const TYPES = {
  set: 'SET_DOCUMENT_STATUSES',
  append: 'APPEND_DOCUMENT_STATUSES',
}

export const fetchAll = ({ filter, pagination }) => ({
  type: TYPES.set,
  payload: get('documentStatuses', {
    filter,
    pagination,
  }),
});

export const fetchMore = ({ filter, pagination }) => ({
  type: TYPES.append,
  payload: get('documentStatuses', {
    pagination,
    filter,
  }),
});

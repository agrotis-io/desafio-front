import { get } from 'utils/http';

export const TYPES = {
  fetchAll: 'FETCH_ALL_DOCUMENT_STATUS',
}

export const fetchAll = () => ({
    type: TYPES.fetchAll,
    payload: get('documentStatuses'),
});

import { get } from 'utils/http';

export const TYPES = {
  fetchAll: 'FETCH_ALL_DOCUMENT_STATUS',
}

export const fetchAll = ({ itemsPerPage, page }) => ({
    type: TYPES.fetchAll,
    payload: get('documentStatuses', {
      itemsPerPage,
      page,
    }),
});

import { compose, filter, includes, nth, splitEvery, where } from 'ramda';
import api from '@app/api';
import { createActionAppend, createActionSet } from '@app/actions/document-status/creators';
import { isEmptyOrFalsy } from '@app/utils/helpers';

/**
 * PoC for a future redesign
 *
 * fetch()
 * withFilter('name', 'contains')
 * withPagination(page, itemsPerPage)
 *
 * compose(
 *   fetch,
 *   withPagination(page, itemsPerPage),
 *   withFilter('name', 'contains'),
 * )(params);
 */

const buildPaginatedPayload = (totalRecords, records) => ({
  totalRecords,
  records,
});

export const fetch = (params) => (dispatch) => {
  const handleSuccess = (querySnapshot) => {
    const { pagination, filter: dataFilter } = params;
    let allRecords = [];

    querySnapshot.forEach((doc) => {
      allRecords.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    if (!isEmptyOrFalsy(filter))
      allRecords = filter(where({
        name: includes(dataFilter.name),
      }))(allRecords);

    const paginatedRecords = compose(
      nth(pagination.page - 1),
      splitEvery(pagination.itemsPerPage),
    )(allRecords);

    const payload = buildPaginatedPayload(
      allRecords.length,
      paginatedRecords || [],
    );

    dispatch(createActionSet(payload));
  };

  return api
    .get('document-statuses')
    .then(handleSuccess);
};

export const fetchMore = (params) => (dispatch) => {
  const handleSuccess = (querySnapshot) => {
    const { pagination } = params;
    const allRecords = [];

    querySnapshot.forEach((doc) => {
      allRecords.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    const paginatedRecords = compose(
      nth(pagination.page - 1),
      splitEvery(pagination.itemsPerPage),
    )(allRecords);

    const payload = buildPaginatedPayload(
      allRecords.length,
      paginatedRecords || [],
    );

    dispatch(createActionAppend(payload));
  };

  return api
    .get('document-statuses')
    .then(handleSuccess);
};
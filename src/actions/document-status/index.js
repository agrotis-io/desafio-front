import { compose, nth, splitEvery } from 'ramda';
import api from '@app/api';
import { createActionAppend } from '@app/actions/document-status/creators';

const buildPaginatedPayload = (totalRecords, records) => ({
  totalRecords,
  records,
});

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
      paginatedRecords
    );

    dispatch(createActionAppend(payload));
  };

  return api
    .get('document-statuses')
    .then(handleSuccess);
};
import {
  compose,
  filter,
  includes,
  nth,
  prop,
  splitEvery,
  where,
} from 'ramda';
import { isEmptyOrFalsy } from 'utils/helpers';

/**
 * Simulates the data stored in a database.
 */
const mockedData = [
  { id: 1, name: 'Cadastrado', description: 'O documento foi cadastrado no sistema' },
  { id: 2, name: 'Em revisão', description: 'O documento está em revisão' },
  { id: 3, name: 'Em andamento', description: 'O documento está sendo processado' },
  { id: 4, name: 'Retornado', description: 'O documento possui algum problema e precisou ser retornado' },
  { id: 5, name: 'Processado', description: 'O documento foi processado' },
  { id: 6, name: 'Finalizado', description: 'Quando o contrato foi atendido' },
];

/**
 * Builds an object structure for paginated responses.
 * @param {number} totalRecords
 * @param {array} records
 */
const buildResponse = (totalRecords, records) => ({
  totalRecords,
  records,
});

/**
 * Gets all registered document statuses.
 * @param {*} options
 */
export const getDocumentStatuses = (route, options) => {
  const pagination = prop('pagination')(options);
  const dataFilter = prop('filter')(options);
  let length = mockedData.length;
  let data = mockedData;

  if (!isEmptyOrFalsy(dataFilter)) {
    data = filter(where({
      name: includes(prop('name', dataFilter)),
    }))(data);

    length = data.length;
  }

  if (!isEmptyOrFalsy(pagination))
    data = compose(
      nth(prop('page', pagination) - 1),
      splitEvery(prop('itemsPerPage', pagination)),
    )(data);

  return buildResponse(
    length,
    data,
  );
};

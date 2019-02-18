/*
 * This is a mocked HTTP library. Instead of fetching
 * real data from the network, it just mocks data and
 * returns them in a sync way.
 */

import { compose, nth, splitEvery } from "ramda";

const buildPaginatedResponse = (totalRecords, records) => ({
  totalRecords,
  records,
});

const documentStatusesHandler = (route, options) => {
  const { itemsPerPage, page } = options;
  const mockedData = [
    { id: 1, name: 'Cadastrado', description: 'O documento foi cadastrado no sistema' },
    { id: 2, name: 'Em revisão', description: 'O documento está em revisão' },
    { id: 3, name: 'Em andamento', description: 'O documento está sendo processado' },
    { id: 4, name: 'Retornado', description: 'O documento possui algum problema e precisou ser retornado' },
    { id: 5, name: 'Processado', description: 'O documento foi processado' },
    { id: 6, name: 'Finalizado', description: 'Quando o contrato foi atendido' },
  ];

  return buildPaginatedResponse(
    mockedData.length,
    compose(
      nth(page - 1), // Pages start at 1, but indexes at 0
      splitEvery(itemsPerPage),
    )(mockedData),
  );
};

export const get = (route, options) => {
  const requestHandlers = {
    'documentStatuses': documentStatusesHandler,
  };

  if (!requestHandlers[route])
    throw new Error(`Route ${route} not registered`);

  return requestHandlers[route](route, options);
};

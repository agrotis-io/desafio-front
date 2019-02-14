/*
 * This is a mocked HTTP library. Instead of fetching
 * real data from the network, it just mocks data and 
 * returns them in a sync way.
 */

const documentStatusesHandler = (route) => ([
  { id: 1, name: 'Andamento', description: 'Quando o contrato está em andamento' },
  { id: 2, name: 'Finalizado', description: 'Quando o contrato foi atendido' },
]);

export const get = (route) => {
  const requestHandlers = {
    'documentStatuses': documentStatusesHandler,
  };

  if (!requestHandlers[route])
    throw new Error(`Route ${route} not registered`);

  return requestHandlers[route](route);
};

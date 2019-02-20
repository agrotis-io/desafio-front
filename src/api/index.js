/**
 * This is a mocked HTTP library. Instead of fetching
 * real data from the network, it just mocks data and
 * returns them in a sync way.
 */
import logMiddleware from './log-middleware';
import { getDocumentStatuses } from './document-status';

/**
 * Performs a mocked HTTP GET request.
 * @param {*} route
 * @param {*} options
 */
export const get = (route, options) => {
  const requestHandlers = {
    'documentStatuses': getDocumentStatuses,
  };

  if (!requestHandlers[route])
    throw new Error(`Route ${route} not registered`);

  return logMiddleware(requestHandlers[route])(route, options);
};

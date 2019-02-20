const logMiddleware = (callback) => (
  (route, options) => {
    console.log('ROUTE:');
    console.log(route);

    console.log('OPTIONS:');
    console.log(options);

    return callback(route, options);
  }
);

export default logMiddleware;

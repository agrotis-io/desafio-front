import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from 'reducers';

const appStateStore = createStore(
  appReducer,
  composeWithDevTools(),
);

export default appStateStore;

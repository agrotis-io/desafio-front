import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from '@app/reducers';

const appStateStore = createStore(
  appReducer,
  composeWithDevTools(),
);

export default appStateStore;

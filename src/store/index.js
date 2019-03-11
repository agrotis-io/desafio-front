import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appReducer from '@app/reducers';

const appStateStore = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(
    thunk,
  )),
);

export default appStateStore;

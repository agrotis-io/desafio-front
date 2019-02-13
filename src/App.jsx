import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from 'components/header';
import Content from 'components/content';
import DocumentStatusListPage from 'pages/document-status/containers/ListConnector';
import appStateStore from 'store';

const EntryApp = () => (
  <Provider store={appStateStore}>
    <Router>
      <Fragment>
        <Header />

        <Content>        
          <Route exact path="/" component={DocumentStatusListPage} />
        </Content>
      </Fragment>
    </Router>
  </Provider>
);

export default EntryApp;

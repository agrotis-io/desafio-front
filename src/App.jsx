import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from '@app/components/header';
import Content from '@app/components/content';
import DocumentStatusListPage from '@app/pages/document-status/containers/ListConnector';
import appStateStore from '@app/store';

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

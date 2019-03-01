import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import Header from '@app/components/header';
import Content from '@app/components/content';
import DocumentStatusListPage from '@app/pages/document-status/containers/DocumentStatusListConnector';
import DocumentStatusEditPage from '@app/pages/document-status/containers/DocumentStatusEditConnector';
import appStateStore from '@app/store';

const EntryApp = () => (
  <Provider store={appStateStore}>
    <Router>
      <Fragment>
        <Header />

        <Content>
          <Route exact path="/" component={DocumentStatusListPage} />
          <Route exact path="/edit/:id" component={DocumentStatusEditPage} />
        </Content>
      </Fragment>
    </Router>
  </Provider>
);

export default EntryApp;

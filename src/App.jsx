import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Header from './components/header';
import Content from './components/content';
import DocumentStatusListPage from './pages/document-status/containers/List.jsx';

const EntryApp = () => (
  <Router>
    <Fragment>
      <Header />

      <Content>        
        <Route exact path="/" component={DocumentStatusListPage} />
      </Content>
    </Fragment>
  </Router>
);

export default EntryApp;
import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const Index = () => <h2>List of documents</h2>
const Details = () => <h2>Details of specific document</h2>

const EntryApp = () => (
  <Router>
    <Fragment>
      <nav>
        <ul>
          <li><Link to="/">Documents</Link></li>
          <li><Link to="/details/">Details</Link></li>
        </ul>
      </nav>
      
      <Route path="/" exact component={Index} />
      <Route path="/details/" component={Details} />
    </Fragment>
  </Router>
);

export default EntryApp;
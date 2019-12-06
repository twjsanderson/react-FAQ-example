import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Faq1 from './components/Faq1'; 
import Faq2 from './components/Faq2'; 
import Faq3 from './components/Faq3'; 
import './index.css';


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Faq1</Link>
      <Link className="p-3" to="/Faq2">Faq2</Link>
      <Link className="p-3" to="/Faq3">Faq3</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Faq1} />
        <Route path="/Faq2" component={Faq2} />
        <Route path="/Faq3" component={Faq3} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

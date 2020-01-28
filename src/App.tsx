import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Login from './pages/Login';
import Account from './pages/Account';

const styles = require('./styles.module.css');

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

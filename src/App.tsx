import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from './components/Header';
import Login from './pages/Login';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';

const styles = require('./styles.module.css');

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <ProtectedRoute path='/account'>
            <Account />
          </ProtectedRoute>
          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

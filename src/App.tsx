import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Header from './components/Header';
import Login from './pages/Login';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Privacy from './pages/Privacy';

const styles = require('./styles.module.css');

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
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
            <ProtectedRoute path='/privacy'>
              <Privacy />
            </ProtectedRoute>
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;

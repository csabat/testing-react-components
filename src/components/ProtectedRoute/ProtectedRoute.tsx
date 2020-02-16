import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom'

import auth from '../../utils/auth';

interface Props {
  path: string;
}

const ProtectedRoute: FC<Props> = ({ children, path }) => {
  const { getAccountUuid } = auth();
  const isAuthenticated = !!getAccountUuid();

  if(isAuthenticated) {
    return (
      <Route path={path}>
        {children}
      </Route>
    );
  };

  return (
    <Redirect to="/login"/>
  );
};

export default ProtectedRoute
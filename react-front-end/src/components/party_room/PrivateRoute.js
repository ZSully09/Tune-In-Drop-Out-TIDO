import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../OLD -- context/auth';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth();

  return (
    // Redirect to login page if the user is not logged in
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;

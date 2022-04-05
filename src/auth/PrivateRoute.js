import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from '.';

function PrivateRoute(props) {
  return (
    <Route>
      {Auth.isAuthenticated() ? props.children : <Redirect to="/login" />}
    </Route>
  );
}

export default PrivateRoute;

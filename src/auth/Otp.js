import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const pre_otp_details = sessionStorage.getItem('safely_buy_pre_otp');
  return (
    <Route
      {...rest}
      render={(props) =>
        pre_otp_details ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

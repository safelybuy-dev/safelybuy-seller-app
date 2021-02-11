import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { ContextUser } from "../context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isAuthenticated } = useContext(ContextUser)[0];

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          user &&
          Object.keys(user).length === 0 &&
          user.constructor === Object ? (
            <p>ppoading.... private route</p>
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

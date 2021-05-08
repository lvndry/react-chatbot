import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Home } from "./Home";
import { Login } from "./Login";
import { IRootState } from "../store/reducers";

const Routes = () => {
  const currentUser = useSelector(
    (state: IRootState) => state.contact.currentContact
  );
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/"
          exact
          render={() => {
            return currentUser.id === "" ? <Redirect to="/login" /> : <Home />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

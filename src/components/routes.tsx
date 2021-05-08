import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Home } from "./Home";
import { Login } from "./Login";

import { IRootState } from "../store/reducers";
import { setCurrentContact } from "../store/actions";

import { Contact } from "../models";

const Routes = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: IRootState) => state.contact.currentContact
  );

  const [isAuth, setIsAuth] = useState(currentUser.id !== "");

  const sessionStorageUser = sessionStorage.getItem("currentContact");

  useEffect(() => {
    if (sessionStorageUser && sessionStorageUser.length > 0) {
      if (currentUser.id !== "") {
        setIsAuth(true);
      } else {
        const jsonuser: Contact = JSON.parse(sessionStorageUser);
        if (jsonuser.id !== "") {
          dispatch(setCurrentContact(jsonuser));
          setIsAuth(true);
        }
      }
    }
  }, [currentUser]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          render={() => (isAuth ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/login" />)}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

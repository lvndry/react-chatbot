import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Home } from "./Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;

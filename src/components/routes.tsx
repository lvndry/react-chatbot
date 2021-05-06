import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Home";

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;

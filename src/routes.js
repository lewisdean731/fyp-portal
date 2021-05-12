//initially built following some great info from
//https://www.ryanjyost.com/react-routing/

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Page Templates
import Dashboard from "./layouts/dashboard/dashboard";
import User from "./layouts/user/user";


export const RenderRoutes = (props) => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to={"/dashboard"} />
            )} />

          <Route path="/login" render={() => (
            <Redirect to={"/dashboard"} />
            )} />

          <Route exact path="/dashboard" render={() => (
            <Dashboard {...props} />
            )} />

          <Route exact path="/user" render={() => (
            <User {...props} />
            )} />
        </Switch>
    </BrowserRouter>
  );
}

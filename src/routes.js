//initially built following some great info from
//https://www.ryanjyost.com/react-routing/

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Page Templates
import Login from "./layouts/login/login";
import Dashboard from "./layouts/dashboard/dashboard";

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: () => <Redirect to={"/dashboard"} />,
  },
  {
    path: "/",
    key: "APP",
    component: (props) => {
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/login",
        key: "LOGIN",
        exact: true,
        component: () => <Redirect to={"/dashboard"} />,
        // Login will still show up if the user is not authenticated.
        // This stops the login route rendering with the topbar and sidebar
        // around it if an authed user goes to /login.
      },
      {
        path: "/dashboard",
        key: "DASHBOARD",
        exact: true,
        component: () => <Dashboard />,
      },
    ],
  },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

//initially built following some great info from 
//https://www.ryanjyost.com/react-routing/

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Page Templates
import Login from "./layouts/login/login";
import Dashboard from "./layouts/dashboard/dashboard";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Login /> },
  {
    path: "/",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/dashboard",
        key: "APP_ROOT",
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
      render={props => <route.component {...props} routes={route.routes} />}
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
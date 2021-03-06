//initially built following some great info from
//https://www.ryanjyost.com/react-routing/

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Page Templates
import Dashboard from "./layouts/dashboard/dashboard";
import User from "./layouts/user/user";
import Team from "./layouts/team/team";
import Teams from "./layouts/team/teams";
import Project from "./layouts/project/project";
import Projects from "./layouts/project/projects";
import Metrics from "./layouts/metrics/metrics";

export const RenderRoutes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/dashboard"} />} />

        <Route path="/login" render={() => <Redirect to={"/dashboard"} />} />

        <Route path="/dashboard" render={() => <Dashboard {...props} />} />

        <Route path="/user" render={() => <User {...props} />} />

        <Route path="/team/:teamId" render={() => <Team {...props} />} />

        <Route path="/teams" render={() => <Teams {...props} />} />

        <Route path="/metrics" render={() => <Metrics {...props} />} />

        <Route
          path="/project/:projectId"
          render={() => <Project {...props} />}
        />

        <Route path="/projects" render={() => <Projects {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/layout.hoc";
import RegisterLogin from "./components/register_login/register-login.component";
import Register from "./components/register_login/register.component";

import Auth from "./hoc/auth";
import UserDashboard from "./components/user/user-dashboard.component";

import HomePage from "./components/home/home.component";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
        <Route path="/" exact component={Auth(HomePage, null)} />
        <Route
          path="/register_login"
          exact
          component={Auth(RegisterLogin, false)}
        />
        <Route path="/register" exact component={Auth(Register, false)} />
      </Switch>
    </Layout>
  );
};

export default Routes;

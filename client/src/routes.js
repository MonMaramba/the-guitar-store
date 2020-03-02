import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/layout.hoc";
import RegisterLogin from "./components/register_login/register-login.component";
import Register from "./components/register_login/register.component";

import UserDashboard from "./components/user/user-dashboard.component";

import HomePage from "./pages/home.component";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/" exact component={HomePage} />
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Layout>
  );
};

export default Routes;

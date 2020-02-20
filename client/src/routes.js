import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/layout.hoc";
import RegisterLogin from "./components/register_login/register-login.component";

import HomePage from "./pages/home.component";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register_login" exact component={RegisterLogin} />
      </Switch>
    </Layout>
  );
};

export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/layout.hoc";

import HomePage from "./pages/home.component";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Layout>
  );
};

export default Routes;

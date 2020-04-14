import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/layout.hoc";
import RegisterLogin from "./components/register_login/register-login.component";
import Register from "./components/register_login/register.component";

import Auth from "./hoc/auth";
import UserDashboard from "./components/user/user-dashboard.component";
import Shop from "./components/shop/shop.component";

import HomePage from "./components/home/home.component";
import AddProduct from "./components/user/Admin/add_product.component";
import ManageCategories from "./components/user/Admin/manage_categories.component";
import ProductPage from "./components/product/product.component";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
        <Route
          path="/admin/add_product"
          exact
          component={Auth(AddProduct, true)}
        />
        <Route
          path="/admin/manage_categories"
          exact
          component={Auth(ManageCategories, true)}
        />
        <Route path="/" exact component={Auth(HomePage, null)} />
        <Route
          path="/register_login"
          exact
          component={Auth(RegisterLogin, false)}
        />
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route
          path="/product_detail/:id"
          exact
          component={Auth(ProductPage, null)}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;

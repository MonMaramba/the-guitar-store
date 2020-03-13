import React from "react";
import UserLayout from "../../hoc/user-hoc";
import Mybutton from "../utils/button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./user-dashboard.styles.scss";

const UserDashboard = ({ user }) => {
  let userData = user.userData;
  let userArr = [];
  for (let key in userData) {
    userArr.push(userData[key]);
  }

  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User information</h1>
          <div>
            <span>{userArr[3]}</span>
            <span>{userArr[4]}</span>
            <span>{userArr[2]}</span>
          </div>
          <Mybutton
            type="default"
            title="Edit account info"
            linkTo="/user/user_profile"
          />
        </div>
        <div className="user_nfo_panel">
          <h1>History of purchases</h1>
          <div className="user_product_block_wrapper">history</div>
        </div>
      </div>
    </UserLayout>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(withRouter(UserDashboard));

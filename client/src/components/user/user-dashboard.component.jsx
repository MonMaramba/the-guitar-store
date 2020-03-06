import React from "react";
import UserLayout from "../../hoc/user-hoc";
import Mybutton from "../utils/button";

import "./user-dashboard.styles.scss";

const UserDashboard = ({ user }) => {
  console.log(user.userData);

  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User information</h1>
          <div>
            <span>name</span>
            <span>lastname</span>
            <span>email</span>
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

export default UserDashboard;
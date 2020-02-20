import React from "react";
import Button from "../utils/button";

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>Blah!</p>
            <Button
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin: "10px 0 0 0"
              }}
            />
          </div>
          <div className="right">
            <h2>Register customers</h2>
            <p>If you have an account please log in.</p>
            LOG IN
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;

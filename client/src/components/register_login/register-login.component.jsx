import React from "react";
import Button from "../utils/button";

import Login from "./login.component";

import "./register-login.styles.scss";

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Filet mignon ground round t-bone ham hock pig, spare ribs strip
              steak hamburger drumstick burgdoggen pastrami venison ribeye pork
              chop. Tongue beef ribs bresaola, chuck boudin beef pork loin.
            </p>
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
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;

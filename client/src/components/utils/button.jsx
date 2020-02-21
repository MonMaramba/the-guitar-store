import React from "react";
import { Link } from "react-router-dom";

import "./button.styles.scss";

const Button = props => {
  const buttons = () => {
    let template = "";

    switch (props.type) {
      case "default":
        template = (
          <Link className="link_default" to={props.linkTo} {...props.addStyles}>
            {props.title}
          </Link>
        );
        break;

      default:
        template = "";
    }

    return template;
  };

  return <div className="my_button">{buttons()}</div>;
};

export default Button;

import React, { Component } from "react";
import "./header.styles.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">WAVES</div>
          </div>
          <div className="right">
            <div className="top">links</div>
            <div className="bottom">more links</div>
          </div>
        </div>
      </div>
    );
  }
}

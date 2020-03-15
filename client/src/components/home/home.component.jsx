import React, { Component } from "react";
import HomeSlider from "./home-slider.component";
import HomePromotion from "./home-promotion.component";

import "./home.styles.scss";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotion />
      </div>
    );
  }
}

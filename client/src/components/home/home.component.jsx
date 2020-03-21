import React, { Component } from "react";
import { connect } from "react-redux";

import HomeSlider from "./home-slider.component";
import HomePromotion from "./home-promotion.component";
import CardBlock from "../utils/card_block.component";

import {
  getProductsBySell,
  getProductsByArrival
} from "../../redux/actions/products_actions";

import "./home.styles.scss";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }

  render() {
    return (
      <div>
        <HomeSlider />
        <CardBlock
          list={this.props.products.bySell}
          title="Best-selling guitars"
        />
        <HomePromotion />
        <CardBlock
          list={this.props.products.byArrival}
          title="Latest arrivals"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Home);

import React, { Component } from "react";
import { connect } from "react-redux";

import PageTop from "../utils/page_top.component";

import {
  getProductDetail,
  clearProductDetail,
} from "../../redux/actions/products_actions";

class ProductPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params);

    // this.props.dispatch(getProductDetail(id));
  }

  componentWillMount() {
    this.props.dispatch(clearProductDetail());
  }

  render() {
    return (
      <div>
        <PageTop title="Product detail" />
        <div className="container">
          {this.props.products.getProductDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">images</div>
              <div className="right">information</div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ProductPage);

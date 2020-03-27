import React, { Component } from "react";
import { connect } from "react-redux";

import { frets } from "../utils/Form/fixed_categories";

import PageTop from "../utils/page_top.component";
import { getBrands, getWoods } from "../../redux/actions/products_actions";
import CollapsibleCheckbox from "../utils/collapsibleCheckbox.component";

import "./shop.styles.scss";

class Shop extends Component {
  state = {
    grid: "",
    limit: 6,
    skip: 0,
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: []
    }
  };

  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }
  // filters is being passed from child prop collapsibleCheckbox. This is the newChecked variable array that contains product ids
  handleFilters = (filters, category) => {
    console.log(category);
    const newFilters = { ...this.state.filters }; // copying state.filters
    newFilters[category] = filters; //putting filters passed from children checkbox into the shop state

    this.setState({
      filters: newFilters
    });
  };

  render() {
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <CollapsibleCheckbox
                initState={true}
                title="Brands"
                list={products.brands}
                handleFilters={filters => this.handleFilters(filters, "brand")}
              />
              <CollapsibleCheckbox
                initState={false}
                title="Frets"
                list={frets}
                handleFilters={filters => this.handleFilters(filters, "frets")}
              />
              <CollapsibleCheckbox
                initState={false}
                title="Woods"
                list={products.woods}
                handleFilters={filters => this.handleFilters(filters, "woods")}
              />
            </div>
            <div className="right">right</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Shop);

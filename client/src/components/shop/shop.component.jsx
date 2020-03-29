import React, { Component } from "react";
import { connect } from "react-redux";

import { frets, price } from "../utils/Form/fixed_categories";

import PageTop from "../utils/page_top.component";
import {
  getProductsToShop,
  getBrands,
  getWoods
} from "../../redux/actions/products_actions";
import CollapsibleCheckbox from "../utils/collapsibleCheckbox.component";
import CollapseRadio from "../utils/Form/collapseRadioButtons.component";
import LoadMoreCards from "./load-more-cards.component";

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

    // sending selected states to the redux actions
    this.props.dispatch(
      getProductsToShop(this.state.skip, this.state.limit, this.state.filters)
    );
  }

  // handlePrice function will search for the price range for the choice on the radio buttons
  handlePrice = value => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };
  // filters is being passed from child prop collapsibleCheckbox. This is the newChecked variable array that contains product ids
  handleFilters = (filters, category) => {
    const newFilters = { ...this.state.filters }; // copying state.filters
    newFilters[category] = filters; //putting filters passed from children checkbox into the shop state

    if (category === "price") {
      let priceValues = this.handlePrice(filters);
      newFilters[category] = priceValues;
    }
    // taking the new state and triggering a function to display it
    this.showFilteredResults(newFilters);

    this.setState({
      filters: newFilters
    });
  };

  showFilteredResults = filters => {
    this.props
      .dispatch(getProductsToShop(0, this.state.limit, filters))
      .then(() => {
        this.setState({
          skip: 0
        });
      });
  };

  loadMoreCards = () => {};

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
              <CollapseRadio
                initState={true}
                title="Price"
                list={price}
                handleFilters={filters => this.handleFilters(filters, "price")}
              />
            </div>
            <div className="right">
              <div className="shop_options">
                <div className="shop_grids clear"> grids</div>
              </div>
              <div className="card_container">
                <LoadMoreCards
                  grid={this.state.grid}
                  limit={this.state.limit}
                  size={products.toShopSize}
                  products={products.toShop}
                  loadMore={() => this.loadMoreCards()}
                />
              </div>
            </div>
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

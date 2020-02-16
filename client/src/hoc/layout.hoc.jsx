import React, { Component } from "react";
import "./layout-hoc.styles.scss";
import Footer from "../components/header_footer/footer/footer.component";
import Header from "../components/header_footer/header/header.component";
import BottomFooter from "../components/header_footer/bottom-footer/bottom-footer.component";
export default class Layout extends Component {
  render() {
    return (
      <div className="page_container">
        <Header />
        {this.props.children}
        <Footer />
        <BottomFooter />
      </div>
    );
  }
}

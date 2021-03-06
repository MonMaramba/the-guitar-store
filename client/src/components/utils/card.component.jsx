import React, { Component } from "react";
import MyButton from "./button";

import "./card_component.styles.scss";

class Card extends Component {
  // rendering the image based on presence or absence of an image in the props
  renderCardImage(images) {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return "/images/noImage.png";
    }
  }

  render() {
    const props = this.props;

    return (
      <div className={`card_item_wrapper ${props.grid}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImage(props.images)}) no-repeat`
          }}
        ></div>
        <div className="action_container">
          <div className="tags">
            <div className="brand">{props.brand.name}</div>
            <div className="name">{props.name}</div>
            <div className="price">${props.price}</div>
          </div>

          {props.grid ? (
            <div className="description">
              <p>{props.description}</p>
            </div>
          ) : null}
          <div className="actions">
            <div className="button_wrapp">
              <MyButton
                className="big_button"
                type="default"
                altClass="card_link"
                title="View product"
                linkTo={`/product_detail/${props.id}`}
                addStyles={{ margin: "10px 0 0 0" }}
              />
            </div>
            <div className="button_wrapp">
              <MyButton
                type="bag_link"
                runAction={() => {
                  console.log("added to cart");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

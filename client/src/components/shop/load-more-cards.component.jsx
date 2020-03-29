import React from "react";
import CardBlockShop from "../utils/card_block_shop.component";

import "./load-more-cards.styles.scss";

const LoadMoreCards = props => {
  return (
    <div>
      <div>
        <CardBlockShop grid={props.grid} list={props.products} />
      </div>
      <div className="load_more_container">
        <span onClick={() => props.loadMore()}>Load more</span>
      </div>
    </div>
  );
};

export default LoadMoreCards;

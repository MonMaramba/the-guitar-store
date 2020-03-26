import React from "react";
import Card from "./card.component";

import "./card_block.styles.scss";

const CardBlock = props => {
  const renderCards = () =>
    // conditional render of Card component speading the card props.
    // sending a split-up prop eliminates need to iterate thru it in the card component
    props.list ? props.list.map((card, i) => <Card key={i} {...card} />) : null;

  return (
    <div className="card_block">
      <div className="container">
        {/* 1. passing the title prop */}
        {props.title ? <div className="title">{props.title}</div> : null}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {/* 2. function to render the cards passing the list in props */}
          {renderCards(props.list)}
        </div>
      </div>
    </div>
  );
};

export default CardBlock;

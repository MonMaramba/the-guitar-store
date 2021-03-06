import React from "react";
import MyButton from "../utils/button";
import Photo3 from "../../images/featured/featured_home_3.jpg";

import "./home_promotion.styles.scss";

const HomePromotion = props => {
  const promotion = {
    img: Photo3,
    lineOne: "Up to 40% off",
    lineTwo: "In second hand guitars",
    linkTitle: "Shop now",
    linkTo: "/shop"
  };

  const renderPromotion = () =>
    promotion ? (
      <div
        className="home_promotion_img"
        style={{ background: `url(${promotion.img})` }}
      >
        <div className="tag title">{promotion.lineOne}</div>
        <div className="tag low_title">{promotion.lineTwo}</div>
        <div className="button">
          <MyButton
            type="default"
            title={promotion.linkTitle}
            linkTo={promotion.linkTo}
            addStyles={{ margin: "10px 0 0 0" }}
          />
        </div>
      </div>
    ) : null;

  return <div className="home_promotion">{renderPromotion()}</div>;
};

export default HomePromotion;

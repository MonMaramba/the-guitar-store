import React from "react";
import Slider from "react-slick";
import MyButton from "../utils/button";
import Photo1 from "../../images/featured/featured_home.jpg";
import Photo2 from "../../images/featured/featured_home_2.jpg";

const HomeSlider = props => {
  const slides = [
    {
      img: Photo1,
      lineOne: "Fender",
      lineTwo: "Custom shop",
      linkTitle: "Shop now",
      linkTo: "/shop"
    },
    {
      img: Photo2,
      lineOne: "B-Stock",
      lineTwo: "Awesome discounts",
      linkTitle: "View offers",
      linkTo: "/shop"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false
  };

  const generateSlides = () =>
    slides
      ? slides.map((item, i) => (
          <div key={i}>
            <div
              className="featured_image"
              style={{
                background: `url(${item.img}) no-repeat `,
                height: `${window.innerHeight}px`,
                width: `${window.innerWidth}px`
              }}
            >
              <div className="featured_action"></div>
            </div>
          </div>
        ))
      : null;
  return (
    <div className="featured_container">
      <Slider {...settings}>{generateSlides()}</Slider>
    </div>
  );
};

export default HomeSlider;

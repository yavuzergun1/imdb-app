import React from "react";
import "../../App.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const properties = {
  duration: 4000,
  transitionDuration: 2000,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  indicators: true,
  infinite: true,
  pauseOnHover: true,
};

const slideImages = [
  {
    url: require("./../../Assets/braveheart.jpg"),
  },
  {
    url:require("./../../Assets/avatar.png"),
  },
  {
    url: require("./../../Assets/casablanca.jpg"),
  },
  {
    url: require("./../../Assets/esaretinbedeli.jpg"),
  },
  {
    url: require("./../../Assets/forrestgump.jpg"),
  },
  {
    url: require("./../../Assets/gladiator.jpg"),
  },
  {
    url: require("./../../Assets/pianist.jpg"),
  },
  {
    url: require("./../../Assets/godfather.jpg"),
  },
];

const Slider = () => {
  return (
    <div className="slide-container">
      <h2>Popular Films</h2>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;

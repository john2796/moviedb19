/* eslint-disable no-mixed-operators */
import './trailerCarousel.css'
import React, { Component } from "react";
import Slider from "react-slick";



function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} className="slick-arrow-trailer right-trailer" onClick={onClick}>
      <i className="fas fa-chevron-right" />
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} className="slick-arrow-trailer left-trailer" onClick={onClick}>
      <i className="fas fa-chevron-left" />
    </div>
  );
}
class TrailerCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 6,
      speed: 400,
      lazyLoad: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <>
        <div className="trailer-wrapper">
          <Slider {...settings}>
            {this.props.trailers.map(item => {
              return (
                <iframe width="420" height="200"
                  src={`https://www.youtube.com/embed/${item.key}`}>
                </iframe>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}


export default TrailerCarousel;

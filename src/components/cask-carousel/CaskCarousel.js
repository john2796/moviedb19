/* eslint-disable no-mixed-operators */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./caskCarousel.css";
import Slider from "react-slick";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{ ...style }}
      className="slick-arrow-cast right-cast"
      onClick={onClick}
    >
      <i className="fas fa-chevron-right" />
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{ ...style }}
      className="slick-arrow-cast left-cast"
      onClick={onClick}
    >
      <i className="fas fa-chevron-left" />
    </div>
  );
}
class CaskCarousel extends Component {
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
    const { tabs, filterTopics } = this.props;
    return (
      <>
        <div className="cast-wrapper">
          <Slider {...settings}>
            {!filterTopics ? (
              <h2 className="no-data">No cast available ...</h2>
            ) : (
              filterTopics.map(item => {
                return (
                  <Link
                    className="inifinte-card-link"
                    to={`/movie/${tabs}/${item.id}`}
                    key={item.id}
                  >
                    <div className="casts-cards">
                      <img
                        className="images"
                        src={`https://image.tmdb.org/t/p/w500${
                          item.profile_path
                        }`}
                        alt={item.name}
                      />
                      <p className="casts-title">{item.name}</p>
                    </div>
                  </Link>
                );
              })
            )}
          </Slider>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.movieReducer.genres
});

export default connect(mapStateToProps)(CaskCarousel);

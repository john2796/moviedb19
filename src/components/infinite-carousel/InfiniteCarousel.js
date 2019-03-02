import React, { Component } from "react";
import Slider from "react-slick";
import "./infiniteCarousel.css";
import { connect } from "react-redux";
import { CLIENT_RENEG_WINDOW } from "tls";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={{ ...style }} className="slick-arrow right" onClick={onClick}>
      <i className="fas fa-chevron-right" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={{ ...style }} className="slick-arrow left" onClick={onClick}>
      <i className="fas fa-chevron-left" />
    </div>
  );
}
class InfiniteCarousel extends Component {
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
          breakpoint: 900,
          settings: {
            slidesToShow: 6,
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
      <Slider {...settings}>
        {this.props.filterTopics.map(item => {
          let genredynamic = item.genre_ids.slice(0, 2) || 27;
          console.log("genres", genredynamic);
          return (
            <div className="upcoming-cards" key={item.id}>
              <img
                className="images"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.original_title}
              />
              <p className="carousel-title">{item.title}</p>
              <p className="carousel-rating">
                <span>
                  <i className="fas fa-star" />
                </span>
                {item.vote_average}
              </p>
              <p className="carousel-genres">
                {this.props.genres
                  .filter(x => genredynamic.includes(x.id))
                  .map(genre => {
                    console.log("name", genre);
                    return <span>{genre.name}</span>;
                  })}
              </p>
            </div>
          );
        })}
      </Slider>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.movieReducer.genres
});

export default connect(mapStateToProps)(InfiniteCarousel);

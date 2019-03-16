import React, { Component } from "react";
import Slider from "react-slick";
import "./infiniteCarousel.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div style={{ ...style }} className="slick-arrow right" onClick={onClick}>
      <i className="fas fa-chevron-right" />
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
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
    const { tabs } = this.props
    return (
      <>
        <Slider {...settings}>
          {this.props.filterTopics.map(item => {
            let genredynamic = item.genre_ids.slice(0, 2) || 27;
            return (
              <Link to={`/movie/${tabs}/${item.id}`} key={item.id} >
                <div className="upcoming-cards">
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
                        return <span
                          key={genre.id}
                        >{genre.name}</span>;
                      })}
                  </p>
                </div>
              </Link>
            );
          })}
        </Slider>
      </>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.movieReducer.genres
});

export default connect(mapStateToProps)(InfiniteCarousel);

import React, { Component } from "react";
import Slider from "react-slick";

class UpcomingInfiniteCarousel extends Component {
  render() {
    const { upcoming } = this.props;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 300
    };

    return (
      <Slider {...settings}>
        {upcoming.map(item => (
          <div className="upcoming-cards">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.original_title}
            />
          </div>
        ))}
      </Slider>
    );
  }
}
export default UpcomingInfiniteCarousel;

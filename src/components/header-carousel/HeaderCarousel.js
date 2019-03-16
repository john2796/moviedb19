import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./HeaderCarousel.css";

class HeaderCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header-carousel-container">
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          emulateTouch={true}
        >
          <div className="carousel-slide">
            <img
              src="https://image.tmdb.org/t/p/w1280/7d6EY00g1c39SGZOoCJ5Py9nNth.jpg"
              style={{ opacity: "0.6" }}
              alt="carousel item"
            />

            <div className="carousel-movie-info">
              <h2 className="carousel-movie-title">
                SPIDERMAN: INTO THE SPIDERVERSE
              </h2>
              <p>Animation | 8.1 Rating</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src="https://image.tmdb.org/t/p/w1280/lvjscO8wmpEbIfOEZi92Je8Ktlg.jpg"
              style={{ opacity: "0.6" }}
              alt="carousel item"
            />
            <div className="carousel-movie-info">
              <h2 className="carousel-movie-title">GLASS</h2>
              <p>Thriller | 7.7 Rating</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img
              src="https://image.tmdb.org/t/p/w1280/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
              style={{ opacity: "0.6" }}
              alt="carousel item"
            />
            <div className="carousel-movie-info">
              <h2 className="carousel-movie-title">AVENGERS: INFINITY WAR</h2>
              <p>Action | 8.3 Rating</p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default HeaderCarousel;

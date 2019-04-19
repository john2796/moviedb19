import React, { Component } from "react";

import "./summaryInfo.css";

import CaskCarousel from "../cask-carousel/CaskCarousel";

class SummaryInfo extends Component {
  render() {
    const { movie, casts, trailers, reviews } = this.props;
    const filterNoImageCast = casts.filter(x => x.profile_path !== null);
    const getTwoTrailer = trailers.filter((x, idx) => idx < 2);

    return (
      <>
        {/* <------------ Summary section in Single Page movie ------------> */}

        <section className="summary">
          <div className="summary-info">
            <h2 className="secondary-main-header">summary</h2>
            {!movie ? (
              <h2 className="no-data">No summary available ...</h2>
            ) : (
              <p className="summary-overview">{movie && movie.overview}</p>
            )}
          </div>

          {/* <------------ CaskCarousel section in Single Page movie ------------> */}
          <section className="casts">
            <h2 className="secondary-main-header">cast</h2>
            <CaskCarousel filterTopics={filterNoImageCast} tabs="casts" />
          </section>

          {/* <------------ Trailers section in Single Page movie ------------> */}
          <section className="casts trailers">
            <h2 className="secondary-main-header">trailers</h2>
            <div className="trailer-video-wrapper">
              {!getTwoTrailer ? (
                <h2 className="no-data">No trailers available ...</h2>
              ) : (
                getTwoTrailer.map(item => (
                  <iframe
                    width="370"
                    height="310"
                    align="center"
                    key={item.id}
                    title={item.name}
                    className="youtube"
                    src={`https://www.youtube.com/embed/${item.key}`}
                  />
                ))
              )}
            </div>
          </section>

          {/* <------------ Reviews section in Single Page movie ------------> */}
          <section className="summary-reviews">
            <h2 className="secondary-main-header">popular reviews</h2>

            {!reviews ? (
              <h2 className="no-data">No reviews available ...</h2>
            ) : (
              reviews.map((item, idx) => {
                return (
                  <div
                    className="reviews-message"
                    key={item.id}
                    style={
                      idx % 2 === 0
                        ? { borderLeft: "5px solid #ffff" }
                        : { borderRight: "5px solid #ffff" }
                    }
                  >
                    <div className="review-content-innner">
                      <h3>{item.author}</h3>
                      <p className="actual-message">
                        {item.content.slice(0, 300)}...
                      </p>

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.url}
                        className="see-full-review"
                      >
                        See full review
                        <span>
                          <i className="fas fa-chevron-right right-arrow-review" />
                        </span>
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </section>
        </section>
      </>
    );
  }
}

export default SummaryInfo;

import React, { Component } from 'react';
import './summaryInfo.css'
import CaskCarousel from '../cask-carousel/CaskCarousel';


class SummaryInfo extends Component {
  render() {
    const { movie, casts, trailers, reviews } = this.props
    const filterNoImageCast = casts.filter((x) => x.profile_path !== null);
    const getTwoTrailer = trailers.filter((x, idx) => idx < 2)

    return (
      <>
        <section className="summary">
          <div className="summary-info">
            <h2 className="secondary-main-header">summary</h2>
            <p className="summary-overview">{movie && movie.overview}</p>
          </div>

          <section className="casts">
            <h2 className="secondary-main-header">
              cast
          </h2>
            <CaskCarousel filterTopics={filterNoImageCast} tabs='casts' />
          </section>

          <section className="casts trailers">
            <h2 className="secondary-main-header">
              trailers
          </h2>
            <div className="trailer-video-wrapper">
              {getTwoTrailer.map((item) =>
                <iframe
                  width="370"
                  height="310"
                  align="center"
                  key={item.id}
                  title={item.name}
                  className="youtube"
                  src={`https://www.youtube.com/embed/${item.key}`}>
                </iframe>
              )}
            </div>
          </section>


          <section className="summary-reviews">
            <h2 className="secondary-main-header">
              popular reviews
            </h2>

            {reviews.map((item, idx) => {
              return (
                <div className="reviews-message"
                  key={item.id}
                  style={
                    idx % 2 === 0
                      ? { borderLeft: "5px solid #ffff" }
                      : { borderRight: "5px solid #ffff" }
                  }
                >
                  <div className="review-content-innner">
                    <h3>{item.author}</h3>
                    <p className="actual-message">{item.content.slice(0, 300)}...</p>

                    <a target="_blank" rel="noopener noreferrer" href={item.url} className="see-full-review">See full review
                <span><i className="fas fa-chevron-right right-arrow-review"></i></span>
                    </a>
                  </div>
                </div>
              )
            })}


          </section>


        </section>
      </>
    );
  }
}

export default SummaryInfo;
import React from 'react';
import './summaryInfo.css'
import CaskCarousel from '../cask-carousel/CaskCarousel';



const SummaryInfo = ({ movie, casts }) => {

  return (
    <section className="summary">
      <div className="summary-info">
        <h2 className="secondary-main-header">summary</h2>
        <p className="summary-overview">{movie && movie.overview}</p>
      </div>

      <section className="casts">
        <h2 className="secondary-main-header">
          cast
      </h2>
        <CaskCarousel filterTopics={casts} tabs='casts' />


      </section>

    </section>
  );
};

export default SummaryInfo;
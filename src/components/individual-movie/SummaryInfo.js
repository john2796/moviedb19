import React from 'react';
import './summaryInfo.css'



const SummaryInfo = ({ movie }) => {
  return (
    <section className="summary">
      <div className="summary-info">
        <h2 className="secondary-main-header">summary</h2>
        <p className="summary-overview">{movie && movie.overview}</p>
      </div>
    </section>
  );
};

export default SummaryInfo;
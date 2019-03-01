import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class InfiniteCarousel extends Component {
  items = [1, 2, 3, 4, 5];

  galleryItem = (item, i) => (
    <div key={`key-${i}`} className="yours-custom-class">
      <h2>{item}</h2>
    </div>
  );

  thumbItem = (item, i) => (
    <li key={i} onClick={() => this.Carousel._onDotClick(i)}>
      Thumb {item}
    </li>
  );

  render() {
    const items = this.items.map(this.galleryItem);

    return (
      <div>
        <h3>Navigation</h3>
        <ul>{this.items.map(this.thumbItem)}</ul>
        <button onClick={() => this.Carousel._slidePrev()}>Prev button</button>
        <button onClick={() => this.Carousel._slideNext()}>Next button</button>
        <h3>React Alice Carousel</h3>

        <AliceCarousel
          items={items}
          dotsDisabled={true}
          buttonsDisabled={true}
          ref={el => (this.Carousel = el)}
        />
      </div>
    );
  }
}
export default InfiniteCarousel;

import React, { Component } from 'react';
import './styles.css';
import Slider from "react-slick";

export class Feedbacks extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      speed: 500,
      slidesToShow: 5,
      infinite: false,
      swipeToSlide: true
    };
    return (
      <Slider {...settings} className="bait-colors__slider">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

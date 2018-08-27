import React, { Component } from 'react';
import './styles.css';
import Slider from "react-slick";
import { DataConsumer } from '../../context/context';
import {  MarkdownPreview  } from 'react-marked-markdown';
import image from './avatar.png';

export class Feedbacks extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      infinite: false,
      swipeToSlide: true
    };
    return (
      <DataConsumer>
        {
          ({ feedbacks }) => (
            <Slider {...settings} className="bait-colors__slider">
              {
                feedbacks && feedbacks.map((item, key) => (
                  <div key={key}>
                    {
                      <img className="feedbacks__image" src={image} alt="alt"/>
                    }
                    <h3 className="feedbacks__username">
                      {item.fields.name}
                    </h3>
                    <MarkdownPreview value={ item.fields.text }/>
                  </div>
                ))
              }
            </Slider>
          )
        }
      </DataConsumer>
    );
  }
}

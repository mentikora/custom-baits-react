import React, { Component } from 'react';
import './styles.css';
import Slider from "react-slick";
import { DataConsumer } from '../../context/context';
import {  MarkdownPreview  } from 'react-marked-markdown';
import image from './avatar.png';

export class Feedbacks extends Component {
  render() {
    const settings = {
      autoplay: false,
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      infinite: false,
      swipeToSlide: true,
    };
    return (
      <DataConsumer>
        {
          ({ feedbacks }) => (
            <Slider {...settings} className="bait-colors__slider">
              {
                feedbacks && feedbacks.map((item, key) => (
                  <div key={key} className="feedback-item">
                    <div className="feedback-item__header">
                      <div className="feedback-item__header-leftside">
                        {
                          <img className="feedback-item__image" src={image} alt="alt"/>
                        }
                      </div>
                      <div className="feedback-item__header-rightside">
                        <h3 className="feedback-item__username">
                          {item.fields.name}
                        </h3>
                        <span className="feedback-item__date">
                          {item.fields.date}
                        </span>
                      </div>
                    </div>
                    <MarkdownPreview className="feedback-item__text" value={ item.fields.text }/>
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

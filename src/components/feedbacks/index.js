import React, { Component } from 'react';
import './styles.css';
import Slider from "react-slick";

import image from './avatar.png';

const f = [
  {
    fullName: 'Kolia Kryzhanivsky',
    image: '',
    text: 'Сьогодні ввечері відправився на річку половити клина. Після повені місця трохи помінялись, що робило сьогоднішню рибалку ще більш цікавою. Ловити вирішив на різні моделі коливалок #Custom_Baits. Рибка клювала дуже активно, практично на кожному перспективну місці радувала впевненими потужними покльвоками. Також бонусом попалась невелика щучка, яка стояла разом із клином на перекаті. Загалом вдалось спіймати більше двох десятків риб, які після фотосесія повернулись у рідну стихію.'
  },
  {
    fullName: 'Name Surname',
    image: '',
    text: 'lorem'
  },
  {
    fullName: 'Name Surname',
    image: '',
    text: 'lorem'
  },
  {
    fullName: 'Name Surname',
    image: '',
    text: 'lorem'
  },
  {
    fullName: 'Name Surname',
    image: '',
    text: 'lorem'
  }
]

export class Feedbacks extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 2,
      infinite: false,
      swipeToSlide: true
    };
    return (
      <Slider {...settings} className="bait-colors__slider">
        {
          f.map((item, key) => (
            <div key={key}>
              <img className="feedbacks__image" src={image} alt="alt"/>
              <h3 className="feedbacks__username">
                {item.fullName}
              </h3>
              <p className="feedbacks__text">
                {item.text}
              </p>
            </div>
          ))
        }
      </Slider>
    );
  }
}

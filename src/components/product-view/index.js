import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';
import { DataConsumer } from '../../context/context';
import { Helmet } from "react-helmet";
import {  MarkdownPreview  } from 'react-marked-markdown';
import Slider from "react-slick";

class _ProductView extends Component {

  getBait(baits, id){
    const { history } = this.props;
    const bait = baits.find((b) => b.sys.id === id);

    if (bait) {
      return bait.fields
    }

    history.push('/');

    return {};
  } 

  render(){
    const { match: { params: { id } } } = this.props;

    const settings = {
      autoplay: false,
      dots: false,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      infinite: false,
      swipeToSlide: true,
    };

    return(
      <DataConsumer>
        { 
          ({ baits, isLoading }) => {
            if (isLoading){
              return `Loading...` 
            }
            const bait = this.getBait(baits, id)

            return <div className="product-view-wrapper">
              <Helmet>
                <title>{bait.name} - Custom Baits</title>
                <meta property="og:image" content={bait.imagePreview.fields.file.url} />
              </Helmet>
              <div className="container">
                <div className="product-view">
                  <header className="product-view__header">
                    <h1 className="product-view__title">
                      {bait.name} 
                    </h1>
                  </header>
                  <div className="product-view__gallery">
                    <Slider {...settings} className="product-view__slider">
                      {
                        bait && bait.gallery.map((item, key) => (
                          <div key={key} className="product-view__slider-slide">
                            <div className="product-view__slider-slide-image" style={{backgroundImage: `url(${item.fields.file.url})`}}></div>
                          </div>
                        ))
                      }
                    </Slider>
                  </div>
                  <p className="product-view__weight">
                    {bait.weight}g
                  </p>
                  <p className="product-view__price">
                    &#8372;{bait.price}
                  </p>
                  <p className="product-view__price">
                    {bait.price}
                  </p>
                  <p className="product-view__status">
                    Avaible: {`${ bait.status }`}
                  </p>
                  <MarkdownPreview className="product-view__text" value={ bait.textFull }/>
                </div>
              </div>
            </div>
          }
        }
      </DataConsumer>
    );
  }
}

export const ProductView = withRouter(_ProductView);

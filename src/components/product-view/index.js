import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';
import { DataConsumer } from '../../context/context';
import { Helmet } from "react-helmet";
import {  MarkdownPreview  } from 'react-marked-markdown';
import Slider from "react-slick";
import { BaitColors } from '../bait-colors';

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
          ({ baits, colors, isLoading }) => {
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
                  <div className="product-view-row">
                    <aside className="product-view-side product-view__gallery">
                      {/* <Slider {...settings} className="product-view__slider">
                        {
                          bait.gallery && bait.gallery.map((item, key) => (
                            <div key={key} className="product-view__slider-slide">
                              <div className="product-view__slider-slide-image" style={{backgroundImage: `url(${item.fields.file.url})`}}></div>
                            </div>
                          ))
                        }
                      </Slider> */}
                      {
                      bait.gallery && bait.gallery.map((item, key) => (
                            <div key={key} className="product-view__slider-slide">
                              <div className="product-view__slider-slide-image" style={{backgroundImage: `url(${item.fields.file.url})`}}></div>
                            </div>
                          ))
                        }
                    </aside>
                    <aside className="product-view-side product-view__info">
                      <h1 className="product-view__title">
                        {bait.name}
                      </h1>
                      <p className="product-view__price">
                        &#8372;{bait.price}
                      </p>
                      <p className="product-view__weight">
                        Вага: {bait.weight}g
                      </p>
                      <p className="product-view__status">
                        Наявність: {`${ bait.status }`}
                      </p>
                      <br/>
                      <MarkdownPreview className="product-view__text" value={ bait.textFull }/>
                      <BaitColors />  
                    </aside>
                  </div>
                  <div className="product-view-row">
                    <div className="product-view-side">
                    </div>
                    <div className="product-view-side">
                      Умови доставки & оплати
                    </div>
                  </div>
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

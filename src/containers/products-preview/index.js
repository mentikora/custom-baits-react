import React, { Component } from 'react';
import './styles.css';

import image from './testimage.jpg';

const arr = [
  {
    id: 1,
    name: 'Matilda',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  }
]
export class ProductsPreview extends Component {
  render() {
    return (
      <section>
        {
          arr.map( item => {
            return <div key={item.id} className="bait-preview">
              <div className="bait-preview__preview-info">
                <h2 className="bait-preview__name">
                  {item.name}
                </h2>
                <p className="bait-preview__price">
                  {item.price}
                </p>
                <p className="bait-preview__description">
                  {item.previewText}
                </p>
              </div>
              <div 
                className="bait-preview__image"
                style={{backgroundImage: `url(${image})`}}
              >
              </div>
            </div>
          })
        }
      </section>
    );
  }
}

import React, { Component } from 'react';
import './styles.css';

import image from './testimage.jpg';

const arr = [
  {
    id: 1,
    name: 'Nemo',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Ozzy',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Chili',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Matilda',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Candy',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Sonic',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Drift',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Craft',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Woodoo',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Sezam',
    price: 75,
    status: true,
    weight: 2.2,
    previewText: 'Активна, розмашиста гра з періодичними збоями.',
    fullText: '',
    gallery: []
  },
  {
    id: 1,
    name: 'Oscar',
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
      <div className="bait-preview-container">
        {
          arr.map( item => {
            return <div key={item.id} className="bait-preview" style={{backgroundImage: `url(${image})`}}>
              <p className="bait-preview__price">
                &#8372;{item.price}
              </p>
              <div className="bait-preview__content">
                <p className="bait-preview__weight">
                  {item.weight}g
                </p>
                <h2 className="bait-preview__name">
                  {item.name}
                </h2>
              </div>
            </div>
          })
        }
      </div>
    );
  }
}

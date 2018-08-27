import React, { Component } from 'react';
import './styles.css';
import image from './testimage.png';
import { DataConsumer } from '../../context/context';
import { Link } from 'react-router-dom';

export class ProductsPreview extends Component {
  render() {
    return (
      <DataConsumer>
        {
          ({ baits }) => (
            <div className="bait-preview-container">
              {
                baits && baits.map( item => {
                  return <Link to={`/products/${item.sys.id}`} key={item.sys.id} className="bait-preview bait-preview--link">
                    {
                      item.fields.imagePreview ? 
                      <div className="bait-preview__image" style={{backgroundImage: `url(${item.fields.imagePreview.fields.file.url})`}}>
                      </div> : 
                      <div className="bait-preview__image" style={{backgroundImage: `url(${image})`}}>
                      </div>
                    }
                    <p className="bait-preview__price">
                      &#8372;{item.fields.price}
                    </p>
                    <div className="bait-preview__content">
                      <p className="bait-preview__weight">
                        {item.fields.weight}g
                      </p>
                      <h2 className="bait-preview__name">
                        {item.fields.name}
                      </h2>
                    </div>
                  </Link>
                })
              }    
            </div>
          )
        }
      </DataConsumer>
    );
  }
}

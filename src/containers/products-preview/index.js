import React, { Component } from 'react';
import './styles.css';
import * as contentful from 'contentful';

import image from './testimage.jpg';

const client = contentful.createClient({
  space: 'bxyzlpc4dqh9',
  accessToken: '0d827e25ac1f623fe72bd333013ae6f4c36a2e81ba82cacb5f33f552480c93a1'
});

export class ProductsPreview extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    client.getEntries({content_type: 'products'})
      .then((response) => this.setState({
        baits: response.items
      }))
      .catch(console.error)
  }

  render() {
    return (
      <div className="bait-preview-container">
        {
          this.state.baits && console.log(this.state.baits)
        }
        {
          this.state.baits && this.state.baits.map( (item, key) => {
            return <div key={key} className="bait-preview">
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
            </div>
          })
        }
      </div>
    );
  }
}

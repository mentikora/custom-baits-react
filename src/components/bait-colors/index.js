import React, { Component } from 'react';
import './styles.css';
import { DataConsumer } from '../../context/context';
import image from './test-color.jpeg';

export class BaitColors extends Component {
  render() {
    return(
      <DataConsumer>
        {
          ({ colors }) => (
            <div className="colors-wrapper">
              {
                colors && colors.map((item, key) => (
                  <div key={key} className="color-item" style={{backgroundImage: `url(${image})`}}>
                    <div className="color-item__content">
                      <p className="color-item__name">
                        {item.fields.name}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          )
        }
      </DataConsumer>
    );
  }
}

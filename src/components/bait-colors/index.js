import React, { Component } from 'react';
import './styles.css';
import { DataConsumer } from '../../context/context';

export class BaitColors extends Component {
  render() {
    return(
      <DataConsumer>
        {
          ({ colors }) => (
            <div className="colors-wrapper" tabIndex="0">
              {
                colors && colors.map((item, key) => (
                  <div key={key} className="color-item" style={{backgroundImage: `url(${item.fields.image.fields.file.url})`}}>
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

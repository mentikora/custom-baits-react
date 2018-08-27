import React, { Component } from 'react';
import './styles.css';

import image from './test-color.jpeg';

const colors = [
  {
    name: 'col.001',
  },
  {
    name: 'col.002',
  },
  {
    name: 'col.003',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  },
  {
    name: 'col.004',
  }
]

export class BaitColors extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    client.getEntries({content_type: 'colors'})
      .then((response) => this.setState({
        baits: response.items
      }))
      .catch(console.error)
  }
  render() {
    return(
      <div className="colors-wrapper">
        {
          colors.map((item, key) => (
            <div key={key} className="color-item" style={{backgroundImage: `url(${image})`}}>
              <div className="color-item__content">
                <p className="color-item__name">
                  {item.name}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

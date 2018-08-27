import React, { Component } from 'react';
import * as contentful from 'contentful';

// contentful api
const client = contentful.createClient({
  space: 'bxyzlpc4dqh9',
  accessToken: '0d827e25ac1f623fe72bd333013ae6f4c36a2e81ba82cacb5f33f552480c93a1'
});

// create a new context
const MyContext = React.createContext();

export const DataConsumer = MyContext.Consumer;

// create a provider component
export class DataProvider extends Component {

  constructor (props) {
    super(props)
    this.state = {
      baits: null,
      colors: null,
      feedbacks: null,
    }
  }

  // componentDidMount () {
  //   client.getEntries({content_type: 'products'})
  //     .then((response) => this.setState({
  //       baits: response.items
  //     }))
  //     .catch(console.error)
  //   client.getEntries({content_type: 'colors'})
  //     .then((response) => this.setState({
  //       colors: response.items
  //     }))
  //     .catch(console.error)
  //   client.getEntries({content_type: 'feedbacks'})
  //     .then((response) => this.setState({
  //       feedbacks: response.items
  //     }))
  //     .catch(console.error)
  // }

  async componentDidMount () {
    try {
      const [
        { items: baits },
        { items: colors },
        { items: feedbacks },
      ] = await Promise.all([
        client.getEntries({content_type: 'products'}),
        client.getEntries({content_type: 'colors'}),
        client.getEntries({content_type: 'feedbacks'}),      
      ]);

      this.setState({ baits, colors, feedbacks });
    } catch (error) {
      console.error(error);      
    }
  }

  render() {
    return(
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

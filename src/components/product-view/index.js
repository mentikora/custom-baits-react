import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';
import { DataConsumer } from '../../context/context';
import { Helmet } from "react-helmet";

// const getBait = (baits, id) => {
//   const bait = baits.find((b) => b.sys.id === id);

//   if (bait) {
//     return bait.fields
//   }

//   history.push('/');

//   return {};
// }

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

    return(
      <DataConsumer>
        { 
          // ({ baits, isLoading }) => {
          //   if (isLoading){
          //     return `Spiner` 
          //   }
          //   return this.renderBait(getBait(baits, id, history))
          // }
          ({ baits, isLoading }) => {
            if (isLoading){
              return `Loading...` 
            }
            const bait = this.getBait(baits, id)
            return <div>
              <Helmet>
                <title>{bait.name} - Custom Baits</title>
              </Helmet>
              {bait.name}, {bait.price}
            </div>
          }
        }
      </DataConsumer>
    );
  }
}

export const ProductView = withRouter(_ProductView);

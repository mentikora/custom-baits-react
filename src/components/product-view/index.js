import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';
import { DataConsumer } from '../../context/context';
import { Helmet } from "react-helmet";
import {  MarkdownPreview  } from 'react-marked-markdown';

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
            return <div className="product-view-wrapper">
              <Helmet>
                <title>{bait.name} - Custom Baits</title>

                {/* 
                  @TODO: test this feature
                */}
                <meta property="og:image" content={bait.imagePreview.fields.file.url} />
              </Helmet>
              <div className="container">
                <div className="product-view">
                  <div className="product-view__gallery">
                    gallery
                  </div>
                  <h1 className="product-view__title">
                    {bait.name} 
                  </h1>
                  <p className="product-view__price">
                    &#8372;{bait.price}
                  </p>
                  <p className="product-view__weight">
                    {bait.weight}g
                  </p>
                  <p className="product-view__price">
                    {bait.price}
                  </p>
                  <p className="product-view__status">
                    Avaible: {`${ bait.status }`}
                  </p>
                  <MarkdownPreview className="product-view__text" value={ bait.textFull }/>
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

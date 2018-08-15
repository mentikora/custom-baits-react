import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { ProductsPreview } from '../products-preview';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductsPreview />
        <Footer />
      </div>
    );
  }
}


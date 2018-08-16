import React, { Component } from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { ProductsPreview } from '../products-preview';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <ProductsPreview />
  </div>
);


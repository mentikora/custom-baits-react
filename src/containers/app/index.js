import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DataProvider } from '../../context/context';
import { Helmet } from "react-helmet";
import './styles.css';
import '../../defaults.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { ProductsPreview } from '../../components/products-preview';
import { BaitColors } from '../../components/bait-colors'
import { Feedbacks } from '../../components/feedbacks';
import { ProductView } from '../../components/product-view';

export class App extends Component {
  render() {
    return (
      <DataProvider>
        <Helmet><title>Custom Baits</title></Helmet>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={ProductView} />
            <Footer />
          </div>
        </Router>
      </DataProvider>
    );
  }
}

const Home = () => (
  <main className="homepage">
    <div className="container">
      <section className="products-preview">
        <ProductsPreview />
      </section>
      <section className="baits-colors">
        <BaitColors />
      </section>
      <section className="feedbacks">
        <Feedbacks />
      </section>
    </div>
  </main>
);


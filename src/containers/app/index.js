import React, { Component } from 'react';
import './styles.css';
import '../../defaults.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { ProductsPreview } from '../products-preview';
import { BaitColors } from '../../components/bait-colors'
import { Feedbacks } from '../../components/feedbacks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DataProvider } from '../../context/context';

export class App extends Component {
  render() {
    return (
      <DataProvider>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
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


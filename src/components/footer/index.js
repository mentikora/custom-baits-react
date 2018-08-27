import React from 'react';
import './styles.css';
import { Socials } from '../socials';

export default () => {
  return <div className="container">
    <footer className="footer">
      <div className="footer__top">
        <Socials />
      </div>
      <div className="footer__bottom">
        <p className="copyright">
          Copyright &copy; 2018 CustomBaits. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
}

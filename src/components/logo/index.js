import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default () => {
  return <Link to='/' className="logo">
    <span className="logo__custom">
      Custom
    </span>
    <span className="logo__baits">
      baits
    </span>
  </Link>
}

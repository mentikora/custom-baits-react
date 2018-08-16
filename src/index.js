import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/app';
import './defaults.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

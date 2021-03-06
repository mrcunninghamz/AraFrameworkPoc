import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import entryPoints from './views.json';
import { loadScript } from 'nova-helpers';

document.addEventListener('NovaMount', ({ detail }) => {
    const { name } = detail;
  
    const script = entryPoints[name];
  
    if (script) {
      loadScript(script);
    }
  });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

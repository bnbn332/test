import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function startApp() {
  window.Kakao.init('582ee1dc905926efbdd06abd8ff0c7fa');
  ReactDOM.render(<App />, document.getElementById('root'));
}

startApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

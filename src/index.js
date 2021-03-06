import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import i18next from 'i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import './i18n.js';
import store from './app/store';

const lang =localStorage.getItem('lang')||'en'
axios.defaults.headers.common['Accept-Language']=lang;
i18next.changeLanguage(lang);
document.documentElement.lang = lang;

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

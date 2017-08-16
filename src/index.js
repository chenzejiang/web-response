import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/base.css";
import "./assets/css/style.css";

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
// const store = createStore(reducer);
import Store from './stores/index';

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
, document.getElementById('root'));

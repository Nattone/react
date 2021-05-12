// import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store.js';

import { PersistGate } from "redux-persist/integration/react";

import Routes from './components/Routes.jsx';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
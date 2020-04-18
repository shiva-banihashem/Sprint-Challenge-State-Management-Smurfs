import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// Redux
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Reducers
import rootReducer from './reducer';

const store = createStore(rootReducer,applyMiddleware(thunk,logger));
ReactDOM.render(
    <Provider store={store}>
        <App />
</Provider>, document.getElementById("root"));

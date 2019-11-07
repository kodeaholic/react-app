import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import * as actions from './actions';
import {configureStore} from "./store";
const tracks = [
    {
        id: 1,
        title: 'Em của ngày hôm qua'
    },
    {
        id: 2,
        title: 'Cơn mưa ngang qua'
    }
]
const store = configureStore();
store.dispatch(actions.setTracks(tracks));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

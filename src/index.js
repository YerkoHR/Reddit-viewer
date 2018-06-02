import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemList from './components/component';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from './reducers';
import { Provider } from 'react-redux';

const allEnhancers = compose(applyMiddleware(thunk), 
(window.__REDUX_DEVTOOLS_EXTENSION__ && window.window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const store = createStore(
        allReducers,
        allEnhancers
    );


ReactDOM.render(<Provider store={store}>
    <ItemList /></Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/component';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './modules/reducer';
import './index.css';

const allEnhancers = compose(applyMiddleware(thunk), 
(window.__REDUX_DEVTOOLS_EXTENSION__ && window.window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const store = createStore(
        reducer,
        allEnhancers
    );

ReactDOM.render(<Provider store={store}>
    <ItemList /></Provider>, document.getElementById('root'));

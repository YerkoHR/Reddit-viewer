import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/ducks/reducer';

const allEnhancers = compose(applyMiddleware(thunk), 
    (window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()));

const store = createStore(
        reducer,
        allEnhancers
    );
export default store;
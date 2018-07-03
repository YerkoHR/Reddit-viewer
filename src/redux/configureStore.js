import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/ducks/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const allEnhancers = compose(applyMiddleware(thunk), 
    (window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()));

let store = createStore(persistedReducer, allEnhancers)
let persistor = persistStore(store)

export {store, persistor};
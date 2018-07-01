import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import './css/main.css';

class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Routes /> 
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

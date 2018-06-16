import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import './css/stylesheet.min.css';

class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes /> 
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

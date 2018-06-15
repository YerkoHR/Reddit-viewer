import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ItemList from './components/ItemList';
import Container from './containers/Container';
import about from './containers/about';

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={Container}/>
      <Route path='/about' component={about}/>
    </Switch>
 )
}
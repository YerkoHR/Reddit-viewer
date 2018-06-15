import React from 'react';
import { Route, Switch } from 'react-router-dom';
import containerHome from './containers/containerHome';
import containerSaved from './containers/containerSaved';

// Instead of passing the component to Route in redux you need 
// to pass the container of the component since this needs to recive
// the store from the Provider to work without errors.

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={containerHome}/>
      <Route path='/saved' component={containerSaved}/>
    </Switch>
 )
}
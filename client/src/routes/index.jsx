import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import '../stylesheets/app.scss';
// HERE YOU CAN IMPORT YOUR COMPONENTS AND OTHER ROUTES

export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
  );


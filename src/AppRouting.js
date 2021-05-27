import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Components/Auth/Login/LoginComp';
import Register from './Components/Auth/Register/RegisterComp';
import Home from './Components/Home/HomeComp';

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouting;

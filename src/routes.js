import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import User from './pages/user'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component={Main} />
            <Route path="/user/:id" component={User} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
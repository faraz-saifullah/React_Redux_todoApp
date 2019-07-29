import App from "./App";
import React from 'react';
import LoginForm from './Components/loginForm';
import { Route, browserHistory } from 'react-router';
// import { Router, browserHistory } from 'react-router';
export default (
    <Route path='/' component={App} history={browserHistory}>
        {/* <IndexRoute component={App}/> */}
        <Route path="login" component={LoginForm} history={browserHistory}/>
    </Route>
)
import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';

import Auth from "./components/Auth.js";
import Dashboard from './components/Dashboard.js';
import Form from './components/Form.js';
import Post from './components/Post.js';


export default(


        <Switch>
            <Route path="/" exact component={Auth}> </Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/post/:postid' component={Post}></Route>
            <Route path="/new" component={Form}></Route>

        </Switch>



)
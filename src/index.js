import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';

//Components

import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';
import NotFound from './components/404';


class App extends Component {
    render(){
        return <div>Home</div>
    }
}

ReactDOM.render(

    <BrowserRouter>
        <div>
            <header>
                <NavLink to="/" activeStyle={{color: "red"}} activeClassName="selected">Home</NavLink><br/>
                <NavLink to="/posts">Posts</NavLink><br/>
                <NavLink to="/profile">Profile</NavLink>
                <hr/>
            </header>
            <Switch>
            <Route path="/posts/:id" component={PostsItem}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/posts" component={Posts}></Route>
            <Route exact path="/" component={App}></Route>
            <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
   
    , document.querySelector('#root'))
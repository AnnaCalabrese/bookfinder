import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from "../App";
import Book from "./Book";
const Router = () => {
    return (<BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/Book/:id" component={Book} /> 
        </Switch>
    </BrowserRouter>)
}

export default Router;
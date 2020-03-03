import React, {Component} from 'react';
import { BrowserRouter, Switch,Route } from "react-router-dom";

import Content from './components/content.js';
import Home from './components/home.js';

class Routers extends Component
{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Home} />
                    <Route path='/content' component={Content} />
                </Switch>
            </BrowserRouter>
        )
    }

}
export default Routers;
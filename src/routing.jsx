import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from './components/home/home';
import Galery from './components/galery/galery';
import Traject from './components/traject/traject';


export default class Routing extends Component{
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/galeria" component={Galery} />
                        <Route path="/trayectoria" component={Traject} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

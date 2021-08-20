import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/home/home';
import Galery from './components/galeria/galery';
import Videos from './components/videos/videos';
import Trajectory from './components/trajectory/trajectory';

export default class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/galeria' component={Galery} />
            <Route path='/videos' component={Videos} />
            <Route path='/trayectoria' component={Trajectory} />
          </Switch>
        </div>
      </Router>
    );
  }
}

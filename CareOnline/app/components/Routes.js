import React from 'react';
import About from './About.js';
import HomeController from '../controllers/HomeController';
import Contact from './Contact.js';
import {Switch, Route} from 'react-router-dom';

class Routes extends React.Component {
   render() {
      return (
          <Switch>
            <Route exact path='/' component={HomeController}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
      );
   }
}

export default Routes;

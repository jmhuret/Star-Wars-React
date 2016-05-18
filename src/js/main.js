import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './ui/App.jsx';
import Starships from './ui/Starships.jsx';
import Films from './ui/Films.jsx';

//Temporary, until the official react version is out
import injectTapEventPlugin from 'react-tap-event-plugin';

require('../fonts/Roboto/roboto.scss');
require('../sass/main.scss');

require('../index.html');

injectTapEventPlugin();
 
 ReactDOM.render(
 	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<Route path="starships" component={Starships}></Route>
  			<Route path="films" component={Films}></Route>
  		</Route>
  	</Router>
, document.getElementById('render-target'));
import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import UseRouterHistory from 'react-router/lib/useRouterHistory';
import CreateHashHistory from 'history/lib/createHashHistory';

import Layout from './ui/layout/Layout.jsx';
import Starships from './ui/starships/Starships.jsx';
import StarshipDetail from './ui/starships/StarshipDetail.jsx';
import Films from './ui/films/Films.jsx';

//Temporary, until the official react version is out
import injectTapEventPlugin from 'react-tap-event-plugin';

require('../fonts/Roboto/roboto.scss');
require('./ui/layout/layout.scss');

require('../index.html');

injectTapEventPlugin();

const hashHistory = UseRouterHistory(CreateHashHistory)({
	queryKey: false
});
 
ReactDOM.render(
 	<Router history={hashHistory}>
  		<Route path="/" component={Layout}>
  			<Route name="starships" path="starships" component={Starships}></Route>
  			<Route name="starship" path="starships/:id" component={StarshipDetail}></Route>
  			<Route name="films" path="films" component={Films}></Route>
  		</Route>
  	</Router>
, document.getElementById('render-target'));
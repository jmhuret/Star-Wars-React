import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import UseRouterHistory from 'react-router/lib/useRouterHistory';
import CreateHashHistory from 'history/lib/createHashHistory';

import Layout from './ui/layout/Layout.jsx';
import FilmsList from './ui/swapi-elements/films/FilmsList.jsx';
import FilmDetail from './ui/swapi-elements/films/FilmDetail.jsx';
import StarshipsList from './ui/swapi-elements/starships/StarshipsList.jsx';
import StarshipDetail from './ui/swapi-elements/starships/StarshipDetail.jsx';
import PlanetsList from './ui/swapi-elements/planets/PlanetsList.jsx';
import PlanetDetail from './ui/swapi-elements/planets/PlanetDetail.jsx';
import VehiclesList from './ui/swapi-elements/vehicles/VehiclesList.jsx';
import VehicleDetail from './ui/swapi-elements/vehicles/VehicleDetail.jsx';

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
  			<Route name="films" path="films" component={FilmsList}></Route>
  			<Route name="film" path="films/:id" component={FilmDetail}></Route>
  			<Route name="starships" path="starships" component={StarshipsList}></Route>
  			<Route name="starship" path="starships/:id" component={StarshipDetail}></Route>
  			<Route name="planets" path="planets" component={PlanetsList}></Route>
  			<Route name="planet" path="planets/:id" component={PlanetDetail}></Route>
        <Route name="vehicles" path="vehicles" component={VehiclesList}></Route>
        <Route name="vehicle" path="vehicles/:id" component={VehicleDetail}></Route>
  		</Route>
  	</Router>
, document.getElementById('render-target'));

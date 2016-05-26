import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import UseRouterHistory from 'react-router/lib/useRouterHistory';
import CreateHashHistory from 'history/lib/createHashHistory';

import Layout from './ui/layout/Layout.jsx';
import ListLayout from './ui/layout/ListLayout.jsx';
import FilmDetail from './ui/swapi-elements/films/FilmDetail.jsx';
import StarshipDetail from './ui/swapi-elements/starships/StarshipDetail.jsx';
import PlanetDetail from './ui/swapi-elements/planets/PlanetDetail.jsx';
import VehicleDetail from './ui/swapi-elements/vehicles/VehicleDetail.jsx';
import PersonDetail from './ui/swapi-elements/people/PersonDetail.jsx';
import SpeciesDetail from './ui/swapi-elements/species/SpeciesDetail.jsx';

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
  			<Route name="films" path="films" component={ListLayout}></Route>
  			<Route name="film" path="films/:id" component={FilmDetail}></Route>
  			<Route name="starships" path="starships" component={ListLayout}></Route>
  			<Route name="starship" path="starships/:id" component={StarshipDetail}></Route>
  			<Route name="planets" path="planets" component={ListLayout}></Route>
  			<Route name="planet" path="planets/:id" component={PlanetDetail}></Route>
        <Route name="vehicles" path="vehicles" component={ListLayout}></Route>
        <Route name="vehicle" path="vehicles/:id" component={VehicleDetail}></Route>
        <Route name="people" path="people" component={ListLayout}></Route>
        <Route name="person" path="people/:id" component={PersonDetail}></Route>
        <Route name="species" path="species" component={ListLayout}></Route>
        <Route name="speciesDetail" path="species/:id" component={SpeciesDetail}></Route>
  		</Route>
  	</Router>
, document.getElementById('render-target'));

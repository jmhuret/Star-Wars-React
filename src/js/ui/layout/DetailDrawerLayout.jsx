import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';

import Film from '../swapi-elements/films/Film.jsx';
import Person from '../swapi-elements/people/Person.jsx';
import Planet from '../swapi-elements/planets/Planet.jsx';
import Species from '../swapi-elements/species/Species.jsx';
import Starship from '../swapi-elements/starships/Starship.jsx';
import Vehicle from '../swapi-elements/vehicles/Vehicle.jsx';

class DrawerDetailLayout extends Component {

	constructor(props) {
		super(props);

		this.state = {
			itemTitle: ''
		}
	}

	componentWillReceiveProps(props) {
		let itemTitle;
		if (props.film) {
			itemTitle = props.film.title;
		}
		else if (props.person) {
			itemTitle = props.person.name;
		}
		else if (props.planet) {
			itemTitle = props.planet.name;
		}
		else if (props.species) {
			itemTitle = props.species.name;
		}
		else if (props.starship) {
			itemTitle = props.starship.name;
		}
		else if (props.vehicle) {
			itemTitle = props.vehicle.name;
		}

		this.setState({itemTitle: itemTitle});
	}

	handleTouchTap() {
		this.props.handleCloseDetail();
	}

	getSelectedItemComponent() {
		if (this.props.film) {
			return <Film film={this.props.film}/>
		}
		else if (this.props.person) {
			return <Person person={this.props.person}/>
		}
		else if (this.props.planet) {
			return <Planet planet={this.props.planet}/>
		}
		else if (this.props.species) {
			return <Species species={this.props.species}/>
		}
		else if (this.props.starship) {
			return <Starship starship={this.props.starship}/>
		}
		else if (this.props.vehicle) {
			return <Vehicle vehicle={this.props.vehicle}/>
		}

	}

	render() {
		let selectedItemComponent = this.getSelectedItemComponent();
		return (
			<div>
	      <AppBar
	        title={this.state.itemTitle}
	        showMenuIconButton={false}
	        iconElementRight={
	          <IconButton onTouchTap={this.handleTouchTap.bind(this)}>
	            <NavigationCloseIcon />
	          </IconButton>}>
	      </AppBar>

	      {selectedItemComponent}
      </div>
		)
	}
}

export default DrawerDetailLayout;

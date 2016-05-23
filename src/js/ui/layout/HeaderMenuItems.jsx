import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';

import AvMovieIcon from 'material-ui/svg-icons/av/movie';
import LanguageIcon from 'material-ui/svg-icons/action/language';
import MapsFlightIcon from 'material-ui/svg-icons/maps/flight';
import TramIcon from 'material-ui/svg-icons/maps/tram';
import PersonIcon from 'material-ui/svg-icons/social/person-outline';


class HeaderMenuItems extends Component {

	handleTouchTap() {
		this.props.handleClose();
	}

	render() {
		return (
			<div>
				<MenuItem 
	        onTouchTap={this.handleTouchTap.bind(this)}
	        containerElement={<Link to="films" activeClassName="active"/>}
	        leftIcon={<AvMovieIcon /> }>
	          Films
	      </MenuItem>
	      
	      <MenuItem
	      	onTouchTap={this.handleTouchTap.bind(this)}
	      	containerElement={<Link to="planets" activeClassName="active"/>}
	      	leftIcon={<LanguageIcon />}>
	      		Planets
	      </MenuItem>

	      <MenuItem
	        onTouchTap={this.handleTouchTap.bind(this)}
	        containerElement={<Link to="starships" activeClassName="active"/>}
	      	leftIcon={<MapsFlightIcon />}>
	          Starships
	      </MenuItem>

	      <MenuItem
	      	onTouchTap={this.handleTouchTap.bind(this)}
	      	containerElement={<Link to="vehicles" activeClassName="active"/>}
	      	leftIcon={<TramIcon />}>
	      		Vehicles
	      </MenuItem>

	      <MenuItem
	      	onTouchTap={this.handleTouchTap.bind(this)}
	      	containerElement={<Link to="people" activeClassName="active"/>}
	      	leftIcon={<PersonIcon />}>
	      		People
	      </MenuItem>
      </div>
    )
	}
}

export default HeaderMenuItems;

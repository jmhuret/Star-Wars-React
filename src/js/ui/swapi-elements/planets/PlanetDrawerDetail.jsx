import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';

import Planet from './Planet.jsx';

class PlanetDrawerDetail extends Component {

	handleTouchTap() {
		this.props.handleCloseDetail();
	}

	render() {
		return (
			<div>
	      <AppBar
	        title={this.props.planet.name}
	        showMenuIconButton={false}
	        iconElementRight={
	          <IconButton onTouchTap={this.handleTouchTap.bind(this)}>
	            <NavigationCloseIcon />
	          </IconButton>}>
	      </AppBar>

	      <Planet planet={this.props.planet}/>
      </div>
		)
	}
}

export default PlanetDrawerDetail;

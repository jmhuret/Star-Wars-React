import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';

import Vehicle from './Vehicle.jsx';

class VehicleDrawerDetail extends Component {

	handleTouchTap() {
		this.props.handleCloseDetail();
	}

	render() {
		return (
			<div>
	      <AppBar
	        title={this.props.vehicle.name}
	        showMenuIconButton={false}
	        iconElementRight={
	          <IconButton onTouchTap={this.handleTouchTap.bind(this)}>
	            <NavigationCloseIcon />
	          </IconButton>}>
	      </AppBar>

	      <Vehicle vehicle={this.props.vehicle}/>
      </div>
		)
	}
}

export default VehicleDrawerDetail;

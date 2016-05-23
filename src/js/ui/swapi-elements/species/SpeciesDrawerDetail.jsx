import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';

import Species from './Species.jsx';

class SpeciesDrawerDetail extends Component {

	handleTouchTap() {
		this.props.handleCloseDetail();
	}

	render() {
		return (
			<div>
	      <AppBar
	        title={this.props.species.name}
	        showMenuIconButton={false}
	        iconElementRight={
	          <IconButton onTouchTap={this.handleTouchTap.bind(this)}>
	            <NavigationCloseIcon />
	          </IconButton>}>
	      </AppBar>

	      <Species species={this.props.species}/>
      </div>
		)
	}
}

export default SpeciesDrawerDetail;

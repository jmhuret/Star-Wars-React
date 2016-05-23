import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';

import Person from './Person.jsx';

class PersonDrawerDetail extends Component {

	handleTouchTap() {
		this.props.handleCloseDetail();
	}

	render() {
		return (
			<div>
	      <AppBar
	        title={this.props.person.name}
	        showMenuIconButton={false}
	        iconElementRight={
	          <IconButton onTouchTap={this.handleTouchTap.bind(this)}>
	            <NavigationCloseIcon />
	          </IconButton>}>
	      </AppBar>

	      <Person person={this.props.person}/>
      </div>
		)
	}
}

export default PersonDrawerDetail;

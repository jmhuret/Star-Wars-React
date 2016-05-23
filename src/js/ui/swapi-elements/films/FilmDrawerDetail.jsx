import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';

import Film from './Film.jsx';

class FilmDrawerDetail extends Component {

	handleTouchTap() {
		this.props.handleCloseDetail();
	}

	render() {
		return (
			<div>
	      <AppBar
	        title={this.props.film.title}
	        showMenuIconButton={false}
	        iconElementRight={
	          <IconButton onTouchTap={this.handleTouchTap.bind(this)}>
	            <NavigationCloseIcon />
	          </IconButton>}>
	      </AppBar>

	      <Film film={this.props.film}/>
      </div>
		)
	}
}

export default FilmDrawerDetail;

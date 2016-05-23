import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';

class HeaderMenuItems extends Component {

	handleTouchTap() {
		this.props.handleClose();
	}

	render() {
		return (
			<div>
				<MenuItem 
	        onTouchTap={this.handleTouchTap.bind(this)}
	        containerElement={<Link to="films" activeClassName="active"/>}>
	          Films
	      </MenuItem>
	      <MenuItem
	        onTouchTap={this.handleTouchTap.bind(this)}
	        containerElement={<Link to="starships" activeClassName="active"/>}>
	          Starships
	      </MenuItem>
	      <MenuItem
	      	onTouchTap={this.handleTouchTap.bind(this)}
	      	containerElement={<Link to="planets" activeClassName="active"/>}>
	      		Planets
	      </MenuItem>
      </div>
    )
	}
}

export default HeaderMenuItems;

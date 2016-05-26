import React, { Component, PropTypes } from 'react';

import ListItem from 'material-ui/List/ListItem';
import TramIcon from 'material-ui/svg-icons/maps/tram';
 
class VehicleListItem extends Component {

	handleTouchTap() {
    this.props.viewListItem(this.props.vehicle);
	}

  render() {
    return (
  		<ListItem primaryText={this.props.vehicle.name} leftIcon={<TramIcon />} 
  			onTouchTap={this.handleTouchTap.bind(this)}/>
    );
  }
}

export default VehicleListItem;
 
VehicleListItem.propTypes = {
  vehicle: PropTypes.object.isRequired,
};
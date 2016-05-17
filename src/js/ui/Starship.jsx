import React, { Component, PropTypes } from 'react';

import {ListItem} from 'material-ui/List';
import MapsFlight from 'material-ui/svg-icons/maps/flight';
import Divider from 'material-ui/Divider';
 
// Starship component - represents a single todo item
export default class Starship extends Component {
  render() {
    return (
    	<div>
	    	<ListItem primaryText={this.props.starship.name} leftIcon={<MapsFlight />} />
	    	<Divider/>
    	</div>
    );
  }
}
 
Starship.propTypes = {
  // This component gets the starship to display through a React prop.
  // We can use propTypes to indicate it is required
  starship: PropTypes.object.isRequired,
};
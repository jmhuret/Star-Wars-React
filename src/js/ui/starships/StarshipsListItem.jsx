import React, { Component, PropTypes } from 'react';

import ListItem from 'material-ui/List/ListItem';
import MapsFlight from 'material-ui/svg-icons/maps/flight';
 
class StarshipListItem extends Component {

	handleTouchTap() {
    this.props.viewStarship(this.props.starship);
	}

  render() {
    return (
  		<ListItem primaryText={this.props.starship.name} leftIcon={<MapsFlight />} 
  			onTouchTap={this.handleTouchTap.bind(this)}/>
    );
  }
}

export default StarshipListItem;
 
StarshipListItem.propTypes = {
  starship: PropTypes.object.isRequired,
};
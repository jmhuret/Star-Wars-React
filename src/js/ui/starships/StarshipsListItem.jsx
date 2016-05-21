import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ListItem from 'material-ui/List/ListItem';
import MapsFlight from 'material-ui/svg-icons/maps/flight';
 
// Starship component - represents a single todo item
class StarshipListItem extends Component {

	constructor (props) {
		super(props);

		console.log('list item props', props);
	}

	handleTouchTap() {
		const url = this.props.starship.url;
  	let chunks = url.split('/');

		this.props.viewStarship(chunks[5]);
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
  // This component gets the starship to display through a React prop.
  // We can use propTypes to indicate it is required
  starship: PropTypes.object.isRequired,
};
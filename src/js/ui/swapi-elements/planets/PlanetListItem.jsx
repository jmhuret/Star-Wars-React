import React, { Component, PropTypes } from 'react';

import ListItem from 'material-ui/List/ListItem';
import LanguageIcon from 'material-ui/svg-icons/action/language';
 
class PlanetListItem extends Component {

	handleTouchTap() {
    this.props.viewPlanet(this.props.planet);
	}

  render() {
    return (
  		<ListItem primaryText={this.props.planet.name} leftIcon={<LanguageIcon />} 
  			onTouchTap={this.handleTouchTap.bind(this)}/>
    );
  }
}

export default PlanetListItem;
 
PlanetListItem.propTypes = {
  planet: PropTypes.object.isRequired,
};
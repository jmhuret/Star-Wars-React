import React, { Component, PropTypes } from 'react';

import ListItem from 'material-ui/List/ListItem';
import BugReportIcon from 'material-ui/svg-icons/action/bug-report';
 
class SpeciesListItem extends Component {

	handleTouchTap() {
    this.props.viewListItem(this.props.species);
	}

  render() {
    return (
  		<ListItem primaryText={this.props.species.name} leftIcon={<BugReportIcon />} 
  			onTouchTap={this.handleTouchTap.bind(this)}/>
    );
  }
}

export default SpeciesListItem;
 
SpeciesListItem.propTypes = {
  species: PropTypes.object.isRequired,
};
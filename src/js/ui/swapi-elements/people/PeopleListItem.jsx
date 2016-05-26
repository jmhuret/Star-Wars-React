import React, { Component, PropTypes } from 'react';

import ListItem from 'material-ui/List/ListItem';
import PersonIcon from 'material-ui/svg-icons/social/person-outline';
 
class PeopleListItem extends Component {

	handleTouchTap() {
    this.props.viewListItem(this.props.person);
	}

  render() {
    return (
  		<ListItem primaryText={this.props.person.name} leftIcon={<PersonIcon />} 
  			onTouchTap={this.handleTouchTap.bind(this)}/>
    );
  }
}

export default PeopleListItem;
 
PeopleListItem.propTypes = {
  person: PropTypes.object.isRequired,
};
import React, { Component, PropTypes } from 'react';

import ListItem from 'material-ui/List/ListItem';
import AvMovieIcon from 'material-ui/svg-icons/av/movie';
 
// Film component - represents a single todo item
export default class Film extends Component {
  render() {
    return (
	    <ListItem primaryText={this.props.film.title} leftIcon={<AvMovieIcon />} />
    );
  }
}
 
Film.propTypes = {
  // This component gets the film to display through a React prop.
  // We can use propTypes to indicate it is required
  film: PropTypes.object.isRequired,
};
import React, { Component, PropTypes } from 'react';

import ListItem from 'material-ui/List/ListItem';
import AvMovieIcon from 'material-ui/svg-icons/av/movie';
 
export default class Film extends Component {

	handleTouchTap() {
    this.props.viewFilm(this.props.film);
	}

  render() {
    return (
	    <ListItem primaryText={this.props.film.title} leftIcon={<AvMovieIcon />} 
	    	onTouchTap={this.handleTouchTap.bind(this)}/>
    );
  }
}
 
Film.propTypes = {
  film: PropTypes.object.isRequired,
};
import React, { Component, PropTypes } from 'react';

import ListItem from 'material-ui/List/ListItem';
import AvMovieIcon from 'material-ui/svg-icons/av/movie';
 
class FilmListItem extends Component {

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

export default FilmListItem
 
FilmListItem.propTypes = {
  film: PropTypes.object.isRequired,
};
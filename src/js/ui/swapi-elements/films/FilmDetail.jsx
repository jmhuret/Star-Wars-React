import React, { Component } from 'react';
import $ from 'jquery';

import Film from './Film.jsx';

class FilmDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			film: {}
		}
	}

	componentDidMount () {
		$.get('http://swapi.co/api/films/' + this.props.params.id, function (response) {
			let film = response;
      //console.log('Film: ', film);
      
      this.setState({
      	film: film
      });
		}.bind(this));
	}

	render () {
		return (
			<Film film={this.state.film}/>
		)
	}
}

export default FilmDetail;

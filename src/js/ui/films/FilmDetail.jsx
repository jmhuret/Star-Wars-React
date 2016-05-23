import React, { Component } from 'react';

import Film from './Film.jsx';

class FilmDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			film: {}
		}
	}

	componentDidMount () {
		fetch('http://swapi.co/api/films/' + this.props.params.id).then(function (response) {
	      return response.json();
	    }.bind(this)).then(function (responseJSON) {
	      let film = responseJSON;
	      console.log('Film: ', film);
	      
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

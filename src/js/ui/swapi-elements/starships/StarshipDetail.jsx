import React, { Component } from 'react';
import $ from 'jquery';

import Starship from './Starship.jsx';

class StarshipDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starship: {}
		}
	}

	componentDidMount () {

		$.get('http://swapi.co/api/starships/' + this.props.params.id, function (response) {
			let starship = response;
      console.log('Starship: ', starship);
      
      this.setState({
      	starship: starship
      });
		}.bind(this));
	}

	render () {
		return (
			<Starship starship={this.state.starship}/>
		)
	}
}

export default StarshipDetail;

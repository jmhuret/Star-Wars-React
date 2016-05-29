import React, { Component } from 'react';
import $ from 'jquery';

import Planet from './Planet.jsx';

class PlanetDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			planet: {}
		}
	}

	componentDidMount () {

		$.get('http://swapi.co/api/planets/' + this.props.params.id, function (response) {
			let planet = response;
      console.log('Planet: ', planet);
      
      this.setState({
      	planet: planet
      });
		}.bind(this));
	}

	render () {
		return (
			<Planet planet={this.state.planet}/>
		)
	}
}

export default PlanetDetail;

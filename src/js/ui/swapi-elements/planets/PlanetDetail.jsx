import React, { Component } from 'react';

import Planet from './Planet.jsx';

class PlanetDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			planet: {}
		}
	}

	componentDidMount () {
		fetch('http://swapi.co/api/planets/' + this.props.params.id).then(function (response) {
	      return response.json();
	    }.bind(this)).then(function (responseJSON) {
	      let planet = responseJSON;
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

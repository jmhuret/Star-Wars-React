import React, { Component } from 'react';
import $ from 'jquery';

import Species from './Species.jsx';

class SpeciesDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			species: {}
		}
	}

	componentDidMount () {
		$.get('http://swapi.co/api/species/' + this.props.params.id, function (response) {
			let species = response;
      console.log('Species: ', species);
      
      this.setState({
      	species: species
      });
		}.bind(this));
	}

	render () {
		return (
			<Species species={this.state.species}/>
		)
	}
}

export default SpeciesDetail;

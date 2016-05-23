import React, { Component } from 'react';

import Species from './Species.jsx';

class SpeciesDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			species: {}
		}
	}

	componentDidMount () {
		fetch('http://swapi.co/api/species/' + this.props.params.id).then(function (response) {
	      return response.json();
	    }.bind(this)).then(function (responseJSON) {
	      let species = responseJSON;
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

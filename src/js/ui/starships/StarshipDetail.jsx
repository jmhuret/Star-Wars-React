import React, { Component } from 'react';

import Starship from './Starship.jsx';

class StarshipDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starship: {}
		}
	}

	componentDidMount () {
		fetch('http://swapi.co/api/starships/' + this.props.params.id).then(function (response) {
	      return response.json();
	    }.bind(this)).then(function (responseJSON) {
	      let starship = responseJSON;
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
import React, { Component } from 'react';

import Person from './Person.jsx';

class PersonDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {}
		}
	}

	componentDidMount () {
		fetch('http://swapi.co/api/people/' + this.props.params.id).then(function (response) {
	      return response.json();
	    }.bind(this)).then(function (responseJSON) {
	      let person = responseJSON;
	      console.log('Person: ', person);
	      
	      this.setState({
	      	person: person
	      });

	    }.bind(this));
	}

	render () {
		return (
			<Person person={this.state.person}/>
		)
	}
}

export default PersonDetail;

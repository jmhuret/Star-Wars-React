import React, { Component } from 'react';
import $ from 'jquery';

import Person from './Person.jsx';

class PersonDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {}
		}
	}

	componentDidMount () {
		$.get('http://swapi.co/api/people/' + this.props.params.id, function (response) {
			let person = response;
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

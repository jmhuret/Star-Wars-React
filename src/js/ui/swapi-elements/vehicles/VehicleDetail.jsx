import React, { Component } from 'react';
import $ from 'jquery';

import Vehicle from './Vehicle.jsx';

class VehicleDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vehicle: {}
		}
	}

	componentDidMount () {
		$.get('http://swapi.co/api/vehicles/' + this.props.params.id, function (response) {
			let vehicle = response;
      console.log('Vehicle: ', vehicle);
      
      this.setState({
      	vehicle: vehicle
      });

		}.bind(this));
	}

	render () {
		return (
			<Vehicle vehicle={this.state.vehicle}/>
		)
	}
}

export default VehicleDetail;

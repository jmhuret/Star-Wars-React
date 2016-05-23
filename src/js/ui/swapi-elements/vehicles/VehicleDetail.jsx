import React, { Component } from 'react';

import Vehicle from './Vehicle.jsx';

class VehicleDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vehicle: {}
		}
	}

	componentDidMount () {
		fetch('http://swapi.co/api/vehicles/' + this.props.params.id).then(function (response) {
	      return response.json();
	    }.bind(this)).then(function (responseJSON) {
	      let vehicle = responseJSON;
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

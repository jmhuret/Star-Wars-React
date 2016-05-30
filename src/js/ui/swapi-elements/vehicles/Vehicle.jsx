import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Vehicle extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Card>
			    <CardHeader
			      title={this.props.vehicle.name}
			      subtitle={this.props.vehicle.model}
			      actAsExpander={false}
			      showExpandableButton={false}
			    />
			    <CardText expandable={false}>
			      Class: {this.props.vehicle.vehicle_class}
			    </CardText>
			    <CardText expandable={false}>
			      Manufacturer: {this.props.vehicle.manufacturer}
			    </CardText>
			    <CardText expandable={false}>
			      Length: {this.props.vehicle.length + ' meters'}
			    </CardText>
			    <CardText expandable={false}>
			      Cost: {this.props.vehicle.cost_in_credits + ' credits'}
			    </CardText>
			    <CardText expandable={false}>
			      Crew Capacity: {this.props.vehicle.crew}
			    </CardText>
			    <CardText expandable={false}>
			      Passenger Capacity: {this.props.vehicle.passengers}
			    </CardText>
			    <CardText expandable={false}>
			      Max Atmosphering Speed: {this.props.vehicle.max_atmosphering_speed}
			    </CardText>
			    <CardText expandable={false}>
			      Cargo Capacity: {this.props.vehicle.cargo_capacity + ' kgs'}
			    </CardText>
			    <CardText expandable={false}>
			      Consumables: {this.props.vehicle.consumables}
			    </CardText>
				</Card>
			</div>
		)
	}
}

export default Vehicle;
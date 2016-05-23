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
				      Capacity: {this.props.vehicle.crew}
				    </CardText>
				</Card>
			</div>
		)
	}
}

export default Vehicle;
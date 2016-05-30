import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Starship extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Card>
				    <CardHeader
				      title={this.props.starship.name}
				      subtitle={this.props.starship.model}
				      actAsExpander={false}
				      showExpandableButton={false}
				    />
				    <CardText expandable={false}>
				      Length: {this.props.starship.length + ' meters'}
				    </CardText>
				    <CardText expandable={false}>
				      Passenger Capacity: {this.props.starship.passengers}
				    </CardText>
				    <CardText expandable={false}>
				      Crew Capacity: {this.props.starship.crew}
				    </CardText>
				    <CardText expandable={false}>
				      Cargo Capacity: {this.props.starship.cargo_capacity + ' kgs'}
				    </CardText>
				    <CardText expandable={false}>
				      Class: {this.props.starship.starship_class}
				    </CardText>
				    <CardText expandable={false}>
				      Manufacturer: {this.props.starship.manufacturer}
				    </CardText>
				</Card>
			</div>
		)
	}
}

export default Starship;
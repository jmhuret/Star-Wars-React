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
				      Class: {this.props.starship.starship_class}
				    </CardText>
				    <CardText expandable={false}>
				      Manufacturer: {this.props.starship.manufacturer}
				    </CardText>
				    <CardText expandable={false}>
				      Cost: {this.props.starship.cost_in_credits + ' credits'}
				    </CardText>
				    <CardText expandable={false}>
				      Length: {this.props.starship.length + ' meters'}
				    </CardText>
				    <CardText expandable={false}>
				      Crew Capacity: {this.props.starship.crew}
				    </CardText>
				    <CardText expandable={false}>
				      Passenger Capacity: {this.props.starship.passengers}
				    </CardText>
				    <CardText expandable={false}>
				      Max Atmosphering Speed: {this.props.starship.max_atmosphering_speed}
				    </CardText>
				    <CardText expandable={false}>
				      Hyperdrive Rating: {this.props.starship.hyperdrive_rating}
				    </CardText>
				    <CardText expandable={false}>
				      Megalights (MGLT): {this.props.starship.MGLT}
				    </CardText>
				    <CardText expandable={false}>
				      Cargo Capacity: {this.props.starship.cargo_capacity + ' kgs'}
				    </CardText>
				    <CardText expandable={false}>
				      Consumables: {this.props.starship.consumables}
				    </CardText>
				    
				</Card>
			</div>
		)
	}
}

export default Starship;
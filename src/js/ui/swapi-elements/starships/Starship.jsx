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
				      Capacity: {this.props.starship.crew}
				    </CardText>
				</Card>
			</div>
		)
	}
}

export default Starship;
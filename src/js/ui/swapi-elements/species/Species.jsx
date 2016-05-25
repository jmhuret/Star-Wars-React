import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Species extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Card>
				    <CardHeader
				      title={this.props.species.name}
				      subtitle={this.props.species.classification}
				      actAsExpander={false}
				      showExpandableButton={false}
				    />
				    <CardText expandable={false}>
				      Average Lifespan: {this.props.species.average_lifespan} years
				    </CardText>
				</Card>
			</div>
		)
	}
}

export default Species;
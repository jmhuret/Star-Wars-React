import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Planet extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Card>
				    <CardHeader
				      title={this.props.planet.name}
				      subtitle={this.props.planet.climate}
				      actAsExpander={false}
				      showExpandableButton={false}
				    />
				    <CardText expandable={false}>
				      Terrain: {this.props.planet.terrain}
				    </CardText>
				</Card>
			</div>
		)
	}
}

export default Planet;
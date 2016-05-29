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
				    <CardText>
				    	Population: {this.props.planet.population}
				    </CardText>
				    <CardText>
				    	Rotational Period: {this.props.planet.rotational_period + ' hours'}
				    </CardText>
				    <CardText>
				    	Orbital Period: {this.props.planet.orbital_period + ' days'}
				    </CardText>
				    <CardText>
				    	Gravity: {this.props.planet.gravity + ' Gs'}
				    </CardText>
				    <CardText>
				    	Surface Water: {this.props.surface_water + ' %'}
				    </CardText>
				    <CardText expandable={false}>
				      Terrain: {this.props.planet.terrain}
				    </CardText>
				</Card>
			</div>
		)
	}
}

export default Planet;
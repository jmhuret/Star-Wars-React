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
				      Designation: {this.props.species.designation}
				    </CardText>
				    <CardText expandable={false}>
				      Average Height: {this.props.species.average_height} centimeters
				    </CardText>
				    <CardText expandable={false}>
				      Average Lifespan: {this.props.species.average_lifespan} years
				    </CardText>
				    <CardText expandable={false}>
				      Eye Colors: {this.props.species.eye_colors}
				    </CardText>
				    <CardText expandable={false}>
				      Hair Colors: {this.props.species.hair_colors}
				    </CardText>
				    <CardText expandable={false}>
				      Skin Colors: {this.props.species.skin_colors}
				    </CardText>
				    <CardText expandable={false}>
				      Language: {this.props.species.language}
				    </CardText>
				</Card>
			</div>
		)
	}
}

export default Species;
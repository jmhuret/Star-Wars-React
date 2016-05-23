import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Person extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		let feet = Math.floor(this.props.person.height * 0.393701 / 12);
		let inches = (this.props.person.height * 0.393701 % 12).toFixed(2);
		let pounds = (this.props.person.mass * 2.20462).toFixed(2);

		return (
			<div>
				<Card>
				    <CardHeader
				      title={this.props.person.name}
				      subtitle={this.props.person.gender}
				      actAsExpander={false}
				      showExpandableButton={false}
				    />
				    <CardText expandable={false}>
				      Height: {feet} feet {inches} inches
				    </CardText>
				    <CardText expandable={false}>
				    	Weight: {pounds} lbs
				    </CardText>
				</Card>
			</div>
		)
	}
}

export default Person;
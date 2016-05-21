import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
				    <CardActions expandable={false}>
				    	<FlatButton label="Action1" />
				    	<FlatButton label="Action2" />
				    </CardActions>
				</Card>
			</div>
		)
	}
}

export default Starship;
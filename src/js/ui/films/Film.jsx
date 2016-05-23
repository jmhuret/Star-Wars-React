import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Film extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Card>
				    <CardHeader
				      title={this.props.film.title}
				      subtitle={this.props.film.model}
				      actAsExpander={false}
				      showExpandableButton={false}
				    />
				    <CardText expandable={false}>
				      Opening: {this.props.film.opening_crawl}
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

export default Film;
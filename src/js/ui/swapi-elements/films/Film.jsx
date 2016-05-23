import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

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
				</Card>
			</div>
		)
	}
}

export default Film;

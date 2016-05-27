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
				      subtitle={'Episode ' + this.props.film.episode_id}
				      actAsExpander={false}
				      showExpandableButton={false}
				    />
				    <CardText>
				    	Release Date: {this.props.film.release_date}
				    </CardText>
				    <CardText>
				    	Director: {this.props.film.director}
				    </CardText>
				    <CardText>
				    	Producer: {this.props.film.producer}
				    </CardText>
				    <CardText expandable={false}>
				      Opening: {this.props.film.opening_crawl}
				    </CardText>
				</Card>
			</div>
		)
	}
}

export default Film;

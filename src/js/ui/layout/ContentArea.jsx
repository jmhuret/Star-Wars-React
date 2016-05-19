import React, { Component } from 'react';

require('./contentArea.scss');

class ContentArea extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="contentArea">
				{this.props.children}
			</div>
		);
	}
}

export default ContentArea;
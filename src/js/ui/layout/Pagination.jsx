import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

require('./pagination.scss');

class Pagination extends Component {

	handlePrev() {
		this.props.prevPage();
	}

	handleNext() {
		this.props.nextPage();
	}

	render() {
		return (
			<div className={'pagination ' + (this.props.hidden || '')}>

				<div className="previousButton">
					<FlatButton label="Prev"
						onTouchTap={this.handlePrev.bind(this)}/>
				</div>

				<div className="currentPage">Page {this.props.currentPage}/{this.props.totalPages}</div>

				<div className="nextButton">
					<FlatButton label="Next" onTouchTap={this.handleNext.bind(this)}/>
				</div>
			</div>
		)
	}
}

export default Pagination;

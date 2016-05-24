import React, { Component } from 'react';

require ('./loadingIcon.scss');

class LoadingIcon extends Component {
	render() {
		return (
			<div className={'spinner ' + this.props.hidden}>
			  <div class="rect1"></div>
			  <div class="rect2"></div>
			  <div class="rect3"></div>
			  <div class="rect4"></div>
			  <div class="rect5"></div>
			</div>
		)
	}
}

export default LoadingIcon;

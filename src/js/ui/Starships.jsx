import React, { Component } from 'react';
import $ from 'jquery';

import Starship from './Starship.jsx';

import {List} from 'material-ui/List';
 
// App component - represents the whole app
export default class Starships extends Component {

  constructor (props) {
    super(props);

    this.state = {
      starships: []
    }
  }
 
  componentDidMount() {
    this.serverRequest = $.get("http://swapi.co/api/starships/", function (result) {
      console.log(result);
      this.setState({
        starships: result.results
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
 
  renderStarships() {
    return this.state.starships.map((starship, index) => (
      <Starship key={index} starship={starship} />
    ));
  }

  render() {
    return (
      <div>
        <List>
          {this.renderStarships()}
        </List>
      </div>
    );
  }
}


/*
BEGIN HERE: Populate the starships from the star wars api
*/
Starships.propTypes = {
  starships: React.PropTypes.array
};
import React, { Component } from 'react';
import $ from 'jquery';

import Film from './Film.jsx';

import List from 'material-ui/List';
 
// App component - represents the whole app
export default class Films extends Component {

  constructor (props) {
    super(props);

    this.state = {
      films: []
    }
  }
 
  componentDidMount() {
    this.serverRequest = $.get("http://swapi.co/api/films/", function (result) {
      console.log(result);
      this.setState({
        films: result.results
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
 
  renderFilms() {
    return this.state.films.map((film, index) => (
      <Film key={index} film={film} />
    ));
  }

  render() {
    return (
      <div>
        <List>
          {this.renderFilms()}
        </List>
      </div>
    );
  }
}


/*
BEGIN HERE: Populate the films from the star wars api
*/
Films.propTypes = {
  films: React.PropTypes.array
};
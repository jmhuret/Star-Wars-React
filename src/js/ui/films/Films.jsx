import React, { Component } from 'react';
import _sortBy from 'lodash/sortBy';
import List from 'material-ui/List';
import Film from './FilmsListItem.jsx';

 
// App component - represents the whole app
export default class Films extends Component {

  constructor (props) {
    super(props);

    this.state = {
      films: []
    }
  }
 
  componentDidMount() {
    fetch('http://swapi.co/api/films/').then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let films = responseJSON.results;
      console.log('Films: ', films);

      films = _sortBy(films, 'episode_id');
      this.setState({
        films: films
      });
    }.bind(this));
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
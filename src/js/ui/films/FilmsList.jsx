import React, { Component } from 'react';
import { withRouter } from 'react-router';
import _sortBy from 'lodash/sortBy';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Film from './FilmsListItem.jsx';

 
// App component - represents the whole app
class FilmsList extends Component {

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

  viewFilm(id) {
    this.props.router.push(`films/${id}`);
  }
 
  renderFilmsList() {
    return this.state.films.map((film, index) => (
      <Film key={index} film={film} viewFilm={this.viewFilm.bind(this)}/>
    ));
  }

  render() {
    return (
      <div>
        <List>
          <Subheader>Films</Subheader>
          {this.renderFilmsList()}
        </List>
      </div>
    );
  }
}

export default withRouter(FilmsList);


/*
BEGIN HERE: Populate the films from the star wars api
*/
FilmsList.propTypes = {
  films: React.PropTypes.array
};
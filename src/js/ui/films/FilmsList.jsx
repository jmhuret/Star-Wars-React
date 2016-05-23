import React, { Component } from 'react';
import { withRouter } from 'react-router';
import _sortBy from 'lodash/sortBy';

import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';

import FilmListItem from './FilmsListItem.jsx';
import FilmDrawerDetail from './FilmDrawerDetail.jsx';

 
// App component - represents the whole app
class FilmsList extends Component {

  constructor (props) {
    super(props);

    this.state = {
      films: [],
      isDetailOpen: false,
      drawerWidth: 0.9 * window.innerWidth,
      selectedFilm: {},
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
        films: films,
        selectedFilm: films[0]
      });
    }.bind(this));
  }

  viewFilm(film) {
    //this.props.router.push(`films/${id}`);
    this.setState({isDetailOpen: true, selectedFilm: film});
  }
 
  renderFilmsList() {
    return this.state.films.map((film, index) => (
      <FilmListItem key={index} film={film} viewFilm={this.viewFilm.bind(this)}/>
    ));
  }

  handleCloseDetail () {
    this.setState({isDetailOpen: false});
  }

  render() {
    return (
      <div>
        <List>
          <Subheader>Films</Subheader>
          {this.renderFilmsList()}

          <Drawer docked={false}
            open={this.state.isDetailOpen}
            openSecondary={true}
            onRequestChange={(isDetailOpen) => this.setState({isDetailOpen})}
            width={this.state.drawerWidth}>
            <FilmDrawerDetail handleCloseDetail={this.handleCloseDetail.bind(this)}
              film={this.state.selectedFilm}/>
          </Drawer>
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
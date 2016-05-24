import React, { Component } from 'react';
import _sortBy from 'lodash/sortBy';

import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import LoadingIcon from '../../layout/LoadingIcon.jsx';

import FilmListItem from './FilmsListItem.jsx';
import FilmDrawerDetail from './FilmDrawerDetail.jsx';

class FilmsList extends Component {

  constructor (props) {
    super(props);

    this.state = {
      films: [],
      isDetailOpen: false,
      showLoadingIcon: true,
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
        selectedFilm: films[0] || {},
        showLoadingIcon: false
      });
    }.bind(this));
  }

  viewFilm(film) {
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

          <LoadingIcon showLoadingIconClassName={this.state.showLoadingIcon ? '': 'hidden'}/>

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

export default FilmsList;

FilmsList.propTypes = {
  films: React.PropTypes.array
};
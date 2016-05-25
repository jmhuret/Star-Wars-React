import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Pagination from '../../layout/Pagination.jsx';
import LoadingIcon from '../../layout/LoadingIcon.jsx';

import SpeciesListItem from './SpeciesListItem.jsx';
import SpeciesDrawerDetail from './SpeciesDrawerDetail.jsx';

class SpeciesList extends Component {

	constructor (props) {
    super(props);

    this.state = {
      species: [],
      isDetailOpen: false,
      showLoadingIcon: true,
      currentPage: 1,
      totalPages: 1,
      drawerWidth: 0.9 * window.innerWidth,
      selectedSpecies: {},
    }
  }
 
  componentDidMount() {
    this.getSpecies();
  }

  getSpecies() {
    this.setState({
      showLoadingIcon: true
    });

    let url='http://swapi.co/api/species/?page=' + this.state.currentPage;

    fetch(url).then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let species = responseJSON.results;
      console.log('Species: ', species);
      
      this.setState({
        species: species,
        selectedSpecies: species[0] || {},
        showLoadingIcon: false,
        totalPages: Math.ceil(responseJSON.count / 10)
      });
    }.bind(this));

  }

  viewSpecies(species) {
    this.setState({isDetailOpen: true, selectedSpecies: species});
  }
 
  renderSpeciesListItems() {
    return this.state.species.map((species, index) => (
      <SpeciesListItem key={index} species={species} viewSpecies={this.viewSpecies.bind(this)}/>
    ));
  }

  handleCloseDetail () {
    this.setState({isDetailOpen: false});
  }

  prevPage() {
    if (this.state.currentPage > 1) {
      this.setState({currentPage: this.state.currentPage - 1});
      setTimeout(function () {
        this.getSpecies();
      }.bind(this), 0);
    }
  }

  nextPage() {
    if (this.state.currentPage !== this.state.totalPages) {
      this.setState({currentPage: this.state.currentPage + 1});
      setTimeout(function () {
        this.getSpecies();
      }.bind(this), 0);
    }
  }

  render() {
    return (
      <List>
        <Subheader>Species</Subheader>
        <LoadingIcon hidden={this.state.showLoadingIcon ? '': 'hidden'}/>

        <div className={this.state.showLoadingIcon ? 'hidden': ''}>
          {this.renderSpeciesListItems()}
        </div>

        <Pagination 
          prevPage = {this.prevPage.bind(this)}
          nextPage = {this.nextPage.bind(this)} 
          currentPage = {this.state.currentPage}
          totalPages = {this.state.totalPages}
        />

        <Drawer docked={false}
          open={this.state.isDetailOpen}
          openSecondary={true}
          onRequestChange={(isDetailOpen) => this.setState({isDetailOpen})}
          width={this.state.drawerWidth}>
          <SpeciesDrawerDetail handleCloseDetail={this.handleCloseDetail.bind(this)}
            species={this.state.selectedSpecies}/>
        </Drawer>
      </List>
    );
  }
}

export default SpeciesList;

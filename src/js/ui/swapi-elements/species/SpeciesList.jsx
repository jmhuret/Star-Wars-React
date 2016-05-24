import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
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
      drawerWidth: 0.9 * window.innerWidth,
      selectedSpecies: {},
    }
  }
 
  componentDidMount() {
    fetch('http://swapi.co/api/species/').then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let species = responseJSON.results;
      console.log('Species: ', species);
      
      this.setState({
        species: species,
        selectedSpecies: species[0] || {},
        showLoadingIcon: true
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

  render() {
    return (
      <List>
        <Subheader>Species</Subheader>
        {this.renderSpeciesListItems()}

        <LoadingIcon showLoadingIconClassName={this.state.showLoadingIcon ? '': 'hidden'}/>

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

import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';

import PlanetListItem from './PlanetListItem.jsx';
import PlanetDrawerDetail from './PlanetDrawerDetail.jsx';

class PlanetsList extends Component {

	constructor (props) {
    super(props);
    console.log('List Props', props);

    this.state = {
      planets: [],
      isDetailOpen: false,
      drawerWidth: 0.9 * window.innerWidth,
      selectedPlanet: {},
    }
  }
 
  componentDidMount() {
    fetch('http://swapi.co/api/planets/').then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let planets = responseJSON.results;
      console.log('Planets: ', planets);
      
      this.setState({
        planets: planets,
        selectedPlanet: planets[0] || {}
      });
    }.bind(this));
  }

  viewPlanet(planet) {
    this.setState({isDetailOpen: true, selectedPlanet: planet});
  }
 
  renderPlanetsListItems() {
    return this.state.planets.map((planet, index) => (
      <PlanetListItem key={index} planet={planet} viewPlanet={this.viewPlanet.bind(this)}/>
    ));
  }

  handleCloseDetail () {
    this.setState({isDetailOpen: false});
  }

  render() {
    return (
      <List>
        <Subheader>Planets</Subheader>
        {this.renderPlanetsListItems()}

        <Drawer docked={false}
          open={this.state.isDetailOpen}
          openSecondary={true}
          onRequestChange={(isDetailOpen) => this.setState({isDetailOpen})}
          width={this.state.drawerWidth}>
          <PlanetDrawerDetail handleCloseDetail={this.handleCloseDetail.bind(this)}
            planet={this.state.selectedPlanet}/>
        </Drawer>
      </List>
    );
  }
}

export default PlanetsList;

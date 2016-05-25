import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Pagination from '../../layout/Pagination.jsx';
import LoadingIcon from '../../layout/LoadingIcon.jsx';

import PlanetListItem from './PlanetsListItem.jsx';
import PlanetDrawerDetail from './PlanetDrawerDetail.jsx';

class PlanetsList extends Component {

	constructor (props) {
    super(props);

    this.state = {
      planets: [],
      isDetailOpen: false,
      showLoadingIcon: true,
      currentPage: 1,
      totalPages: 1,
      drawerWidth: 0.9 * window.innerWidth,
      selectedPlanet: {},
    }
  }
 
  componentDidMount() {
    this.getPlanets();
  }

  getPlanets() {
    this.setState({
      showLoadingIcon: true
    });
    let url='http://swapi.co/api/planets/?page=' + this.state.currentPage;

    fetch(url).then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let planets = responseJSON.results;
      console.log('Planets: ', planets);
      
      this.setState({
        planets: planets,
        selectedPlanet: planets[0] || {},
        showLoadingIcon: false,
        totalPages: Math.ceil(responseJSON.count / 10)
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

  prevPage() {
    if (this.state.currentPage > 1) {
      this.setState({currentPage: this.state.currentPage - 1});
      setTimeout(function () {
        this.getPlanets();
      }.bind(this), 0);
    }
  }

  nextPage() {
    if (this.state.currentPage !== this.state.totalPages) {
      this.setState({currentPage: this.state.currentPage + 1});
      setTimeout(function () {
        this.getPlanets();
      }.bind(this), 0);
    }
  }

  render() {
    return (
      <List>
        <Subheader>Planets</Subheader>
        <LoadingIcon hidden={this.state.showLoadingIcon ? '': 'hidden'}/>

        <div className={this.state.showLoadingIcon ? 'hidden': ''}>
          {this.renderPlanetsListItems()}
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
          <PlanetDrawerDetail handleCloseDetail={this.handleCloseDetail.bind(this)}
            planet={this.state.selectedPlanet}/>
        </Drawer>
      </List>
    );
  }
}

export default PlanetsList;

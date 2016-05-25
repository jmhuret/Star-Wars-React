import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Pagination from '../../layout/Pagination.jsx';
import LoadingIcon from '../../layout/LoadingIcon.jsx';

import VehicleListItem from './VehiclesListItem.jsx';
import VehicleDrawerDetail from './VehicleDrawerDetail.jsx';
 
class VehiclesList extends Component {

  constructor (props) {
    super(props);

    this.state = {
      vehicles: [],
      isDetailOpen: false,
      showLoadingIcon: true,
      currentPage: 1,
      totalPages: 1,
      drawerWidth: 0.9 * window.innerWidth,
      selectedVehicle: {},
    }
  }
 
  componentDidMount() {
    this.getVehicles();
  }

  getVehicles() {
    this.setState({
      showLoadingIcon: true
    });
    let url='http://swapi.co/api/vehicles/?page=' + this.state.currentPage;

    fetch(url).then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let vehicles = responseJSON.results;
      console.log('Vehicles: ', vehicles);
      
      this.setState({
        vehicles: vehicles,
        selectedVehicle: vehicles[0] || {},
        showLoadingIcon: false,
        totalPages: Math.ceil(responseJSON.count / 10)
      });
    }.bind(this));
  }

  viewVehicle(vehicle) {
    this.setState({isDetailOpen: true, selectedVehicle: vehicle});
  }
 
  renderVehiclesListItems() {
    return this.state.vehicles.map((vehicle, index) => (
      <VehicleListItem key={index} vehicle={vehicle} viewVehicle={this.viewVehicle.bind(this)}/>
    ));
  }

  handleCloseDetail () {
    this.setState({isDetailOpen: false});
  }

  prevPage() {
    if (this.state.currentPage > 1) {
      this.setState({currentPage: this.state.currentPage - 1});
      setTimeout(function () {
        this.getVehicles();
      }.bind(this), 0);
    }
  }

  nextPage() {
    if (this.state.currentPage !== this.state.totalPages) {
      this.setState({currentPage: this.state.currentPage + 1});
      setTimeout(function () {
        this.getVehicles();
      }.bind(this), 0);
    }
  }

  render() {
    return (
      <List>
        <Subheader>Vehicles</Subheader>
        <LoadingIcon hidden={this.state.showLoadingIcon ? '': 'hidden'}/>

        <div className={this.state.showLoadingIcon ? 'hidden': ''}>
          {this.renderVehiclesListItems()}
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
          <VehicleDrawerDetail handleCloseDetail={this.handleCloseDetail.bind(this)}
            vehicle={this.state.selectedVehicle}/>
        </Drawer>
      </List>
    );
  }
}

export default VehiclesList;

VehiclesList.propTypes = {
  vehicles: React.PropTypes.array
};

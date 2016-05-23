import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';

import VehicleListItem from './VehiclesListItem.jsx';
import VehicleDrawerDetail from './VehicleDrawerDetail.jsx';
 
class VehiclesList extends Component {

  constructor (props) {
    super(props);

    this.state = {
      vehicles: [],
      isDetailOpen: false,
      drawerWidth: 0.9 * window.innerWidth,
      selectedVehicle: {},
    }
  }
 
  componentDidMount() {
    fetch('http://swapi.co/api/vehicles/').then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let vehicles = responseJSON.results;
      console.log('Vehicles: ', vehicles);
      
      this.setState({
        vehicles: vehicles,
        selectedVehicle: vehicles[0] || {}
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

  render() {
    return (
      <List>
        <Subheader>Vehicles</Subheader>
        {this.renderVehiclesListItems()}

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

import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import LoadingIcon from '../../layout/LoadingIcon.jsx';

import StarshipListItem from './StarshipsListItem.jsx';
import StarshipDrawerDetail from './StarshipDrawerDetail.jsx';
 
class StarshipsList extends Component {

  constructor (props) {
    super(props);

    this.state = {
      starships: [],
      isDetailOpen: false,
      showLoadingIcon: true,
      drawerWidth: 0.9 * window.innerWidth,
      selectedStarship: {},
    }
  }
 
  componentDidMount() {
    fetch('http://swapi.co/api/starships/').then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let starships = responseJSON.results;
      console.log('Starships: ', starships);
      
      this.setState({
        starships: starships,
        selectedStarship: starships[0] || {},
        showLoadingIcon: false
      });
    }.bind(this));
  }

  viewStarship(starship) {
    this.setState({isDetailOpen: true, selectedStarship: starship});
  }
 
  renderStarshipsListItems() {
    return this.state.starships.map((starship, index) => (
      <StarshipListItem key={index} starship={starship} viewStarship={this.viewStarship.bind(this)}/>
    ));
  }

  handleCloseDetail () {
    this.setState({isDetailOpen: false});
  }

  render() {
    return (
      <List>
        <Subheader>Starships</Subheader>
        {this.renderStarshipsListItems()}

        <LoadingIcon showLoadingIconClassName={this.state.showLoadingIcon ? '': 'hidden'}/>

        <Drawer docked={false}
          open={this.state.isDetailOpen}
          openSecondary={true}
          onRequestChange={(isDetailOpen) => this.setState({isDetailOpen})}
          width={this.state.drawerWidth}>
          <StarshipDrawerDetail handleCloseDetail={this.handleCloseDetail.bind(this)}
            starship={this.state.selectedStarship}/>
        </Drawer>


      </List>
    );
  }
}

export default StarshipsList;

StarshipsList.propTypes = {
  starships: React.PropTypes.array
};

import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Pagination from '../../layout/Pagination.jsx';
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
      currentPage: 1,
      totalPages: 1,
      drawerWidth: 0.9 * window.innerWidth,
      selectedStarship: {},
    }
  }
 
  componentDidMount() {
    this.getStarships();
  }

  getStarships() {
    let url='http://swapi.co/api/starships/?page=' + this.state.currentPage;

    fetch(url).then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let starships = responseJSON.results;
      console.log('Starships response: ', responseJSON);
      
      this.setState({
        starships: starships,
        selectedStarship: starships[0] || {},
        showLoadingIcon: false,
        totalPages: Math.ceil(responseJSON.count / 10)
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

  prevPage() {
    if (this.state.currentPage > 1) {
      this.setState({currentPage: this.state.currentPage - 1});
    }
  }

  nextPage() {
    if (this.state.currentPage !== this.state.totalPages) {
      this.setState({currentPage: this.state.currentPage + 1});
      setTimeout(function () {
        this.getStarships();
      }.bind(this), 0);
    }
  }

  render() {
    return (
      <List>
        <Subheader>Starships</Subheader>
        {this.renderStarshipsListItems()}

        <Pagination 
          prevPage = {this.prevPage.bind(this)}
          nextPage = {this.nextPage.bind(this)} 
          currentPage = {this.state.currentPage}
          totalPages = {this.state.totalPages}
          hidden={this.state.showLoadingIcon ? 'hidden': ''}
          />

        <LoadingIcon hidden={!this.state.showLoadingIcon ? 'hidden': ''}/>

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

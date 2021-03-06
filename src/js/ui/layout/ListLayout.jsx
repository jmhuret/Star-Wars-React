import React, { Component } from 'react';
import $ from 'jquery';

import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Pagination from './Pagination.jsx';
import LoadingIcon from './LoadingIcon.jsx';
import DetailDrawerLayout from './DetailDrawerLayout.jsx';

import FilmsListItem from '../swapi-elements/films/FilmsListItem.jsx';
import PeopleListItem from '../swapi-elements/people/PeopleListItem.jsx';
import PlanetsListItem from '../swapi-elements/planets/PlanetsListItem.jsx';
import SpeciesListItem from '../swapi-elements/species/SpeciesListItem.jsx';
import StarshipsListItem from '../swapi-elements/starships/StarshipsListItem.jsx';
import VehiclesListItem from '../swapi-elements/vehicles/VehiclesListItem.jsx';

require('./listLayout.scss');
 
class ListLayout extends Component {

  constructor (props) {
    super(props);


    this.state = {
      listItems: [],
      isDetailOpen: false,
      showLoadingIcon: true,
      currentPage: 1,
      totalPages: 1,
      listItemsUrl: this.props.route.name,
      drawerWidth: 0.9 * window.innerWidth,
      selectedListItem: {},
      initialRenderComplete: false
    }
  }
 
  componentDidMount() {
    this.getListItems();
  }

  componentWillReceiveProps(props) {
    this.setState({
      currentPage: 1,
      listItemsUrl: props.route.name,
      initialRenderComplete: props.route.name === this.props.route.name
    });

    setTimeout(function() {
      if (!this.state.initialRenderComplete) {
        this.getListItems();
      }
    }.bind(this), 0);
  }

  getListItems() {
    this.setState({
      showLoadingIcon: true
    });

    const baseUrl = 'http://swapi.co/api/';
    let url = baseUrl + this.props.route.name + '/?page=' + this.state.currentPage;

    $.get(url, function (response) {
      console.log('response', response);
      let listItems = response.results;

      this.setState({
        listItems: listItems,
        selectedListItem: listItems[0] || {},
        showLoadingIcon: false,
        totalPages: Math.ceil(response.count / 10),
        initialRenderComplete: true
      });
      
    }.bind(this));
  }

  viewListItem(listItem) {
    this.setState({isDetailOpen: true, selectedListItem: listItem});
  }
 
  renderListItems() {
    return this.state.listItems.map(function(listItem, index) {
      if (this.props.route.name === 'films') {
        return <FilmsListItem key={index} film={listItem} viewListItem={this.viewListItem.bind(this)}/>
      }
      else if (this.props.route.name === 'people') {
        return <PeopleListItem key={index} person={listItem} viewListItem={this.viewListItem.bind(this)}/>
      }
      else if (this.props.route.name === 'planets') {
        return <PlanetsListItem key={index} planet={listItem} viewListItem={this.viewListItem.bind(this)}/>
      }
      else if (this.props.route.name === 'species') {
        return <SpeciesListItem key={index} species={listItem} viewListItem={this.viewListItem.bind(this)}/>
      }
      else if (this.props.route.name === 'starships') {
        return <StarshipsListItem key={index} starship={listItem} viewListItem={this.viewListItem.bind(this)}/>
      }
      else if (this.props.route.name === 'vehicles') {
        return <VehiclesListItem key={index} vehicle={listItem} viewListItem={this.viewListItem.bind(this)}/>
      }
      else {
        return <div>No Items Found</div>
      }
    }.bind(this));
  }

  getDetailDrawer() {
    let DetailDrawer;

    if (this.state.isDetailOpen) {
      if (this.props.route.name === 'films') {
        DetailDrawer = <DetailDrawerLayout handleCloseDetail={this.handleCloseDetail.bind(this)}
              film={this.state.selectedListItem}
              itemTitle={this.state.selectedListItem.title}/>;
      }
      else if (this.props.route.name === 'people') {
        DetailDrawer = <DetailDrawerLayout handleCloseDetail={this.handleCloseDetail.bind(this)}
              person={this.state.selectedListItem}
              itemTitle={this.state.selectedListItem.name}/>;
      }
      else if (this.props.route.name === 'planets') {
        DetailDrawer = <DetailDrawerLayout handleCloseDetail={this.handleCloseDetail.bind(this)}
              planet={this.state.selectedListItem}
              itemTitle={this.state.selectedListItem.name}/>;
      }
      else if (this.props.route.name === 'species') {
        DetailDrawer = <DetailDrawerLayout handleCloseDetail={this.handleCloseDetail.bind(this)}
              species={this.state.selectedListItem}
              itemTitle={this.state.selectedListItem.name}/>;
      }
      else if (this.props.route.name === 'starships') {
        DetailDrawer = <DetailDrawerLayout handleCloseDetail={this.handleCloseDetail.bind(this)}
              starship={this.state.selectedListItem}
              itemTitle={this.state.selectedListItem.name}/>;
      }
      else if (this.props.route.name === 'vehicles') {
        DetailDrawer = <DetailDrawerLayout handleCloseDetail={this.handleCloseDetail.bind(this)}
              vehicle={this.state.selectedListItem}
              itemTitle={this.state.selectedListItem.name}/>;
      }
      else {
        DetailDrawer = <div/>
      }
    }
    else {
      DetailDrawer = <div/>
    }

    return DetailDrawer;
  }

  getPagination() {
    if (this.state.totalPages > 1) {
      return (
        <Pagination 
          prevPage = {this.prevPage.bind(this)}
          nextPage = {this.nextPage.bind(this)} 
          currentPage = {this.state.currentPage}
          totalPages = {this.state.totalPages}
        />
      );
    }
    else {
      return (<div/>);
    }
  }

  handleCloseDetail () {
    this.setState({isDetailOpen: false});
  }

  prevPage() {
    if (this.state.currentPage > 1) {
      this.setState({currentPage: this.state.currentPage - 1});
      setTimeout(function () {
        this.getListItems();
      }.bind(this), 0);
    }
  }

  nextPage() {
    if (this.state.currentPage !== this.state.totalPages) {
      this.setState({currentPage: this.state.currentPage + 1});
      setTimeout(function () {
        this.getListItems();
      }.bind(this), 0);
    }
  }

  render() {

    let Pagination = this.getPagination();
    let DetailDrawer = this.getDetailDrawer();
    let capitalizedName = this.props.route.name.charAt(0).toUpperCase() + this.props.route.name.slice(1);

    return (
      <div>
        <List>
          <div className="listItems">
            <Subheader>{capitalizedName}</Subheader>
            <LoadingIcon hidden={!this.state.showLoadingIcon ? 'hidden': ''}/>
            <div className={this.state.showLoadingIcon ? 'hidden': ''}>
              {this.renderListItems()}
            </div>
          </div>
        </List>

        {Pagination}

        <Drawer docked={false}
          open={this.state.isDetailOpen}
          openSecondary={true}
          onRequestChange={(isDetailOpen) => this.setState({isDetailOpen})}
          width={this.state.drawerWidth}>
          {DetailDrawer}
        </Drawer>
      </div>
    );
  }
}

export default ListLayout;

ListLayout.propTypes = {
  listItems: React.PropTypes.array
};

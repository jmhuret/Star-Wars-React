import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Pagination from '../../layout/Pagination.jsx';
import LoadingIcon from '../../layout/LoadingIcon.jsx';

import PeopleListItem from './PeopleListItem.jsx';
import PersonDrawerDetail from './PersonDrawerDetail.jsx';

class PeopleList extends Component {

	constructor (props) {
    super(props);

    this.state = {
      people: [],
      isDetailOpen: false,
      showLoadingIcon: true,
      currentPage: 1,
      totalPages: 1,
      drawerWidth: 0.9 * window.innerWidth,
      selectedPerson: {},
    }
  }
 
  componentDidMount() {
    this.getPeople();
  }

  getPeople() {

    this.setState({
      showLoadingIcon: true
    });
    let url='http://swapi.co/api/people/?page=' + this.state.currentPage;

    fetch(url).then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let people = responseJSON.results;
      console.log('People: ', people);
      
      this.setState({
        people: people,
        selectedPerson: people[0] || {},
        showLoadingIcon: false,
        totalPages: Math.ceil(responseJSON.count / 10)
      });
    }.bind(this));
  }

  viewPerson(person) {
    this.setState({isDetailOpen: true, selectedPerson: person});
  }
 
  renderPeopleListItems() {
    return this.state.people.map((person, index) => (
      <PeopleListItem key={index} person={person} viewPerson={this.viewPerson.bind(this)}/>
    ));
  }

  handleCloseDetail () {
    this.setState({isDetailOpen: false});
  }

  prevPage() {
    if (this.state.currentPage > 1) {
      this.setState({currentPage: this.state.currentPage - 1});
      setTimeout(function () {
        this.getPeople();
      }.bind(this), 0);
    }
  }

  nextPage() {
    if (this.state.currentPage !== this.state.totalPages) {
      this.setState({currentPage: this.state.currentPage + 1});
      setTimeout(function () {
        this.getPeople();
      }.bind(this), 0);
    }
  }

  render() {
    return (
      <List>
        <Subheader>People</Subheader>
        <LoadingIcon hidden={!this.state.showLoadingIcon ? 'hidden': ''}/>

        <div className={this.state.showLoadingIcon ? 'hidden': ''}>
          {this.renderPeopleListItems()}
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
          <PersonDrawerDetail handleCloseDetail={this.handleCloseDetail.bind(this)}
            person={this.state.selectedPerson}/>
        </Drawer>
      </List>
    );
  }
}

export default PeopleList;

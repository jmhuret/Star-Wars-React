import React, { Component } from 'react';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';

import PeopleListItem from './PeopleListItem.jsx';
import PersonDrawerDetail from './PersonDrawerDetail.jsx';

class PeopleList extends Component {

	constructor (props) {
    super(props);

    this.state = {
      people: [],
      isDetailOpen: false,
      drawerWidth: 0.9 * window.innerWidth,
      selectedPerson: {},
    }
  }
 
  componentDidMount() {
    fetch('http://swapi.co/api/people/').then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let people = responseJSON.results;
      console.log('People: ', people);
      
      this.setState({
        people: people,
        selectedPerson: people[0] || {}
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

  render() {
    return (
      <List>
        <Subheader>People</Subheader>
        {this.renderPeopleListItems()}

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

import React, { Component } from 'react';
import List from 'material-ui/List';
import Starship from './StarshipsListItem.jsx';
 
// App component - represents the whole app
export default class Starships extends Component {

  constructor (props) {
    super(props);

    this.state = {
      starships: []
    }
  }
 
  componentDidMount() {
    fetch('http://swapi.co/api/starships/').then(function (response) {
      return response.json();
    }.bind(this)).then(function (responseJSON) {
      let starships = responseJSON.results;
      console.log('Starships: ', starships);
      
      this.setState({
        starships: starships
      });
    }.bind(this));
  }
 
  renderStarships() {
    return this.state.starships.map((starship, index) => (
      <Starship key={index} starship={starship} />
    ));
  }

  render() {
    return (
      <List>
        {this.renderStarships()}
      </List>
    );
  }
}

/*
BEGIN HERE: Populate the starships from the star wars api
*/
Starships.propTypes = {
  starships: React.PropTypes.array
};
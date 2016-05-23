import React, { Component } from 'react';
import { withRouter } from 'react-router';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import StarshipListItem from './StarshipsListItem.jsx';
 
// App component - represents the whole app
class StarshipsList extends Component {

  constructor (props) {
    super(props);
    console.log('List Props', props);

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

  viewStarship(id) {
    this.props.router.push(`starships/${id}`);
  }
 
  renderStarshipsListItems() {
    return this.state.starships.map((starship, index) => (
      <StarshipListItem key={index} starship={starship} viewStarship={this.viewStarship.bind(this)}/>
    ));
  }

  render() {
    return (
      <List>
        <Subheader>Starships</Subheader>
        {this.renderStarshipsListItems()}
      </List>
    );
  }
}

export default withRouter(StarshipsList);

StarshipsList.propTypes = {
  starships: React.PropTypes.array
};
import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header.jsx';
import Starships from './Starships.jsx';
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Header />
        </MuiThemeProvider>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}
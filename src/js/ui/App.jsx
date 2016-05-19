import React, { Component } from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './layout/Header.jsx';
import Starships from './starships/Starships.jsx';

const muiDark = getMuiTheme(darkBaseTheme);
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(muiDark)}>
          <Header />
        </MuiThemeProvider>

        <MuiThemeProvider muiTheme={getMuiTheme(muiDark)}>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}
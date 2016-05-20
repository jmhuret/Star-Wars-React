import React, { Component } from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header.jsx';
import ContentArea from './ContentArea.jsx';

const muiDark = getMuiTheme(darkBaseTheme);
muiDark.appBar.color = '#FDD835';
 
// App component - represents the whole app
class Layout extends Component {
 
  render() {
    return (
      <MuiThemeProvider muiTheme={muiDark}>
        <div>
          <Header />
          <ContentArea>
            {this.props.children}
          </ContentArea>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
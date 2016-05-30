import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';

import HeaderMenuItems from './HeaderMenuItems.jsx';

require ('./header.scss');
 
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};
  }

  handleLeftIconAction () {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  handleClose () {
    this.setState({isMenuOpen: false});
  }
 
  render() {
    return (
      <div>
        <AppBar
          title="Star Wars"
          className="headerAppBar"
          iconElementLeft={
            <IconButton onTouchTap={this.handleLeftIconAction.bind(this)}>
              <NavigationMenuIcon />
            </IconButton>}>
        </AppBar>

        <Drawer docked={false}
          open={this.state.isMenuOpen}
          onRequestChange={(isMenuOpen) => this.setState({isMenuOpen})}
          className="drawer-menu">
          <AppBar
            title="Menu"
            showMenuIconButton={false}
            iconElementRight={
              <IconButton onTouchTap={this.handleClose.bind(this)}>
                <NavigationCloseIcon />
              </IconButton>}>
          </AppBar>
          <HeaderMenuItems handleClose={this.handleClose.bind(this)}/>
        </Drawer>
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  isMenuOpen: React.PropTypes.bool
};
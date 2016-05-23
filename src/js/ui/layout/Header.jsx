import React, { Component } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';

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
          <MenuItem 
            onTouchTap={this.handleClose.bind(this)}
            containerElement={<Link to="films" activeClassName="active"/>}>
              Films
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose.bind(this)}
            containerElement={<Link to="starships" activeClassName="active"/>}>
              Starships
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  isMenuOpen: React.PropTypes.bool
};
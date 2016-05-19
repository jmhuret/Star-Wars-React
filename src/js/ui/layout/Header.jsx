import React, { Component } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';
 
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleLeftIconAction () {
    this.setState({open: !this.state.open});
  }

  handleClose () {
    this.setState({open: false});
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
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
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
            containerElement={<Link to="starships" />}>
              Starships
          </MenuItem>
          <MenuItem 
            onTouchTap={this.handleClose.bind(this)}
            containerElement={<Link to="films" />}>
              Films
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  open: React.PropTypes.bool
};
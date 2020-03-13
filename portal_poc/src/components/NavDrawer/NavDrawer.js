import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Drawer, DrawerHeader, DrawerTitle, DrawerSubtitle, DrawerContent} from '@rmwc/drawer';
import { List, ListItem } from '@rmwc/list';
import {withRouter} from 'react-router-dom'

import '@material/drawer/dist/mdc.drawer.css';
import '@material/list/dist/mdc.list.css';

class NavDrawer extends Component {
  constructor(props){
    super(props);
  }
  
  navigate = (location) => {
    this.props.history.push(location);
  }

  render(){
    return (
      <Drawer>
      <DrawerHeader>
        <DrawerTitle>Karl Merecido</DrawerTitle>
        <DrawerSubtitle>Right hand to the right hand of the supreme leader of the better devs</DrawerSubtitle>
      </DrawerHeader>
      <DrawerContent>
        <List>
          <ListItem onClick={() => this.navigate("/")}>Home</ListItem>
          <ListItem onClick={() => this.navigate("/profile")}>Profile</ListItem>
          <ListItem onClick={() => this.navigate("/weather")}>Weather</ListItem>
        </List>
      </DrawerContent>
    </Drawer>
    )
  }
}
NavDrawer.propTypes = {
}

export default withRouter(NavDrawer);
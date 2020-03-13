import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Avatar } from '@rmwc/avatar';

import '@rmwc/avatar/avatar.css';

class UserAvatar extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Avatar src="https://ca.slack-edge.com/T03FK24FB-UP1SNFKFY-4c2850f93202-48" name="Karl Merecido" size="xlarge" />
    )
  }
}
UserAvatar.propTypes = {
}

export default UserAvatar;
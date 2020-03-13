import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Profile">
        <img src="https://ca.slack-edge.com/T03FK24FB-UP1SNFKFY-4c2850f93202-512"></img>
        <p>This guy. Look at this guy.</p>
      </div>
    )
  }
}
Profile.propTypes = {
}

export default Profile;
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Home">
        <h1>Welcome</h1>
        <img src="https://i.redd.it/qz2d1x3k37n31.png"></img>
      </div>
    )
  }
}
Home.propTypes = {
}

export default Home;
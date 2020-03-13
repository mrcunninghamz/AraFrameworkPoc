import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Temperature extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      zip: 55330,
      temperature: null,
      icon: null
    };
  }

  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/weather?zip=55330,us&units=Imperial&appid=158598f4d558094d49e907ff979977e8")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            temperature: result.main.temp,
            icon: result.weather[0].icon
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render(){
      if(this.state.isLoaded){

        return (
          <div className="Temperature">
            <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt=""></img>
            <h1>{this.state.temperature} * F</h1>
          </div>
        )
      }

      return(<div>Loading...</div>)
  }
}
Temperature.propTypes = {
}

export default Temperature;
import React from 'react';
import axios from 'axios';

class Story extends React.Component {

  state ={
    loc: {}
  };

  componentDidMount() {
    axios.get("api.openweathermap.org/data/2.5/weather", {appid:"315ff1e75f172edd76f71aa5afccbc16", lat: this.props.startPoint.lat, lon: this.props.startPoint.lng}).then((res) => {
      console.log(res);
      this.setState({loc: res.data});
    });
  }
    render() {
      let lat1 = this.props.startPoint.lat;
      let lon1 = this.props.startPoint.lng;
      let lat2 = this.props.endPoint.lat;
      let lon2 = this.props.endPoint.lng;
      let beginning = new Date(this.props.startTime);
      beginning = beginning.toString();
      let date = new Date(this.props.endTime - this.props.startTime);
      let duration = date.toLocaleTimeString();
      if (this.state.loc) {
        return(
          <div class="card">
              <div class = "card-body">
                <h1 class="display-4">Distance and Time</h1>
                <h3>When did the crash occur?</h3>
                <p>{beginning}</p>
                <h3>Where did it occur?</h3>
                <p>{this.state.loc.name + ', '}</p>
                <h3>What was the duration of the crash?</h3>
                <p>{duration}</p>
              </div>
          </div>
        )
      }
      return(
          <div>
          </div>
      );
  }
}

export default Story;
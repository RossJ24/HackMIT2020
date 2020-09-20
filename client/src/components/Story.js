import React from 'react';
let api_key = "315ff1e75f172edd76f71aa5afccbc16";

class Story extends React.Component {
    render() {
      let lat1 = this.props.startPoint.lat;
      let lon1 = this.props.startPoint.lng;
      let lat2 = this.props.endPoint.lat;
      let lon2 = this.props.endPoint.lng;
      let distance_traveled = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
      let beginning = new Date(this.props.startTime);
      beginning = beginning.toString();
      let date = new Date(this.props.endTime - this.props.startTime);
      let duration = date.toLocaleTimeString();
      return(
          <div class="card">
              <div class = "card-body">
                <h1 class="display-4">Distance and Time</h1>
                <h3>When did the crash occur?</h3>
                <p>{beginning}</p>
                <h3>How far did the vehicle travel during the crash?</h3>
                <p>{distance_traveled}</p>
                <h3>What was the duration of the crash?</h3>
                <p>{duration}</p>
              </div>
          </div>
      );
  }
}

export default Story;
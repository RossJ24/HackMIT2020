import React from 'react';
function timeConversion(millisec) {

  var seconds = (millisec / 1000).toFixed(1);

  var minutes = (millisec / (1000 * 60)).toFixed(1);

  var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

  var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

  if (seconds < 60) {
      return seconds + " Sec";
  } else if (minutes < 60) {
      return minutes + " Min";
  } else if (hours < 24) {
      return hours + " Hrs";
  } else {
      return days + " Days"
  }
}
class Story extends React.Component {

  state ={
    loc: {}
  };

    render() {
      let beginning = new Date(this.props.startTime);
      beginning = beginning.toString();
      let date = (this.props.endTime - this.props.startTime);
      let duration = timeConversion(date);
      if (this.state.loc) {
        return(
          <div class="card">
              <div class = "card-body justify-content-center">
                <h1 class="display-4">When</h1>
                <h3>When did the crash occur?</h3>
                <br></br>
                <p>{beginning}</p>
                <br></br>
                <h3>What was the duration of the crash?</h3>
                <br></br>
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
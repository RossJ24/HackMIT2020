import React from 'react';
import './App.css';
import axios from 'axios';
import Severity from './components/Severity';
import Narrative from './components/Narrative';
import Weather from './components/Weather';
import Board from './components/Board';
import DriverBehavior from './components/DriverBehavior';
import Hit from './components/Hit';
import Story from './components/Story';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    axios.get('/users/crashdata').then((res) => {
      this.setState({ data: res.data.crashdata });
      console.log("fetched");
    }).catch((error) => {
      console.log(error);
    });

    window.addEventListener("keydown", function(e) {
      // space, page up, page down and arrow keys:
      if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
  }, false);
  }

  render() {

    if (this.state.data) {
      const { severity, weather, narrative, start_time, end_time, coords, driver_facing_sun, prior_phone_use, continue_driving, airbag_deployed} = this.state.data;
      return (<>
        <div className="App">
          <Board>
            <Severity score={severity} />
            <Narrative story={narrative} />
            <Story startPoint = {coords[0]} endPoint = {coords[40]} startTime={start_time} endTime = {end_time}/>
            <Narrative story={narrative} />
            <Weather current={weather.weather_text} rain={weather.precipitation_type} />
            <DriverBehavior facingSun = {driver_facing_sun} phoneUse = {prior_phone_use} continuedDriving = {continue_driving} airBag = {airbag_deployed}/>
            <Hit />
          </Board>
        </div>
      </>);
    }
    return (<>
    <div></div>
    </>);
  }
}

export default App;

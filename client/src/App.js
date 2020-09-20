import React from 'react';
import './App.css';
import axios from 'axios';
import Swipeable from 'react-swipeable';
import Severity from './components/Severity';
import Narrative from './components/Narrative';
import Weather from './components/Weather';
import Board from './components/Board';
import CardWrapper from './components/CardWrapper';
import DriverReaction from './components/DriverBehavior';
import DriverBehavior from './components/DriverBehavior';

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
  }

  render() {

    if (this.state.data) {
      const { severity, weather, narrative, start_time, end_time, before_coords, driver_facing_sun, prior_phone_use, continue_driving, airbag_deployed} = this.state.data;
      return (<>
        <div className="App">
          <Board>
            <Severity score={severity} />
            <Narrative story={narrative} />
            <Story startPoint = {before_coords[0]} endPoint = {before_coords[40]} startTime={start_time} endTime = {end_time}/>
            <Narrative story={narrative} />
            <Weather current={weather.weather_text} rain={weather.precipitation_type} />
            <DriverBehavior facingSun = {driver_facing_sun} phoneUse = {prior_phone_use} continuedDriving = {continue_driving} airBag = {airbag_deployed}/>
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

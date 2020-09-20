import React from 'react';
import './App.css';
import axios from 'axios';
import Swipeable from 'react-swipeable';
import Severity from './components/Severity';
import Narrative from './components/Narrative';
import Weather from './components/Weather';

class App extends React.Component {

  state = {
    data: null
  }

  componentDidMount() {
    axios.get('/users/crashdata').then((res) => {
      this.setState({ data: res.data.crashdata });
      console.log("fetched");
      console.log(res.data.crashdata.weather)
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {

    if (this.state.data) {
      const { severity, weather, narrative } = this.state.data;
      console.log(weather);
      console.log(this.state.data.weather);
      return (<>
        <div className="App">
          <Severity score={severity} />
          <Narrative story={narrative} />
          <Weather obsTime={weather.observation_time} />
        </div>
      </>);
    }
    return (<>
    </>);
  }
}

export default App;

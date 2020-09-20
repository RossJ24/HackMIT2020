import React from 'react';
import './App.css';
import axios from 'axios';
import Swipeable from 'react-swipeable';
import Severity from './components/Severity';
import Narrative from './components/Narrative';
import Weather from './components/Weather';
import Board from './components/Board';
import CardWrapper from './components/CardWrapper';

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
      const { severity, weather, narrative } = this.state.data;
      return (<>
        <div className="App">
          <Board>
            <Severity score={severity} />
            <Narrative story={narrative} />
            <Weather obsTime={weather.observation_time} />
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

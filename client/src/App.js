import React from 'react';
import './App.css';
import axios from 'axios';
import Severity from './components/Severity';

class App extends React.Component {

  state = {
    data: {}
  }

  componentDidMount() {
    axios.get('/users/crashdata').then((res) => {
      this.setState({data: res.data.crashdata});
      console.log("fetched");
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <Severity score= {this.state.data.severity} />
      </div>
    );
  }
}

export default App;

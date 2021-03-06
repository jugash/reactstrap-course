import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import TopNav from './components/TopNav/TopNav'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import DealerLocator from './components/DealerLocator/DealerLocator'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import TestFlightForm from './components/TestFlightForm/TestFlightForm'
import VehicleDetail from './components/VehicleDetail/VehicleDetail'
import BuildAndPrice from './components/BuildAndPrice/BuildAndPrice';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicleData : null
    }
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/vehicles")
      .then(res => {
        console.log(res.data);
        this.setState({vehicleData : res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    if(this.state.vehicleData) {
      return (
          <Router >
          <div className="App">
            <TopNav vehicleData={this.state.vehicleData}/>
            <div className="contentArea" >
              <Route exact path='/' render={(props) => <Home {...props} vehicleData={this.state.vehicleData} />} />
              <Route path='/find-a-dealer' component={DealerLocator} />
              <Route path='/schedule-test-flight' component={TestFlightForm} />
              <Route path='/detail/:selectedVehicle' render={(props) => <VehicleDetail {...props} vehicleData={this.state.vehicleData} />} />
              <Route path='/build-and-price' render={(props)=><BuildAndPrice {...props} vehicleData={this.state.vehicleData} />} />
            </div>
            <Footer />
          </div>
        </Router>
      );
    } else {
      return (
        <h4>Loading data!...</h4>
      );
    }
  }
}

export default App;

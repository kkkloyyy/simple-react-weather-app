import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import './App.css';


import Temp from './Temp'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      savedLocations: [], 
      currentLocation: '',
      currentLocationDataWx: {},
      currentLocationDataAq: {},
    }
  }

  // handleChangeCityDataAq() {}
  // handleAddLocation() {}
  // handleRemoveLocation() {}

  handleChangeCity(newCity) {
    this.setState({ 
      currentLocation:newCity 
    })
    console.log('the city has been changed to ', newCity)
  }

  handleCurrentCityClear() {
    this.handleChangeCity('')
  }

  handleChangeCityData(cityData) {
    this.setState({ currentLocationDataWx: cityData })
  }

  componentWillMount() {
    console.log("I'm will be born!")
    console.log(this.state)

    this.handleChangeCity('Chengdu')
    this.handleChangeCityData({
      tempHigh: 7,
      tempLow: 0
    })
  }

  componentDidMount() {
    console.log("I'm born!")
    console.log(this.state)
  }

  componentWillUnmount() {
    console.log('I will die')
  }

  // handleNameChange = name => event => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };

  // handleAboutChange = name => event => {
  //   this.setState({
  //     about: event.target.value
  //   })
  // }

  render() {

    let nameOfCity = ''

    if (this.state.currentLocation) {
      nameOfCity = this.state.currentLocation
    } else {
      nameOfCity = 'Select Location'
    }

    let tempHigh = this.state.currentLocationDataWx.tempHigh
    var tempLow = this.state.currentLocationDataWx.tempLow

    

    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {nameOfCity}
            </Typography>
          </Toolbar>
        </AppBar>


        <Temp value={tempHigh} unit='c' />
        <Temp value={tempLow} unit='c' />

      </div>
    );
  }
}

export default App;

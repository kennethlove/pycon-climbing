import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import './App.css';

const climbClevelandLat = 41.48198;
const climbClevelandLong = -81.6895357;

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: climbClevelandLat, lng: climbClevelandLong }}>
    {props.isMarkerShown && <Marker position={{ lat: climbClevelandLat, lng: climbClevelandLong }} />}
  </GoogleMap>
));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Let's go climbing at PyCon!</h1>
          <address>Climb Cleveland, 2190 Professor St, Cleveland, OH 44113</address>
          <p>Sunday, May 13th, 5pm &ndash; 8pm</p>
          <p>Cost is <strong>$14</strong> for the day pass and <strong>$4</strong> for shoes.</p>
          < p > You can fill out the waiver online <a href="http://climb-cleveland.com/digital-waiver/">here</a>.</p>
        </header>
        <MyMapComponent
          isMarkerShown
          googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement = { < div style = {
              {
                height: `100%`
              }
            }
            />}
            containerElement = { < div style = {
                {
                  height: `400px`
                }
              }
              />}
              mapElement = { < div style = {
                  {
                    height: `100%`
                  }
                }
                />} /
                >
      </div>
    );
  }
}

export default App;

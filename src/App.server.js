import React, {Suspense} from 'react'
import './App.css'
import PropTypes from 'prop-types'
import WeatherContainer from './containers/WeatherContainer.client'
import Loader from './components/Loader.server'
import {geolocated} from 'react-geolocated'

function App ({coords}) {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Welcome to DarkSky Weather app</h1>
      </header>
      <Suspense fallback={<Loader />}>
        <WeatherContainer coords={coords} />
      </Suspense>
    </div>
  )
}

App.propTypes = {
  coords: PropTypes.object
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(App)

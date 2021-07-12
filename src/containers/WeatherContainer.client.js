import React, {useState} from 'react'
import {WeatherInputForm} from '../components/WeatherInputForm.client'
import Weather from '../components/Weather.server'
import PropTypes from 'prop-types'

const WeatherContainer = ({coords}) => {
  const [value, setValue] = useState('')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 50
      }}
    >
      <WeatherInputForm fetchWeather={(value) => setValue(value)} />
      {coords && value && <Weather value={value} coords={coords} />}
    </div>
  )
}

WeatherContainer.propTypes = {
  coords: PropTypes.object
}

export default WeatherContainer

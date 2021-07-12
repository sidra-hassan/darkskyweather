import React from 'react'
import {ClipLoader} from 'react-spinners'
import PropTypes from 'prop-types'

const Loader = ({isLoading = true}) => {
  return <ClipLoader size={100} color='#123abc' loading={isLoading} />
}

Loader.propTypes = {
  isLoading: PropTypes.bool
}

export default Loader

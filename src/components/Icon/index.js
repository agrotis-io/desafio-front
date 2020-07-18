import React from 'react'
import PropTypes from 'prop-types'

import Arrow from './Arrow'
import Close from './Close'

export default function Icon ({
  name, width, color, direction
}) {
  switch (name) {
    case 'arrow':
      return <Arrow width={width} color={color} direction={direction} />
    case 'close':
      return <Close width={width} color={color} />
    default:
      return <></>
  }
}

Icon.defaultProps = {
  color: '#fff',
  direction: 'down',
  width: '29'
}

Icon.propTypes = {
  color: PropTypes.string,
  direction: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string
}

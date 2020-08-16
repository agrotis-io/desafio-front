import React from 'react'
import PropTypes from 'prop-types'

import Arrow from './Arrow'
import Close from './Close'
import Search from './Search'
import Logo from './Logo'
import Dark from './Dark'
import Plus from './Plus'
import Loading from './Loading'

export default function Icon ({
  name, width, color, direction
}) {
  switch (name) {
    case 'arrow':
      return <Arrow width={width} color={color} direction={direction} />
    case 'close':
      return <Close width={width} color={color} />
    case 'search':
      return <Search width={width} color={color} />
    case 'dark':
      return <Dark width={width} color={color} />
    case 'logo':
      return <Logo width={width} color={color} />
    case 'plus':
      return <Plus width={width} color={color} />
    case 'loading':
      return <Loading width={width} />
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

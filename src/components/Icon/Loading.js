import * as React from 'react'
import PropTypes from 'prop-types'

export default function Loading ({ width }) {
  return (
    <svg
      style={{
        margin: 'auto',
        background: '0 0'
      }}
      width={width}
      height={width}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      display='block'
    >
      <circle cx={84} cy={50} r={10} fill='#0a3923'>
        <animate
          attributeName='r'
          repeatCount='indefinite'
          dur='0.641025641025641s'
          calcMode='spline'
          keyTimes='0;1'
          values='9;0'
          keySplines='0 0.5 0.5 1'
          begin='0s'
        />
        <animate
          attributeName='fill'
          repeatCount='indefinite'
          dur='2.564102564102564s'
          calcMode='discrete'
          keyTimes='0;0.25;0.5;0.75;1'
          values='#0a3923;#0a3923;#13a365;#0a7142;#0a3923'
          begin='0s'
        />
      </circle>
      <circle cx={16} cy={50} r={10} fill='#0a3923'>
        <animate
          attributeName='r'
          repeatCount='indefinite'
          dur='2.564102564102564s'
          calcMode='spline'
          keyTimes='0;0.25;0.5;0.75;1'
          values='0;0;9;9;9'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
          begin='0s'
        />
        <animate
          attributeName='cx'
          repeatCount='indefinite'
          dur='2.564102564102564s'
          calcMode='spline'
          keyTimes='0;0.25;0.5;0.75;1'
          values='16;16;16;50;84'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
          begin='0s'
        />
      </circle>
      <circle cx={50} cy={50} r={10} fill='#0a7142'>
        <animate
          attributeName='r'
          repeatCount='indefinite'
          dur='2.564102564102564s'
          calcMode='spline'
          keyTimes='0;0.25;0.5;0.75;1'
          values='0;0;9;9;9'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-0.641025641025641s'
        />
        <animate
          attributeName='cx'
          repeatCount='indefinite'
          dur='2.564102564102564s'
          calcMode='spline'
          keyTimes='0;0.25;0.5;0.75;1'
          values='16;16;16;50;84'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-0.641025641025641s'
        />
      </circle>
      <circle cx={84} cy={50} r={10} fill='#13a365'>
        <animate
          attributeName='r'
          repeatCount='indefinite'
          dur='2.564102564102564s'
          calcMode='spline'
          keyTimes='0;0.25;0.5;0.75;1'
          values='0;0;9;9;9'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-1.282051282051282s'
        />
        <animate
          attributeName='cx'
          repeatCount='indefinite'
          dur='2.564102564102564s'
          calcMode='spline'
          keyTimes='0;0.25;0.5;0.75;1'
          values='16;16;16;50;84'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-1.282051282051282s'
        />
      </circle>
      <circle cx={16} cy={50} r={10} fill='#0a3923'>
        <animate
          attributeName='r'
          repeatCount='indefinite'
          dur='2.564102564102564s'
          calcMode='spline'
          keyTimes='0;0.25;0.5;0.75;1'
          values='0;0;9;9;9'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-1.923076923076923s'
        />
        <animate
          attributeName='cx'
          repeatCount='indefinite'
          dur='2.564102564102564s'
          calcMode='spline'
          keyTimes='0;0.25;0.5;0.75;1'
          values='16;16;16;50;84'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-1.923076923076923s'
        />
      </circle>
    </svg>
  )
}

Loading.propTypes = {
  width: PropTypes.number.isRequired
}

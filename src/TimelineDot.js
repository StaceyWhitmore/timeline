import React from 'react'

const TimelineDot = ({position,txt}) =>
  <g transform={`translate(${position}, 0)`}>
    <circle cy={160}
            r={5}
            style={{fill: 'darkblue'}} />

    <text y={115}
          x={-95}
          transform="rotate(-48)"
          style={{fontSize:'10px'}}>{txt}</text>
  </g>

  export default TimelineDot

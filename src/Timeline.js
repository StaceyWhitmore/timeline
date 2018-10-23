import d3 from 'd3'
import React, { Component } from 'react'
import TimelineDot from './TimelineDot'

const Canvas = ({children}) =>
  <svg height="200" width="800">
    {children}
  </svg>

class Timeline extends Component {
  constructor({data=[]}) {
    super({data})
    //console.log(typeof data)
  //times is the range and represents both the earliest and the latest year on the timeline
  const times = d3.extent(data.map(d => d.year))//extent() finds the min and max vals in an array of numeric values
  const range = [50,450] //Represents range in pixels 50-450

  //.scale() can be used to interpolate the pixel value for any year on the timeline
  this.scale = d3.time.scale().domain(times).range(range)
  this.state = {data,times,range}
  }
  
render() {
  const { data }  = this.state
  const { scale } = this

  return (
    <div className="timeline">
      <h1>{this.props.name} Timeline </h1>
        <Canvas>
          {data.map((d,i) =>
            <TimelineDot key={i}
                         position={scale(d.year)}
                         txt={`${d.year} - ${d.event}`}
             />
          )}
        </Canvas>
    </div>
  )}
}
export default Timeline

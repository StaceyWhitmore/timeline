import d3 from 'd3'
import React, { Component } from 'react'
import { render } from 'react-dom'
import historicDatesForSkiing from './data/historicDatesForSkiing'

class Timeline extends Component {
  constructor({data=[]}) {
  //times is the range and represents both the earliest and the latest year on the timeline
  const times = d3.extent(data.map(d => d.year))//extent() finds the min and max vals in an array of numeric values
  const range = [50,450] //Represents range in pixels 50-450
  super({data})
  //.scale() can be used to interpolate the pixel value for any year on the timeline
  this.scale = d3.time.scale().domain(times).range(range)
  this.state = {data,times,range}
  }//close constructor()

  componentDidMount() {
  let group
  const { data, times, range } = this.setState
  const { target } = this.refs
  //move UI/DOM functionality to React
  //const scale = d3.time.scale().domain(times).range(range)

d3.select(target)
  .append('svg')
  .attr('height', 200)
  .attr('width', 500)

  group = d3.select(target.children[0])
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr(
      'transform',
      (d,i) => 'translate(' + scale(d.year) + ', 0)'
    )//close .attr()

    group.append('circle')
      .attr('cy', 160)
      .attr('r', 5)
      .attr('fill','blue')

    group.append('text')
      .text(d => d.year + " - " + d.event)
      .style('font-size', 10)
      .attr('y', 115)
      .attr('x', -95)
      .attr('transform', 'rotate(-45)')


render() {
  return (
    <div className="timeline">
      <h1>{this.props.name} Timeline </h1>
      <div ref="target"></div>
    </div>
  )
}//close render()
  }//close componentDidMount()

}//close <Timeline />

export default Timeline

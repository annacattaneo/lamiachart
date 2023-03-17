import * as d3 from 'd3'
import '../d3-styles.js'

export function render(
  svgNode,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {

  console.log(originalData)
  console.log(data)
  console.log(visualOptions)

  let sizeScale = d3
    .scaleLinear()
    .domain(d3.extent(data, d=>d.size))
    .range([visualOptions.minSize, visualOptions.maxSize])

  d3.select(svgNode)
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('fill', visualOptions.color)
    .attr('font-size', d => sizeScale(d.size))
    .attr('x', (_, i) => 35 + i * 10)
    .attr('y', (_, i) => 35 + i * 25)
    .text((row) => row.name)

 //.styles(styles.coolText)
}

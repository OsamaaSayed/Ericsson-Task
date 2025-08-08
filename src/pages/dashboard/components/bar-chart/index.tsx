import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

import type { CellTower } from '../../../../types';

interface BarChartProps {
  cellTowers: CellTower[];
}

const BarChart = ({ cellTowers }: BarChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !cellTowers.length) return;

    const towersByCity = d3.rollup(
      cellTowers,
      (v) => v.length,
      (d) => d.city,
    );
    const data = Array.from(towersByCity, ([city, count]) => ({ city, count }));

    const width = 450;
    const height = 300;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

    svg.selectAll('*').remove();

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.city))
      .range([marginLeft, width - marginRight])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count) ?? 0])
      .range([height - marginBottom, marginTop]);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .style('font-size', '1.2rem')
      .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .style('font-size', '1.2rem')
      .call(d3.axisLeft(yScale));

    svg
      .append('g')
      .attr('fill', '#61dafb')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.city)!)
      .attr('y', (d) => yScale(d.count))
      .attr('height', (d) => yScale(0) - yScale(d.count))
      .attr('width', xScale.bandwidth())
  }, []);

  return (
    <div className='chart u-border u-border-rounded-md u-flex-1 u-box-shadow'>
      <h3 className='chart__title'>Towers By City</h3>

      <div className='u-flex u-justify-center'>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default BarChart;

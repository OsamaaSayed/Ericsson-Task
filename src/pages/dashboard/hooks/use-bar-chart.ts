import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

import type { CellTower } from '../../../types';

export function useBarChart(cellTowers: CellTower[], isLoading: boolean) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !cellTowers.length || isLoading) return;

    const towersByCity = d3.rollup(
      cellTowers,
      (v) => v.length,
      (d) => d.city,
    );
    const data = Array.from(towersByCity, ([city, count]) => ({ city, count }));

    const width = 350;
    const height = 200;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);

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
      .attr('width', xScale.bandwidth());
  }, [cellTowers, isLoading]);

  return { svgRef };
}
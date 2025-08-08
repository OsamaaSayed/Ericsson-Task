import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

import type { CellTower } from '../../../../types';

interface PieChartProps {
  cellTowers: CellTower[];
}

const PieChart = ({ cellTowers }: PieChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !cellTowers.length) return;

    const statusCounts = d3.rollup(
      cellTowers,
      (v) => v.length,
      (d) => d.status,
    );
    const data = Array.from(statusCounts, ([status, count]) => ({
      status,
      count,
    }));

    const width = 450;
    const height = 300;
    const radius = Math.min(width, height) / 2 - 20; // Margin for the pie

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove();

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.status))
      .range(['#10b981', '#ef4444']);

    const pie = d3
      .pie<{ status: string; count: number }>()
      .value((d) => d.count)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<{ status: string; count: number }>>()
      .innerRadius(0)
      .outerRadius(radius);

    const pieData = pie(data);

    g.selectAll('path')
      .data(pieData)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => color(d.data.status) as string)
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    const legend = svg.append('g').attr('transform', `translate(20, 20)`);

    const legendItems = legend
      .selectAll('.legend-item')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 25})`);

    legendItems
      .append('rect')
      .attr('width', 18)
      .attr('height', 18)
      .attr('fill', (d) => color(d.status) as string);

    legendItems
      .append('text')
      .attr('x', 24)
      .attr('y', 9)
      .attr('dy', '0.35em')
      .text((d) => `${d.status} (${d.count})`);
  }, []);

  return (
    <div className='chart u-border u-border-rounded-md u-flex-1 u-box-shadow'>
      <h3 className='chart__title'>Status Distribution</h3>

      <div className='u-flex u-justify-center'>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default PieChart;

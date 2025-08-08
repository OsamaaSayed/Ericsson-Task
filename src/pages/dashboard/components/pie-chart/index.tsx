import { useRef } from 'react';

const PieChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);

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

import { useRef } from 'react';

const BarChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);

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

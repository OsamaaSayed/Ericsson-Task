import SummaryCardList from './components/summary-card-list';
import BarChart from './components/bar-chart';
import PieChart from './components/pie-chart';
import Table from './components/table';

import { cellTowers } from '../../constants';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='u-flex u-flex-col u-gap-2xl'>
        <SummaryCardList cellTowers={cellTowers} />

        <div className='u-flex u-gap-lg'>
          <BarChart cellTowers={cellTowers} />
          <PieChart />
        </div>

        <Table cellTowers={cellTowers} />
      </div>
    </section>
  );
};

export default Dashboard;

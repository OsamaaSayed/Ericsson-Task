import SummaryCardList from './components/summary-card-list';
import Table from './components/table';

import { cellTowers } from '../../constants';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='u-flex u-flex-col u-gap-lg'>
        <SummaryCardList cellTowers={cellTowers} />
        <Table cellTowers={cellTowers} />
      </div>
    </section>
  );
};

export default Dashboard;

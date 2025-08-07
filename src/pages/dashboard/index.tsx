import SummaryCardList from './components/summary-card-list';
import Table from './components/table';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='u-flex u-flex-col u-gap-lg'>
        <SummaryCardList />
        <Table />
      </div>
    </section>
  );
};

export default Dashboard;

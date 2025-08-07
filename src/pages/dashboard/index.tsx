import SummaryCardList from './components/summary-card-list';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='u-flex u-flex-col u-gap-lg'>
        <SummaryCardList />
      </div>
    </section>
  );
};

export default Dashboard;

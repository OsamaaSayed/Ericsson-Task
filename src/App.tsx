import Dashboard from './pages/dashboard';

import Layout from './components/layout';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';

import './styles/scss/style.scss';

function App() {
  return (
    <Layout>
      <Sidebar />

      <div className='u-flex u-flex-col u-flex-1 u-overflow-x-auto'>
        <Header />
        <Dashboard />
      </div>
    </Layout>
  );
}

export default App;

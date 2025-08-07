import Dashboard from './pages/dashboard';

import Layout from './components/layout';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
// import Footer from './components/layout/footer';

import './styles/scss/style.scss';

function App() {
  return (
    <Layout>
      <Sidebar />

      <div className='u-flex u-flex-col'>
        <Header />
        <Dashboard />
        {/* <Footer /> */}
      </div>
    </Layout>
  );
}

export default App;

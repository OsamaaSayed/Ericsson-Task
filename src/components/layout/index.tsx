import Sidebar from './sidebar';
import Header from './header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='u-container u-py-4 u-min-h-screen'>
      <div className='layout u-border u-border-rounded-md'>
        <Sidebar />

        <div className='u-flex u-flex-col u-flex-1 u-overflow-x-auto'>
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;

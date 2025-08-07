const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='u-container u-py-4'>
      <div className='u-border u-border-rounded-md'>
        <div className='layout'>{children}</div>
      </div>
    </main>
  );
};

export default Layout;

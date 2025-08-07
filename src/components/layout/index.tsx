const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='u-container u-py-4 u-min-h-screen'>
      <div className='layout u-border u-border-rounded-md'>{children}</div>
    </main>
  );
};

export default Layout;

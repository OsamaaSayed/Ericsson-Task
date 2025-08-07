import Logo from './components/logo';
import DashboardIcon from './components/dashboard-icon';

const Sidebar = () => {
  return (
    <aside className='sidebar u-border-r'>
      <div className='sidebar__header u-border-b'>
        <a
          className='sidebar__link'
          href='#'
        >
          <Logo />
        </a>
      </div>

      <div className='sidebar__content'>
        <p>Home</p>

        <ul>
          <li className='sidebar__item'>
            <a href='#'>
              <DashboardIcon />
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

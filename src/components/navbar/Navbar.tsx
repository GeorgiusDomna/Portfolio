'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
// import LangSwitch from '../LangSwitch/LangSwitch';
import './style.css';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const activeLink = 'nav-list_link nav-list_link--active';
  const normalLink = 'nav-list_link';

  return ( 
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link href="/" className="logo"><strong>Forontend dev.</strong> Портфолио</Link>
          <div className="settingBlock">
            {/* <LangSwitch /> */}
            <BtnDarkMode />
          </div>
          <nav className="nav-list">
            <div className="nav-list_item">
              <Link href="/projects" className={pathname === '/projects' ? activeLink : normalLink}>Проекты</Link>
            </div>
            <div className="nav-list_item">
              <Link href="/skills" className={pathname === '/skills' ? activeLink : normalLink}>Навыки</Link>
            </div>
            <div className="nav-list_item">
              <Link href="/contacts" className={pathname === '/contacts' ? activeLink : normalLink}>Контакты</Link>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
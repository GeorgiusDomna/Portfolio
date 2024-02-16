import LangSwitch from '../LangSwitch/LangSwitch';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const activeLink = 'nav-list_link nav-list_link--active';
  const normalLink = 'nav-list_link';

  return ( 
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo"><strong>Forontend dev.</strong> {t('Portfolio')}</NavLink>
          <div className="settingBlock">
            <LangSwitch />
            <BtnDarkMode />
          </div>
          <ul className="nav-list">
            <li className="nav-list_item">
              <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>{t('Projects')}</NavLink>
            </li>
            <li className="nav-list_item">
              <NavLink to="/skills" className={({ isActive }) => isActive ? activeLink : normalLink}>{t('Skills')}</NavLink>
            </li>
            <li className="nav-list_item">
              <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>{t('Contacts')}</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {

  const activeLink = 'nav-list_link nav-list_link--active';
  const normalLink = 'nav-list_link';

  return ( 
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo"><strong>JavaScript dev.</strong> Portfolio</NavLink>
          <BtnDarkMode />
          <ul className="nav-list">
            <li className="nav-list_item"><NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Projects</NavLink></li>
            <li className="nav-list_item"><NavLink to="/skills"   className={({isActive}) => isActive ? activeLink : normalLink}>Skills</NavLink></li>
            <li className="nav-list_item"><NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
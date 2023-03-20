import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header">
      <ul className="header-list">
        <li>
          <NavLink
            className="header-button"
            to={'/'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="header-button"
            to={'/about'}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;

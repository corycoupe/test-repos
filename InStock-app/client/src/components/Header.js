import React from "react";
import logoSrc from "./../assets/Logo/Logo-instock.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/instock" className="header__logo" exact>
          <img src={logoSrc} alt="instock logo" />
        </NavLink>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink
                to="/inventory"
                className="navbar__link navbar__link--active"
              >
                inventory
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/locations" className="navbar__link">
                Locations
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import logo from '../images/logo.png';

const NavBar = () => {
  const detailsNav = <TiArrowBackOutline className="goBack" />;
  const header = 'Corona Nigeria Checker';
  const location = useLocation();
  const goBack = location.pathname.includes('State') ? detailsNav : '';

  return (
    <nav>
      <div className="firstnav">
        <NavLink exact="true" to={{ pathname: '/' }}>
          {goBack}
        </NavLink>
        <h1 className="firstheader">CoviData</h1>
      </div>
      <div className="secondnav">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="2ndheader">
          {header}
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import logo from '../images/logo.png';

const NavBar = () => {
  const detailsNav = <TiArrowBackOutline className="setBack" />;
  const header = 'Corona Nigeria Checker';
  const location = useLocation();
  const goBack = location.pathname.includes('State') ? detailsNav : '';

  return (
    <nav>
      <div className="firstnav">
        <NavLink exact="true" to={{ pathname: '/' }}>
          {goBack}
        </NavLink>
        <h1 className="firstheader">CovidData</h1>
        <div className="navIcons">
          <BsMic />
          <AiOutlineSetting />
        </div>
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

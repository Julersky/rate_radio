import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import './Header.scss';
import logo_header from "../../assets/rate_radio_logo.jpg"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo_header} alt="raté radio" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;

import React from 'react';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image";
import './header.css'

const Header = ({title}) => {
  return (
    <header className="header">
    <div className="container">
      <div className="header__inner">
        <div className="header__logo">
          <StaticImage src="../images/Logo1.png" alt="logo_MST" />
        </div>
        <nav className="nav">
          <a href="#" className="nav__link">Про Кафедру</a>
          <a href="#" className="nav__link">Учбовий процес</a>
          <a href="#" className="nav__link">Наука</a>
          <a href="#" className="nav__link">Абітурієнтам</a>
          <a href="#" className="nav__link">Студентам</a>
          <a href="#" className="nav__link">Партнери</a>
          <a href="#" className="nav__link">Контакти</a>
        </nav>
        <div className="mod-languages">
          <ul className="lang-inline">
            <li className="lang-active">
              <a href="#">
                Ua</a>
            </li>
            <li className="lang-active">
              <a href="#">
                Ru</a>
            </li>
            <li className="lang-active">
              <a href="#">
                En</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
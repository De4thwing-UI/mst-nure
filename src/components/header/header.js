import React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link language="ua" to="/">
              {" "}
              <StaticImage src="../../images/Logo1.png" alt="logo_MST" />
            </Link>
          </div>
          <nav className="nav">
            <a href="#" className="nav__link">
              Про Кафедру
              <div className="nav__dropdown">
                <Link
                  language="ua"
                  to="/teacher/teacher"
                  className="nav__dropdown__link"
                >
                  Склад кафедри
                </Link>
                <Link
                  language="ua"
                  to="/history/history"
                  className="nav__dropdown__link"
                >
                  Історія кафедри
                </Link>
                <Link
                  language="ua"
                  to="/graduates/graduates"
                  className="nav__dropdown__link"
                >
                  Наші випускники
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              Учбовий процес
            </a>
            <a href="#" className="nav__link">
              Наука
              <div className="nav__dropdown">
                <Link
                  language="ua"
                  to="/teacher/teacher"
                  className="nav__dropdown__link"
                >
                  Лабараторія
                </Link>
                <Link
                  language="ua"
                  to="/directions/directions"
                  className="nav__dropdown__link"
                >
                  Наукові напрями
                </Link>
                <Link
                  language="ua"
                  to="/studentscience/studentscience"
                  className="nav__dropdown__link"
                >
                  Студентська наука
                </Link>
                <Link
                  language="ua"
                  to="/works/works"
                  className="nav__dropdown__link"
                >
                  Роботи студентів
                </Link>
                <Link
                  language="ua"
                  to="/sections/sections"
                  className="nav__dropdown__link"
                >
                  Гуртки кафедри
                </Link>
                <Link
                  language="ua"
                  to="/offer/offer"
                  className="nav__dropdown__link"
                >
                  Запропонувати тему
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              Абітурієнтам
              <div className="nav__dropdown">
                <Link
                  language="ua"
                  to="/teacher/teacher"
                  className="nav__dropdown__link"
                >
                  Правила вступу
                </Link>
                <Link
                  language="ua"
                  to="/admissions/admissions"
                  className="nav__dropdown__link"
                >
                  Спеціальність
                </Link>
                <Link
                  language="ua"
                  to="/studentscience/studentscience"
                  className="nav__dropdown__link"
                >
                  Наша реклама
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              Студентам
            </a>
            <a href="#" className="nav__link">
              Партнери
            </a>
            <a href="#" className="nav__link">
              Контакти
            </a>
          </nav>
          <div className="mod-languages">
            <ul className="lang-inline">
              <li className="lang-active">
                <a href="#">Ua</a>
              </li>
              <li className="lang-active">
                <a href="#">Ru</a>
              </li>
              <li className="lang-active">
                <a href="#">En</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

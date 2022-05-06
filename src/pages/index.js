import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import News from "../components/lastnews/lastnews"
import Works from "../components/works/works"
import Specialities from "../components/specialities/specialities"
import Magistracy from "../components/magistracy/magistracy"
import Employment from "../components/employment/employments"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"

const IndexPage = () => {
  const menuItems = [
    {
      displayName: 'Про кафедру',
      open: false,
      hide: false,
      subItems: [
        {displayName: 'Склад кафедри', link: '/teacher/teacher'},
        {displayName: 'Історія кафедри', link: '/history/history'},
        {displayName: 'Наші випускники', link: '/graduates/graduates'},
      ]
    },
    {displayName: 'Учбовий процес', open: false, hide: false, subItems: []},
    {displayName: 'Наука', open: false, hide: false, subItems: [
        {displayName: 'Лабараторія', link: '/teacher/teacher'},
        {displayName: 'Наукові напрями', link: '/directions/directions'},
        {displayName: 'Студентська наука', link: '/studentscience/studentscience'},
        {displayName: 'Роботи студентів', link: '/works/works'},
        {displayName: 'Гуртки кафедри', link: '/sections/sections'},
        {displayName: 'Запропонувати тему', link: '/offer/offer'}
      ]
    },
    {displayName: 'Абітурієнтам', open: false, hide: false, subItems: [
        {displayName: 'Правила вступу', link: '/rules/rules'},
        {displayName: 'Спеціальність', link: '/admissions/admissions'},
        {displayName: 'Наша реклама', link: '/advertising/advertising'}
      ]
    },
    {displayName: 'Студентам', open: false, hide: false, subItems: [
        {displayName: 'Розклад', link: 'http://cist.kture.kharkov.ua'},
        {displayName: 'Ресурси', link: '/resources/resources'},
        {displayName: 'Студентське життя', link: '/student-life/student-life'},
        {displayName: 'Анотації дисциплін', link: '/annotations/annotations'},
        {displayName: 'Науково-дослід. робота', link: '/science-work/science-work'},
        {displayName: 'Вибір студента', link: '/student-choise/student-choise'},
        {displayName: 'Дипломування', link: '/diploma/diploma'},
        {displayName: 'Обговорення ОП', link: '/discuss/discuss'}
      ]
    },
    {displayName: 'Партнери', open: false, hide: false, link: '#' },
    {displayName: 'Контакты', open: false, hide: false, link: '#'}
  ]

  const { t } = useTranslation()
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [menuItemsState, setMenuItemsState] = useState(menuItems);

  const toggleSubMenu = (key) => {
    setMenuItemsState(menuItemsState.map((item, index) => {
      if (index === key) {
        item.open = !item.open
      } else {
        item.hide = !item.hide
      }

      return item
    }))
  }

  return (
    <div>
      <div className="header-sm">
        <div className="container">
          <div className="header-sm_menu">
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              color="#393982"
              onClick={() => setBurgerMenu(true)}
            />
            <span className="line">
            </span>

            <StaticImage className="header-sm_logo" src="../images/Logo1.png" alt="logo_MST" />
          </div>
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

        <div className={burgerMenu ? "header-open-sm" : "menu-none"}>
          <div className="header-menu-sm">
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              color="#393982"
              onClick={() => setBurgerMenu(false)}
            />
            <span className="line">
            </span>
            <StaticImage className="header-sm_logo" src="../images/Logo1.png" alt="logo_MST" />
          </div>

          <ul className="link-list-sm">
            { menuItems
              .map((item, key) => (
                <li
                  className={
                    menuItemsState[key].open ? 'list-item-sm' :
                    menuItemsState[key].hide ? 'list-item-sm_none' : 'list-item-sm'
                  }
                  key={item.displayName + key.toString()}
                >

                  {
                    menuItemsState[key].open ? (
                    <ul className='list-sub-menu-sm'>
                      <li className="list-item-sm_active list-item-sm">
                        <span
                          onClick={() => toggleSubMenu(key)}
                          className="list-item_link"
                        >
                          {item.displayName}
                        </span>
                      </li>
                      {item.subItems.map((subItem, subItemIndex) => (
                        <li className="list-item-sm" key={subItem + subItemIndex.toString()}>
                          <Link className="list-item_link" to={subItem.link}>{subItem.displayName}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : item.link ?
                    <Link className="list-item_link" to={item.link}>{item.displayName}</Link>
                     :
                    <span
                      onClick={() => toggleSubMenu(key)}
                      className="list-item_link">
                      {item.displayName}
                    </span>
                  }
                </li>
              ))}
          </ul>
        </div>
      </div>

      <Header />

      {/* Intro */}
      <div className="intro">
        <div className="container">
          <div className="intro__inner">
            <StaticImage
              src="../images/intro-bg-sm.svg"
              alt="intro_image-sm"
              className="intro__image-sm"
            />
            <h1 className="intro__title">
              Харківський національний університет радіоелектроніки
            </h1>
            <h2 className="intro__subtitle">
              Кафедра Медіасистеми та технології
            </h2>
            <h3 className="intro__text">
              Ми завжди готові допомогти Вам отримати максимум знань і умінь в
              нашій професійній сфері
            </h3>
          </div>
          <StaticImage
            src="../images/intro-bg.svg"
            alt="intro_image"
            className="intro__image"
          />
        </div>
      </div>
      {/* Features */}
      <div className="features">
        <div className="container">
          <div className="features__inner">
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/people.svg"
                alt="Teachers"
              />
              <div className="features__title">
                24
                <p className="features__text">Викладача</p>
              </div>
            </div>
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/work.svg"
                alt="Teachers"
              />
              <div className="features__title">
                100%
                <p className="features__text">Працевлаштування</p>
              </div>
            </div>
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/students.svg"
                alt="Teachers"
              />
              <div className="features__title">
                3000+
                <p className="features__text">Випускників</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* News */}
      <News />
      {/* Specification */}
      <Specialities />
      {/* Magistracy */}
      <Magistracy />
      {/* Works */}
      <Works />
      {/* Employment */}
      <Employment />
      <Footer />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

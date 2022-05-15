import React, { useState } from "react"
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"
import { useStaticQuery, graphql, Link } from "gatsby"

export const HeaderSm = () => {
  const logo = useStaticQuery(graphql`
    query {
      file(name: {eq: "Logo1"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const menuItems = [
    {
      displayName: "Про кафедру",
      open: false,
      hide: false,
      subItems: [
        { displayName: "Склад кафедри", link: "/teacher" },
        { displayName: "Історія кафедри", link: "/history" },
        { displayName: "Наші випускники", link: "/graduates" },
      ],
    },
    {
      displayName: "Учбовий процес",
      open: false,
      hide: false,
      subItems: [
        { displayName: "Постійна комісія УМР", link: "/commission/commission" },
        {
          displayName: "Форми освіти",
          link: "https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf",
        },
        {
          displayName: "Спеці альності",
          link: "https://nure.ua/ru/faculty/fakultet-kompyuternyih-nauk",
        },
        {
          displayName: "Освітні програми",
          link: "https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf",
        },
        {
          displayName: "Силлабуси дисциплин",
          link: "https://drive.google.com/drive/folders/1B91OGarzXYz8Inyn5AKPDTIa48Qs_duo",
        },
        {
          displayName: "Графіки учбового процесса",
          link: "https://cist.nure.ua/ias/app/tt/f?p=778:2:4427815546178203",
        },
        {
          displayName: "Вибір дисциплін студентом",
          link: "https://nure.ua/department/kafedra-mediasistem-ta-tehnologiy-mst/vibirkovi-osvitni-komponenti-na-kafedri-mst",
        },
      ],
    },
    {
      displayName: "Наука",
      open: false,
      hide: false,
      subItems: [
        { displayName: "Лабараторія", link: "/teacher" },
        { displayName: "Наукові напрями", link: "/directions" },
        {
          displayName: "Студентська наука",
          link: "/studentscience",
        },
        { displayName: "Роботи студентів", link: "/works" },
        { displayName: "Гуртки кафедри", link: "/sections" },
        { displayName: "Запропонувати тему", link: "/offer" },
      ],
    },
    {
      displayName: "Абітурієнтам",
      open: false,
      hide: false,
      subItems: [
        { displayName: "Правила вступу", link: "/rules" },
        { displayName: "Спеціальність", link: "/admissions" },
        { displayName: "Наша реклама", link: "/advertising" },
      ],
    },
    {
      displayName: "Студентам",
      open: false,
      hide: false,
      subItems: [
        { displayName: "Розклад", link: "http://cist.kture.kharkov.ua" },
        { displayName: "Ресурси", link: "/resources" },
        {
          displayName: "Студентське життя",
          link: "/student-life",
        },
        { displayName: "Анотації дисциплін", link: "/annotations" },
        {
          displayName: "Науково-дослід. робота",
          link: "/science-work",
        },
        { displayName: "Вибір студента", link: "/student-choise" },
        { displayName: "Дипломування", link: "/diploma" },
        { displayName: "Обговорення ОП", link: "/discuss" },
      ],
    },
    { displayName: "Партнери", open: false, hide: false, link: "#" },
    { displayName: "Контакты", open: false, hide: false, link: "#" },
  ]

  const [burgerMenu, setBurgerMenu] = useState(false)
  const [menuItemsState, setMenuItemsState] = useState(menuItems)

  const toggleSubMenu = key => {
    setMenuItemsState(
      menuItemsState.map((item, index) => {
        if (index === key) {
          item.open = !item.open
        } else {
          item.hide = !item.hide
        }

        return item
      })
    )
  }

  return (
    <div className="header-sm">
      <div className="container">
        <div className="header-sm_menu">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            color="#393982"
            onClick={() => setBurgerMenu(true)}
          />{" "}
          <span className="line" />
          <Link language="ua" to="/">
            <GatsbyImage
              className="header-sm_logo"
              image={logo.file.childImageSharp.gatsbyImageData}
              alt="logo_MST" />
          </Link>
        </div>{" "}
        <div className="mod-languages">
          <ul className="lang-inline">
            <li className="lang-active">
              <a href="#"> Ua </a>{" "}
            </li>{" "}
            <li className="lang-active">
              <a href="#"> Ru </a>{" "}
            </li>{" "}
            <li className="lang-active">
              <a href="#"> En </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
      <div className={burgerMenu ? "header-open-sm" : "menu-none"}>
        <div className="header-menu-sm">
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            color="#393982"
            onClick={() => setBurgerMenu(false)}
          />{" "}
          <span className="line"> </span>{" "}
          <Link language="ua" to="/">
            <GatsbyImage
              className="header-sm_logo"
              image={logo.file.childImageSharp.gatsbyImageData}
              alt="logo_MST" />
          </Link>
        </div>{" "}
        <ul className="link-list-sm">
          {" "}
          {menuItems.map((item, key) => (
            <li
              className={
                menuItemsState[key].open
                  ? "list-item-sm"
                  : menuItemsState[key].hide
                  ? "list-item-sm_none"
                  : "list-item-sm"
              }
              key={item.displayName + key.toString()}
            >
              {menuItemsState[key].open ? (
                <ul className="list-sub-menu-sm">
                  <li className="list-item-sm_active list-item-sm">
                    <span
                      onClick={() => toggleSubMenu(key)}
                      className="list-item_link"
                    >
                      {item.displayName}{" "}
                    </span>{" "}
                  </li>{" "}
                  {item.subItems.map((subItem, subItemIndex) => (
                    <li
                      className="list-item-sm"
                      key={subItem + subItemIndex.toString()}
                    >
                      <Link className="list-item_link" to={subItem.link}>
                        {" "}
                        {subItem.displayName}{" "}
                      </Link>{" "}
                    </li>
                  ))}{" "}
                </ul>
              ) : item.link ? (
                <Link className="list-item_link" to={item.link}>
                  {" "}
                  {item.displayName}{" "}
                </Link>
              ) : (
                <span
                  onClick={() => toggleSubMenu(key)}
                  className="list-item_link"
                >
                  {item.displayName}{" "}
                </span>
              )}{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  )
}

export default HeaderSm
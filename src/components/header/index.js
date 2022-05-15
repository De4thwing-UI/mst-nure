import React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import HeaderSm from "src/components/header-sm"

const Header = ({ title }) => {
  return (
    <header className="header">
      <HeaderSm />
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link language="ua" to="/">
              <StaticImage src="../../images/Logo1.png" alt="logo_MST" />
            </Link>
          </div>
          <nav className="nav">
            <a href="#" className="nav__link">
              Про Кафедру
              <div className="nav__dropdown">
                <Link
                  language="ua"
                  to="/teacher"
                  className="nav__dropdown__link"
                >
                  Склад кафедри
                </Link>
                <Link
                  language="ua"
                  to="/history"
                  className="nav__dropdown__link"
                >
                  Історія кафедри
                </Link>
                <Link
                  language="ua"
                  to="/graduates"
                  className="nav__dropdown__link"
                >
                  Наші випускники
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              Учбовий процес
              <div className="nav__dropdown">
                <Link
                  language="ua"
                  to="/commission/commission"
                  className="nav__dropdown__link"
                >
                  Постійна комісія УМР
                </Link>
                <a
                  language="ua"
                  href="https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Форми освіти{" "}
                </a>
                <a
                  language="ua"
                  href="https://nure.ua/ru/faculty/fakultet-kompyuternyih-nauk"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Спеціальності{" "}
                </a>
                <a
                  language="ua"
                  href="https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Освітні програми{" "}
                </a>
                <a
                  language="ua"
                  href="https://drive.google.com/drive/folders/1B91OGarzXYz8Inyn5AKPDTIa48Qs_duo"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Силлабуси дисциплин{" "}
                </a>
                <a
                  language="ua"
                  href="https://cist.nure.ua/ias/app/tt/f?p=778:2:4427815546178203"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Графіки навчального процесу{" "}
                </a>
                <a
                  language="ua"
                  href="https://nure.ua/department/kafedra-mediasistem-ta-tehnologiy-mst/vibirkovi-osvitni-komponenti-na-kafedri-mst"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Обрання дисциплін студентом{" "}
                </a>
              </div>
            </a>
            <a href="#" className="nav__link">
              Наука
              <div className="nav__dropdown">
                <Link
                  language="ua"
                  to="/teacher"
                  className="nav__dropdown__link"
                >
                  Лабараторія
                </Link>
                <Link
                  language="ua"
                  to="/directions"
                  className="nav__dropdown__link"
                >
                  Наукові напрями
                </Link>
                <Link
                  language="ua"
                  to="/studentscience"
                  className="nav__dropdown__link"
                >
                  Студентська наука
                </Link>
                <Link language="ua" to="/works" className="nav__dropdown__link">
                  Роботи студентів
                </Link>
                <Link
                  language="ua"
                  to="/sections"
                  className="nav__dropdown__link"
                >
                  Гуртки кафедри
                </Link>
                <Link language="ua" to="/offer" className="nav__dropdown__link">
                  Запропонувати тему
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              Абітурієнтам
              <div className="nav__dropdown">
                <Link language="ua" to="/rules" className="nav__dropdown__link">
                  Правила вступу
                </Link>
                <Link
                  language="ua"
                  to="/admissions"
                  className="nav__dropdown__link"
                >
                  Спеціальність
                </Link>
                <Link
                  language="ua"
                  to="/advertising"
                  className="nav__dropdown__link"
                >
                  Наша реклама
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              Студентам
              <div className="nav__dropdown">
                <Link
                  language="ua"
                  to="http://cist.kture.kharkov.ua/"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Розклад
                </Link>
                <Link
                  language="ua"
                  to="/resources"
                  className="nav__dropdown__link"
                >
                  Ресурси
                </Link>
                <Link
                  language="ua"
                  to="/student-life"
                  className="nav__dropdown__link"
                >
                  Студентське життя
                </Link>
                <Link
                  language="ua"
                  to="/annotations"
                  className="nav__dropdown__link"
                >
                  Анотації дисциплін
                </Link>
                <Link
                  language="ua"
                  to="/science-work"
                  className="nav__dropdown__link"
                >
                  Науково - дослід.робота
                </Link>
                <Link
                  language="ua"
                  to="/student-choise"
                  className="nav__dropdown__link"
                >
                  Вибір студента
                </Link>
                <Link
                  language="ua"
                  to="/diploma"
                  className="nav__dropdown__link"
                >
                  Дипломування
                </Link>
                <Link
                  language="ua"
                  to="/discuss"
                  className="nav__dropdown__link"
                >
                  Обговорення ОП
                </Link>
              </div>
            </a>
            <a href="/partners" className="nav__link">
              Партнери
            </a>
            <a href="/contact" className="nav__link">
              Контакти
            </a>
          </nav>
          <div className="mod-languages">
            <ul className="lang-inline">
              <li className="lang-active">
                <a href="#"> Ua </a>
              </li>
              <li className="lang-active">
                <a href="#"> Ru </a>
              </li>
              <li className="lang-active">
                <a href="#"> En </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

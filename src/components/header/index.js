import React from "react"
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import HeaderSm from "src/components/header-sm"

const Header = () => {
  const { languages, changeLanguage } = useI18next()

  return (
    <header className="header">
      <HeaderSm />
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">
              <StaticImage src="../../images/Logo1.png" alt="logo_MST" />
            </Link>
          </div>
          <nav className="nav">
            <a href="#" className="nav__link">
              <Trans>test</Trans>
              Про Кафедру
              <div className="nav__dropdown">
                <Link to="/teacher" className="nav__dropdown__link">
                  Склад кафедри
                </Link>
                <Link to="/history" className="nav__dropdown__link">
                  Історія кафедри
                </Link>
                <Link to="/graduates" className="nav__dropdown__link">
                  Наші випускники
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              Учбовий процес
              <div className="nav__dropdown">
                <Link
                  to="/commission/commission"
                  className="nav__dropdown__link"
                >
                  Постійна комісія УМР
                </Link>
                <a
                  href="https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Форми освіти{" "}
                </a>
                <a
                  href="https://nure.ua/ru/faculty/fakultet-kompyuternyih-nauk"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Спеціальності{" "}
                </a>
                <a
                  href="https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Освітні програми{" "}
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1B91OGarzXYz8Inyn5AKPDTIa48Qs_duo"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Силлабуси дисциплин{" "}
                </a>
                <a
                  href="https://cist.nure.ua/ias/app/tt/f?p=778:2:4427815546178203"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Графіки навчального процесу{" "}
                </a>
                <a
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
                <Link to="/teacher" className="nav__dropdown__link">
                  Лабараторія
                </Link>
                <Link to="/directions" className="nav__dropdown__link">
                  Наукові напрями
                </Link>
                <Link to="/studentscience" className="nav__dropdown__link">
                  Студентська наука
                </Link>
                <Link to="/works" className="nav__dropdown__link">
                  Роботи студентів
                </Link>
                <Link to="/sections" className="nav__dropdown__link">
                  Гуртки кафедри
                </Link>
                <Link to="/offer" className="nav__dropdown__link">
                  Запропонувати тему
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              Абітурієнтам
              <div className="nav__dropdown">
                <Link to="/rules" className="nav__dropdown__link">
                  Правила вступу
                </Link>
                <Link to="/admissions" className="nav__dropdown__link">
                  Спеціальність
                </Link>
                <Link to="/advertising" className="nav__dropdown__link">
                  Наша реклама
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              Студентам
              <div className="nav__dropdown">
                <a
                  href="http://cist.kture.kharkov.ua/"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  Розклад
                </a>
                <Link to="/resources" className="nav__dropdown__link">
                  Ресурси
                </Link>
                <Link to="/student-life" className="nav__dropdown__link">
                  Студентське життя
                </Link>
                <Link to="/annotations" className="nav__dropdown__link">
                  Анотації дисциплін
                </Link>
                <Link to="/science-work" className="nav__dropdown__link">
                  Науково - дослід.робота
                </Link>
                <Link to="/student-choise" className="nav__dropdown__link">
                  Вибір студента
                </Link>
                <Link to="/diploma" className="nav__dropdown__link">
                  Дипломування
                </Link>
                <Link to="/discuss" className="nav__dropdown__link">
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
              {languages.map(lang => (
                <li className="lang-active" key={lang}>
                  <a
                    href="#"
                    className="lang-link"
                    onClick={e => {
                      e.preventDefault()
                      changeLanguage(lang)
                    }}
                  >
                    {lang}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

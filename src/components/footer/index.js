import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import "./footer.css"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons/faPhoneAlt"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <ul className="footer__item">
            <li className="footer__title"> Наші контакти </li>
            <li className="footer__link">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                size="lg"
                className="footer__image"
              />
              (057) 702 - 13 - 78
            </li>
            <li className="footer__link">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                size="lg"
                className="footer__image"
              />
              (057) 702 - 13 - 78
            </li>
            <li className="footer__link">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                className="footer__image"
              />
              d_mst @nure.ua
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title"> Про кафедру </li>
            <li className="footer__link">
              <Link language="ua" to="/teacher" className="footer__link">
                Склад кафедри
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/history" className="footer__link">
                Історія кафедри
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/graduates" className="footer__link">
                Наші випускники
              </Link>
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title"> Учбовий процес </li>
            <li className="footer__link">
              {" "}
              <Link language="ua" className="footer__link">
                Постійна комісія УМР
              </Link>{" "}
            </li>
            <li className="footer__link">
              {" "}
              <a
                language="ua"
                href="https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf"
                className="footer__link"
                target="_blank"
              >
                Форми освіти{" "}
              </a>{" "}
            </li>
            <li className="footer__link">
              <a
                language="ua"
                href="https://nure.ua/ru/faculty/fakultet-kompyuternyih-nauk"
                className="footer__link"
                target="_blank"
              >
                Спеціальності{" "}
              </a>{" "}
            </li>
            <li className="footer__link">
              {" "}
              <a
                language="ua"
                href="https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf"
                className="footer__link"
                target="_blank"
              >
                Освітні програми{" "}
              </a>{" "}
            </li>
            <li className="footer__link">
              {" "}
              <a
                language="ua"
                href="https://drive.google.com/drive/folders/1B91OGarzXYz8Inyn5AKPDTIa48Qs_duo"
                className="footer__link"
                target="_blank"
              >
                Силлабуси дисциплин{" "}
              </a>{" "}
            </li>
            <li className="footer__link">
              <a
                language="ua"
                href="https://cist.nure.ua/ias/app/tt/f?p=778:2:4427815546178203"
                className="footer__link"
                target="_blank"
              >
                Графіки навчального процесу{" "}
              </a>{" "}
            </li>
            <li className="footer__link">
              {" "}
              <a
                language="ua"
                href="https://nure.ua/department/kafedra-mediasistem-ta-tehnologiy-mst/vibirkovi-osvitni-komponenti-na-kafedri-mst"
                className="footer__link"
                target="_blank"
              >
                Обрання дисциплін студентом{" "}
              </a>{" "}
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title"> Наука </li>
            <li className="footer__link"> Лабараторія </li>
            <li className="footer__link">
              <Link language="ua" to="/directions " className="footer__link">
                Наукові напрями
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/studentscience" className="footer__link">
                Студентська наука
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/works" className="footer__link">
                Роботи студентів
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/sections" className="footer__link">
                Гуртки кафедри
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/offer/offer" className="footer__link">
                Запропонувати тему
              </Link>
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title"> Абітурієнтам </li>
            <li className="footer__link">
              <Link language="ua" to="/rules" className="footer__link">
                Правила вступу
              </Link>
            </li>
            <Link language="ua" to="/admissions" className="footer__link">
              Спеціальність
            </Link>
            <li className="footer__link"> Питання - відповідь </li>
            <li className="footer__link">
              <Link language="ua" to="/advertising" className="footer__link">
                Наша реклама
              </Link>
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title"> Студентам </li>
            <li className="footer__link">
              <Link
                language="ua"
                to="http://cist.kture.kharkov.ua/"
                className="footer__link"
              >
                Розклад
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/resources" className="footer__link">
                Ресурси
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/student-life" className="footer__link">
                Студентське життя
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/annotations" className="footer__link">
                Анотації дисциплін
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/science-work" className="footer__link">
                Науково дослідна робота
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/student-choise" className="footer__link">
                Вибір студента
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/diploma" className="footer__link">
                Дипломування
              </Link>
            </li>
            <li className="footer__link"> Практика </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title"> Партнери </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="footer__copyright__inner"> ©2021 Кафедра МСТ </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from "react"
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"
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
            <li className="footer__title">
              {" "}
              <Trans>Contacts</Trans>{" "}
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
            <li className="footer__title">
              {" "}
              <Trans>About the Department</Trans>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/teacher" className="footer__link">
                <Trans>The composition of the department</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/history" className="footer__link">
                <Trans>History of the department</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/graduates" className="footer__link">
                <Trans>Our graduates</Trans>
              </Link>
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">
              {" "}
              <Trans>Educational process</Trans>{" "}
            </li>
            <li className="footer__link">
              {" "}
              <Link language="ua" className="footer__link">
                <Trans>UMR Standing Committee</Trans>
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
                <Trans>Forms of education</Trans>{" "}
              </a>{" "}
            </li>
            <li className="footer__link">
              <a
                language="ua"
                href="https://nure.ua/ru/faculty/fakultet-kompyuternyih-nauk"
                className="footer__link"
                target="_blank"
              >
                <Trans>Specialties</Trans>{" "}
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
                <Trans>Educational programs</Trans>{" "}
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
                <Trans>Syllabus of disciplines</Trans>{" "}
              </a>{" "}
            </li>
            <li className="footer__link">
              <a
                language="ua"
                href="https://cist.nure.ua/ias/app/tt/f?p=778:2:4427815546178203"
                className="footer__link"
                target="_blank"
              >
                <Trans>Training schedules</Trans>{" "}
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
                <Trans>Election of disciplines by students</Trans>{" "}
              </a>{" "}
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">
              {" "}
              <Trans>Science</Trans>{" "}
            </li>
            <li className="footer__link">
              {" "}
              <Trans>Laboratory</Trans>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/directions " className="footer__link">
                <Trans>Scientific directions</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/studentscience" className="footer__link">
                <Trans>Student science</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/works" className="footer__link">
                <Trans>Students' works</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/sections" className="footer__link">
                <Trans>Circles of the department</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/offer/offer" className="footer__link">
                <Trans>Suggest a topic</Trans>
              </Link>
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">
              <Trans>Applicants</Trans>{" "}
            </li>
            <li className="footer__link">
              <Link language="ua" to="/rules" className="footer__link">
                <Trans>Admission rules</Trans>
              </Link>
            </li>
            <Link language="ua" to="/admissions" className="footer__link">
              <Trans>Specialty</Trans>
            </Link>
            <li className="footer__link">
              <Link language="ua" to="/advertising" className="footer__link">
                <Trans>Our advertising</Trans>
              </Link>
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">
              {" "}
              <Trans>Students</Trans>{" "}
            </li>
            <li className="footer__link">
              <Link
                language="ua"
                to="http://cist.kture.kharkov.ua/"
                className="footer__link"
              >
                <Trans>Schedule</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/resources" className="footer__link">
                <Trans>Resource</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/student-life" className="footer__link">
                <Trans>Students' life</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/annotations" className="footer__link">
                <Trans>Annotations of disciplines</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/science-work" className="footer__link">
                <Trans>Scientific - research work</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/student-choise" className="footer__link">
                <Trans>Student's choice</Trans>
              </Link>
            </li>
            <li className="footer__link">
              <Link language="ua" to="/diploma" className="footer__link">
                <Trans>Graduation</Trans>
              </Link>
            </li>
          </ul>
          <ul className="footer__item">
            <li className="footer__title">
              {" "}
              <Trans>Partners</Trans>{" "}
            </li>
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

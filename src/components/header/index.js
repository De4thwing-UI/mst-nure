import React from "react"
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import HeaderSm from "src/components/header-sm"
import BtnScrollUp from "src/components/BtnScrollUp"

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
              <Trans>About the Department</Trans>
              <div className="nav__dropdown">
                <Link to="/teacher" className="nav__dropdown__link">
                  <Trans>The composition of the department</Trans>
                </Link>
                <Link to="/history" className="nav__dropdown__link">
                  <Trans>History of the department</Trans>
                </Link>
                <Link to="/graduates" className="nav__dropdown__link">
                  <Trans>Our graduates</Trans>
                </Link>
                <a
                  href="https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  <Trans>Department Regulations</Trans>{" "}
                </a>
              </div>
            </a>
            <a href="#" className="nav__link">
              <Trans>Educational process</Trans>
              <div className="nav__dropdown">
                <a
                  href="https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  <Trans>Forms of education</Trans>{" "}
                </a>
                <a
                  href="https://nure.ua/ru/faculty/fakultet-kompyuternyih-nauk"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  <Trans>Specialties</Trans>{" "}
                </a>
                <a
                  href="https://nure.ua/wp-content/uploads/Main_Docs_NURE/polozhennja-pro-organizaciju-osvitnogo-procesu-v-hnure.pdf"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  <Trans>Educational programs</Trans>{" "}
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1j4qZY3MmX8KjUAk_K1aQIYte00c4IGva?usp=sharing"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  <Trans>Sylabus of disciplines</Trans>{" "}
                </a>
                <a
                  href="https://nure.ua/branch/navchalniy-viddil/informacijni-povidomlennja-navchalnogo-viddilu/grafiki-navchalnogo-procesu-2022-2023-n-r"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  <Trans>Training schedules</Trans>{" "}
                </a>{" "}
                <Link
                  to="/commission/commission"
                  className="nav__dropdown__link"
                >
                  <Trans>UMR Standing Committee</Trans>
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              <Trans>Science</Trans>
              <div className="nav__dropdown">
                <Link to="/directions" className="nav__dropdown__link">
                  <Trans>Scientific directions</Trans>
                </Link>
                <Link to="#" className="nav__dropdown__link">
                  <Trans>Scientific Conferences</Trans>
                </Link>
                <Link to="#" className="nav__dropdown__link">
                  <Trans>Scientific Journals</Trans>
                </Link>
                <Link to="/studentscience" className="nav__dropdown__link">
                  <Trans>Student science</Trans>
                </Link>

                <Link to="/sections" className="nav__dropdown__link">
                  <Trans>Circles of the department</Trans>
                </Link>
                <Link to="/offer" className="nav__dropdown__link">
                  <Trans>Suggest a topic</Trans>
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              <Trans>Applicants</Trans>
              <div className="nav__dropdown">
                <Link to="/rules" className="nav__dropdown__link">
                  <Trans>Admission rules</Trans>
                </Link>
                <Link to="/admissions" className="nav__dropdown__link">
                  <Trans>Specialty</Trans>
                </Link>
                <Link to="/advertising" className="nav__dropdown__link">
                  <Trans>Our advertising</Trans>
                </Link>
              </div>
            </a>
            <a href="#" className="nav__link">
              <Trans>Students</Trans>
              <div className="nav__dropdown">
                <a
                  href="http://cist.kture.kharkov.ua/"
                  className="nav__dropdown__link"
                  target="_blank"
                >
                  <Trans>Schedule</Trans>
                </a>
                <Link to="/resources" className="nav__dropdown__link">
                  <Trans>Resource</Trans>
                </Link>
                <Link to="/works" className="nav__dropdown__link">
                  <Trans>Students' works</Trans>
                </Link>
                <Link to="/student-life" className="nav__dropdown__link">
                  <Trans>Student`s life</Trans>
                </Link>
                <Link to="/annotations" className="nav__dropdown__link">
                  <Trans>Annotations of disciplines</Trans>
                </Link>
                <Link to="/science-work" className="nav__dropdown__link">
                  <Trans>Scientific - research work</Trans>
                </Link>
                <Link to="/student-choise" className="nav__dropdown__link">
                  <Trans>Student's choice</Trans>
                </Link>
                <Link to="/diploma" className="nav__dropdown__link">
                  <Trans>Graduation</Trans>
                </Link>
                <Link to="/discuss" className="nav__dropdown__link">
                  <Trans>Discussion of OP</Trans>
                </Link>
              </div>
            </a>
            <Link to="/partners" className="nav__link">
              <Trans>Partners</Trans>
            </Link>
            <Link to="/contact" className="nav__link">
              <Trans>Contacts</Trans>
            </Link>
            <a href="#" className="nav__link">
              <Trans>Quality Assurance in Education</Trans>
              <div className="nav__dropdown">
                <Link to="#" className="nav__dropdown__link">
                  <Trans>Project Teams</Trans>
                </Link>
                <Link to="#" className="nav__dropdown__link">
                  <Trans>Departmental Resource Provision</Trans>
                </Link>
                <Link to="#" className="nav__dropdown__link">
                  <Trans>Mutual Class Visits</Trans>
                </Link>
                <Link to="#" className="nav__dropdown__link">
                  <Trans>Academic Integrity</Trans>
                </Link>
                <Link to="#" className="nav__dropdown__link">
                  <Trans>Employer Surveys</Trans>
                </Link>
              </div>
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
          <BtnScrollUp />
        </div>
      </div>
    </header>
  )
}

export default Header

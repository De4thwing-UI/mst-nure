import React from "react"
import { graphql } from "gatsby"
import "./student-choise.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"

const StudentchoisePage = () => {
  return (
    <div>
      <Header />
      <Title> Вибір студента </Title>
      <div className="student-choise">
        <div className="container">
          <div className="student-choise__inner">
            <div className="student-choise__item">
              <h1 className="student-choise__item__title">
                Вступ до спеціальності
              </h1>
              <p className="student-choise__item__text"> теми рефератів </p>
            </div>
            <div className="student-choise__item">
              <h1 className="student-choise__item__title">
                Вступ до спеціальності
              </h1>
              <p className="student-choise__item__text">
                <a
                  href="https://drive.google.com/file/d/1DwZHlyR2IflsjCRXEyqzCYws4B0J2nKc/view"
                  target="_blank"
                >
                  питання до Тесту1
                </a>
              </p>
            </div>
          </div>
          <div className="student-choise__title"> Курсове проектування </div>
          <div className="student-choise__course"> 2 курс </div>
          <div className="student-choise__course__inner">
            <h1 className="student-choise__course__title">
              Художні основи проектування видань
            </h1>
            <p className="student-choise__course__tems">
              Вибір теми:
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                Навчально - методичне забезпечення
              </a>
            </p>
            <h1 className="student-choise__course__title">Технічна механіка</h1>
            <p className="student-choise__course__tems">
              Вибір теми:
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                Навчально - методичне забезпечення
              </a>
            </p>
          </div>
          <div className="student-choise__course"> 3 курс </div>
          <div className="student-choise__course__inner">
            <h1 className="student-choise__course__title">
              Технологія та обладнання друкарських та післядрукарських проектів
            </h1>
            <p className="student-choise__course__tems">
              Вибір теми:
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                Навчально - методичне забезпечення
              </a>
            </p>
            <h1 className="student-choise__course__title">Web - технології</h1>
            <p className="student-choise__course__tems">
              Вибір теми:
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                Навчально - методичне забезпечення
              </a>
            </p>
            <h1 className="student-choise__course__title">
              Технологія підготовки електронних видань
            </h1>
            <p className="student-choise__course__tems">
              Вибір теми:
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                Навчально - методичне забезпечення
              </a>
            </p>
          </div>
          <div className="student-choise__course"> 4 курс </div>
          <div className="student-choise__course__inner">
            <h1 className="student-choise__course__title">
              Технологія та обладнання друкарських та післядрукарських проектів
            </h1>
            <p className="student-choise__course__tems">
              Вибір теми:
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                Навчально - методичне забезпечення
              </a>
            </p>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default StudentchoisePage

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

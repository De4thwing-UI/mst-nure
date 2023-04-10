import React from "react"
import { graphql } from "gatsby"
import "./student-choise.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"

const StudentchoisePage = () => {
  return (
    <div>
      <Header />
      <Title>
        {" "}
        <Trans>Student's choice</Trans>{" "}
      </Title>
      <div className="student-choise">
        <div className="container">
          <div className="student-choise__inner">
            <div className="student-choise__item">
              <h1 className="student-choise__item__title">
                <Trans>Admission to a specialty</Trans>
              </h1>
              <p className="student-choise__item__text">
                {" "}
                <Trans>topics for term papers</Trans>{" "}
              </p>
            </div>
            <div className="student-choise__item">
              <h1 className="student-choise__item__title">
                <Trans>Admission to a specialty</Trans>
              </h1>
              <p className="student-choise__item__text">
                <a
                  href="https://drive.google.com/file/d/1DwZHlyR2IflsjCRXEyqzCYws4B0J2nKc/view"
                  target="_blank"
                >
                  <Trans>questions for Test 1.</Trans>
                </a>
              </p>
            </div>
          </div>
          <div className="student-choise__title">
            {" "}
            <Trans>Сourse project</Trans>{" "}
          </div>
          <div className="student-choise__course">
            {" "}
            <Trans>2 course</Trans>{" "}
          </div>
          <div className="student-choise__course__inner">
            <h1 className="student-choise__course__title">
              <Trans>Artistic principles of publication design.</Trans>
            </h1>
            <p className="student-choise__course__tems">
              <Trans>Choosing a topic:</Trans>
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                <Trans>Educational and methodological support.</Trans>
              </a>
            </p>
            <h1 className="student-choise__course__title">Технічна механіка</h1>
            <p className="student-choise__course__tems">
              <Trans>Choosing a topic:</Trans>
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                <Trans>Educational and methodological support.</Trans>
              </a>
            </p>
          </div>
          <div className="student-choise__course"> 3 курс </div>
          <div className="student-choise__course__inner">
            <h1 className="student-choise__course__title">
              <Trans>
                Printing and post-printing project technology and equipment
              </Trans>
            </h1>
            <p className="student-choise__course__tems">
              <Trans>Choosing a topic:</Trans>
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                <Trans>Educational and methodological support.</Trans>
              </a>
            </p>
            <h1 className="student-choise__course__title">
              <Trans>Web technologies</Trans>
            </h1>
            <p className="student-choise__course__tems">
              <Trans>Choosing a topic:</Trans>
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                <Trans>Educational and methodological support.</Trans>
              </a>
            </p>
            <h1 className="student-choise__course__title">
              <Trans>Technology of Electronic Publishing Preparation.</Trans>{" "}
            </h1>
            <p className="student-choise__course__tems">
              <Trans>Choosing a topic:</Trans>
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                <Trans>Educational and methodological support.</Trans>
              </a>
            </p>
          </div>
          <div className="student-choise__course"> 4 курс </div>
          <div className="student-choise__course__inner">
            <h1 className="student-choise__course__title">
              <Trans>
                Printing and post-printing project technology and equipment
              </Trans>
            </h1>
            <p className="student-choise__course__tems">
              <Trans>Choosing a topic:</Trans>
              <a
                href="https://catalogue.nure.ua/login"
                target="_blank"
                className="student-choise__link"
              >
                <Trans>Educational and methodological support.</Trans>
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

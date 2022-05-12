import React, { useState } from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Works from "src/components/works"
import Specialities from "src/components/specialities"
import Magistracy from "src/components/magistracy"
import Employment from "src/components/employment"

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Header /> {/* Intro */}{" "}
      <div className="intro">
        <div className="container">
          <div className="intro__inner">
            <StaticImage              src="../images/intro-bg-sm.svg"

              alt="intro_image-sm"
              className="intro__image-sm"
            />
            <h1 className="intro__title">
              Харківський національний університет радіоелектроніки{" "}
            </h1>{" "}
            <h2 className="intro__subtitle">
              Кафедра Медіасистеми та технології{" "}
            </h2>{" "}
            <h3 className="intro__text">
              Ми завжди готові допомогти Вам отримати максимум знань і умінь в
              нашій професійній сфері{" "}
            </h3>{" "}
          </div>{" "}
          <StaticImage
            src="../images/intro-bg.svg"
            alt="intro_image"
            className="intro__image"
          />
        </div>{" "}
      </div>{" "}
      {/* Features */}{" "}
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
                24 <p className="features__text"> Викладача </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/work.svg"
                alt="Teachers"
              />
              <div className="features__title">
                100 % <p className="features__text"> Працевлаштування </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/students.svg"
                alt="Teachers"
              />
              <div className="features__title">
                3000 + <p className="features__text"> Випускників </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* News */} <News /> {/* Specification */} <Specialities />{" "}
      {/* Magistracy */} <Magistracy /> {/* works */} <Works />{" "}
      {/* Employment */} <Employment />
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

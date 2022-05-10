import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./directions.css"
import Header from "src/components/header/header"
import Footer from "src/components/footer/footer"
import Button from "src/components/button/button"
import News from "src/components/lastnews/lastnews"
import Title from "src/components/title/title"
import Science from "src/components/science/science"
import Intro from "src/components/intro/intro"
import Tems from "src/components/tems/tems"
import Experiments from "src/components/experiments/experiments"
import Disertations from "src/components/disertations/disertations"

const DirectionsPage = () => {
  const budgets = [
    {
      title: "272-4",
      suptitle: "2013-2015 р.р.",
      text: "Інформаційні технології автоматизованої обробки зображень і відтворення кольору в відкритих поліграфічних системах.",
    },
    {
      title: "272-4",
      suptitle: "2013-2015 р.р.",
      text: "Інформаційні технології автоматизованої обробки зображень і відтворення кольору в відкритих поліграфічних системах",
    },
  ]

  return (
    <div>
      <Header />
      <Title>Наукові напрями</Title>
      <Science />
      <Intro />
      <div className="budget">
        <div className="container">
          <div className="budget__title">
            <h1 className="budget__title__text">Держбюджетна тематика</h1>
          </div>
          <div className="budget__inner">
            {budgets.map((budget, index) => (
              <div className="budget__item" key={index.toString()}>
                <div className="budget__item__title">
                  {budget.title}
                  <p className="budget__item__suptitle">{budget.suptitle}</p>
                </div>
                <div className="budget__item__text">{budget.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Tems />
      <Experiments />
      <Disertations />
      <News />
      <Footer />
    </div>
  )
}
export default DirectionsPage

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
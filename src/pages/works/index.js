import React, { useState } from "react"
import { graphql } from "gatsby"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Pagination from "src/components/pagination"
import Title from "src/components/title"
import "./works.css"
import { Trans, useTranslation } from "react-i18next"

const WorksPage = ({ data }) => {
  debugger
  const works = [
    {
      name: "Maryna Kononenko",
      position: "Business card",
    },
    {
      name: "Andrii Gordienko",
      position: "Poster",
    },
    {
      name: "Natalya Zmiivska",
      position: "Social poster",
    },
    {
      name: "Anton Gapich",
      position: "Illustration",
    },
    {
      name: "Tatyana Isayenko",
      position: "Illustration",
    },
    {
      name: "Anna Muzychuk",
      position: "Social poster",
    },
    {
      name: "Anton Gapich",
      position: "Mobile application",
    },
    {
      name: "Anton Gapich",
      position: "Website",
    },
    {
      name: "Maryna Kononenko",
      position: "Брендінг",
    },
    {
      name: "Maryna Kononenko",
      position: "Брендінг",
    },
    {
      name: "Maryna Kononenko",
      position: "Брендінг",
    },
    {
      name: "Maryna Kononenko",
      position: "Брендінг",
    },
    {
      name: "Maryna Kononenko",
      position: "Брендінг",
    },
    {
      name: "Maryna Kononenko",
      position: "Business card",
    },
    {
      name: "Andrii Gordienko",
      position: "Poster",
    },
    {
      name: "Natalya Zmiivska",
      position: "Social poster",
    },
    {
      name: "Maryna Kononenko",
      position: "Брендінг",
    },
    {
      name: "Ліценко Марія",
      position: "Брендінг",
    },
    {
      name: "Андрєєва Жанна",
      position: "Брендінг",
    },
    {
      name: "Natalya Zmiivska",
      position: "Social poster",
    },
    {
      name: "Natalya Zmiivska",
      position: "Social poster",
    },
    {
      name: "Natalya Zmiivska",
      position: "Social poster",
    },
    {
      name: "Natalya Zmiivska",
      position: "Social poster",
    },
  ].map(({ name, position }, index) => ({
    name,
    position,
    photo: data.allFile.edges[index].node.publicURL,
  }))

  const limit = 3
  const [displayWorks, setDisplayWorks] = useState(works.slice(0, limit))

  const handlePageChange = page => {
    const offset = limit * (page - 1)
    setDisplayWorks(works.slice(offset, offset + limit))
  }

  return (
    <div>
      <Header />
      <Title>
        <Trans>Students' works</Trans>
      </Title>
      <div className="works">
        <div className="container">
          <div className="graduates__works">
            <div className="container">
              <div className="graduates__works__inner">
                {works.map((work, index) => (
                  <div className="graduate__works__item" key={index.toString()}>
                    <img
                      src={work.photo}
                      alt="1"
                      className="graduate__works__image"
                    />
                    <h1 className="graduate__works__item__title">
                      <Trans>{work.name}</Trans>
                    </h1>
                    <div className="graduate__works__item__text">
                      <Trans>{work.position}</Trans>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Pagination
          items={displayWorks.length}
          handlePageChange={handlePageChange}
        />
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default WorksPage

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

    allFile(filter: { relativeDirectory: { eq: "works" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

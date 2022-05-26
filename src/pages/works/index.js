import React from "react"
import { graphql } from "gatsby"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Pagination from "src/components/pagination"
import Title from "src/components/title"
import "./works.css"

const WorksPage = ({ data }) => {
  const works = [
    {
      name: "Гапіч Антон",
      position: "Ілюстрація",
    },
    {
      name: "Ісаєнко Тетяна",
      position: "Ілюстрація",
    },
    {
      name: "Музичук Анна",
      position: "Соціальний плакат",
    },
    {
      name: "Гапіч Антон",
      position: "Мобільний додаток",
    },
    {
      name: "Тарас Степаненко",
      position: "Веб сайт",
    },
    {
      name: "Олександр Зінченко",
      position: "Веб сайт",
    },
    {
      name: "Георгій Бущан",
      position: "Веб сайт",
    },
    {
      name: "Андрій Ярмоленко",
      position: "Ілюстрація",
    },
    {
      name: "Дмитро Мельніченко",
      position: "3D Ілюстрація",
    },
  ].map(({ name, position }, index) => ({
    name,
    position,
    photo: data.allFile.edges[index].node.publicURL,
  }))

  return (
    <div>
      <Header />
      <Title> Роботи студентів </Title>
      <div className="works">
        <div className="container"> </div>
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
                  <h1 className="graduate__works__item__title">{work.name}</h1>
                  <div className="graduate__works__item__text">
                    {work.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination />
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

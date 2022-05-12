import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./studentscience.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import Studentscience from "src/components/student_science"
import Research from "src/components/research"
import Conferences from "src/components/conferences"

const StudentsciencePage = () => {
  return (
    <div>
      <Header />
      <Title> Студентська наука </Title>
      <div className="sudentscience">
        <Studentscience />
        <Research />
        <div className="measures">
          <div className="container">
            <div className="measures__inner">
              <StaticImage
                className="measures__image"
                src="../../images/studenscience/1.png"
                alt="intro"
              />
              <div className="measures__title">
                <h1 className="measures__text">
                  Наші студенти щорічно беруть участь в таких студентських
                  науково - практичних заходах
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Conferences />
      <News />
      <Footer />
    </div>
  )
}

export default StudentsciencePage

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

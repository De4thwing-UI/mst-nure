import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./studentscience.css"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import News from "../../components/lastnews/lastnews"
import Title from "../../components/title/title"
import Studentscience from "../../components/student_science/student_science"
import Research from "../../components/research/research"
import Conferences from "../../components/conferences/conferences"

const StudentsciencePage = () => {
  return (
    <div>
      <Header />
      <Title>Студентська наука</Title>
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
                  науково-практичних заходах
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

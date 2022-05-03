import React from "react"
import { graphql, Link } from "gatsby"
import "./admissions.css"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import News from "../../components/lastnews/lastnews"
import Title from "../../components/title/title"
import Specialty from "../../components/specialty/specialty"
import Faq from "../../components/faq/faq"


const AdmissionsPage = () => {
  return (
    <div>
      <Header />
      <Title>Спеціальність</Title>
      <Specialty />
      <Faq />
      <News />
      <Footer />
    </div>
  )
}

export default AdmissionsPage

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
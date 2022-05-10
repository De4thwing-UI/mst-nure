import React from "react"
import { graphql, Link } from "gatsby"
import "./admissions.css"
import Header from "src/components/header/header"
import Footer from "src/components/footer/footer"
import News from "src/components/lastnews/lastnews"
import Title from "src/components/title/title"
import Specialty from "src/components/specialty/specialty"
import Faq from "src/components/faq/faq"

const AdmissionsPage = () => {
  return (
    <div>
      <Header />
      <Title> Спеціальність </Title> <Specialty />
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

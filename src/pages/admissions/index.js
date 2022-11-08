import React from "react"
import { graphql } from "gatsby"
import "./admissions.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import Specialty from "src/components/specialty"
import Faq from "src/components/faq"
import { Trans } from "react-i18next"

const AdmissionsPage = () => {
  return (
    <div>
      <Header />
      <Title><Trans>Specialty</Trans></Title> 
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

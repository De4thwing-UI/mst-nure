import React from "react"
import { graphql } from "gatsby"
import "./advertising.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
const AdvertisingPage = () => {
  return (
    <div>
      <Header />
      <Title>Наша реклама</Title>
      <div className="advertising">
        <div className="container"></div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default AdvertisingPage

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

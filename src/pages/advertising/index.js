import React from "react"
import { graphql } from "gatsby"
import "./advertising.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"
const AdvertisingPage = () => {
  const advertisings = [
    {
      link: "https://www.youtube.com/embed/SO8ZLsSg-eA",
    },
    {
      link: "https://www.youtube.com/embed/nYLdRFXBnDc",
    },
    {
      link: "https://www.youtube.com/embed/emft9kIoRJQ",
    },
  ]
  return (
    <div>
      <Header />
      <Title>
        <Trans>Our advertising</Trans>
      </Title>
      <div className="advertising">
        <div className="container">
          <div className="advertising__inner">
            {advertisings.map((advertising, index) => (
              <div className="advertising__item" key={index.toString()}>
                <iframe
                  controls
                  preload="none"
                  poster="1.png"
                  width="630"
                  height="352"
                  src={advertising.link}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="advertising__video"
                  data-layer="4"
                  tabindex="-1"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
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

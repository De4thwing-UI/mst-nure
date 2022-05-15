import React from "react"
import { graphql } from "gatsby"
import "./advertising.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
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
      <Title>Наша реклама</Title>
      <div className="advertising">
        <div className="container">
          <div className="advertising__inner">
            {advertisings.map((advertising, index) => (
              <div className="advertising__item" key={index.toString()}>
                <iframe
                  width="630"
                  height="352"
                  src={advertising.link}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="advertising__video"
                  
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

import React from "react"
import { graphql } from "gatsby"
import "./resources.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"

const ResourcesPage = () => {
  return (
    <div>
      <Header />
      <Title>
        {" "}
        <Trans>Resource</Trans>{" "}
      </Title>
      <div className="resources">
        <div className="container">
          <div className="resources__title">
            <Trans>
              By clicking on the link, you will be able to find useful
              information and scientific sources related to the printing
              industry.
            </Trans>
          </div>
          <div className="resources__inner">
            <ul className="resources__list">
              <li className="resources__list__item">
                <a
                  href="http://www.ukrbook.net/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>National Library of Ukraine</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://drukarstvo.org.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>Printing</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://bukvoid.com.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>Bukvoid</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://polykur.com.ua/doska/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>Printing courier</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="https://printus.com.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>Print with us</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://www.uapp.org/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>
                    Ukrainian Association of Publishers of Periodical Press
                  </Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://www.redactor.in.ua/"
                  className="resources__link"
                >
                  <Trans>Editorial portal</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="https://www.publish.ru/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>PUBLISH / DESIGN.LAYOUT.PRINT</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://www.compuart.ru/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>CompuArt</Trans>
                </a>
              </li>
            </ul>
            <ul className="resources__list">
              <li className="resources__list__item">
                <a
                  href="https://www.dejurka.ru/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>Watch Duty</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://www.gipp.ru/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>Guild of Publishers of Periodical Press</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="https://mediamedia.me/"
                  className="resources__link"
                  target="_blank"
                >
                  Media - Media
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://www.rup.com.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>
                    Website about Printing and Advertising in Ukraine
                  </Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="https://pechatnick.com/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>PECHATNIK.com</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://www.upba.org.ua/index.php/uk/"
                  className="resources__link"
                >
                  <Trans>
                    Ukrainian Association of Publishers and Book Distributors
                  </Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="https://www.ranok.com.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>LLC Publishing House 'Ranok'</Trans>
                </a>
              </li>
              <li className="resources__list__item">
                <a
                  href="http://unisoft.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  <Trans>Sole Proprietorship 'Unisoft</Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default ResourcesPage

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

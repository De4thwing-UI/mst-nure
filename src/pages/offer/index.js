import React from "react"
import { graphql } from "gatsby"
import "./offer.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import Button from "src/components/button"
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Trans } from "react-i18next"

const OfferPage = () => {
  return (
    <div>
      <Header />
      <Title><Trans>Suggest a topic</Trans></Title>
      <div className="offer">
        <div className="container">
          <div className="offer__inner">
            <div className="offer__text">
              <h1 className="offer__title">
                <Trans>
                  We hope for fruitful cooperation! We are waiting for your
                  applications.
                </Trans>
              </h1>
              <p className="offer__suptitle">
                <Trans>
                  Dear managers of printing, publishing, advertising
                  enterprises, firms, organizations! The department opens a page
                  for forming applications with enterprises - customers of
                  printing and publishing products.
                </Trans>
              </p>
            </div>
            <form className="offer__form">
              <label className="form__project-name">
                <span className="form__text"><Trans>Project name</Trans></span>
                <input className="form__input" type="text" />
              </label>
              <label className="form__project-name">
                <span className="form__text"> <Trans>Customer</Trans> </span>
                <input className="form__input" type="text" />
              </label>
              <label className="form__project-name">
                <span className="form__text"> <Trans>Contact person's phone number</Trans> </span>
                <input className="form__input" type="text" id="" />
              </label>
              <label className="form__project-name">
                <span className="form__text"> <Trans>E-mail of the contact person</Trans> </span>
                <input className="form__input" type="text" />
              </label>
              <label className="form__project-name">
                <span className="form__text"> <Trans>Description of the project</Trans>  </span>
                <textarea className="form__text-area" type="text" />
              </label>
              <div className="form__submit">
                <Button className="offer__button"><Trans>Send</Trans></Button>
                <label className="form__atach">
                  <FontAwesomeIcon
                    icon={faLink}
                    size="lg"
                    className="atach__icon"
                  />
                  <Trans>Attach a file</Trans>
                  <input className="form__atach__button" type="file" />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default OfferPage

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

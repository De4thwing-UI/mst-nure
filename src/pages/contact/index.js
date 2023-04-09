import React from "react"
import { graphql } from "gatsby"
import "./contact.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"
const ContactPage = () => {
  return (
    <div>
      <Header />
      <Title>
        <Trans>Contacts</Trans>
      </Title>
      <div className="contacts">
        <div className="container">
          <div className="contact__title">
            <Trans>Contacts</Trans>
          </div>
          <div className="contact__inner">
            <p className="contact__text">
              <Trans>
                Address: Science Ave, 14, Building 'I', 5 th floor, Room 507,
                Kharkiv, Ukraine, 61166
              </Trans>
            </p>
            <p className="contact__text">
              <Trans>Phone: (+38 057) 702-13-78</Trans>
            </p>
            <p className="contact__text">Email: d_mst@nure.ua</p>
            <p className="contact__text">
              <Trans>
                Official website of Kharkiv National University of Radio
                Electronics (KhNURE) is
              </Trans>
              <a
                href="https://www.facebook.com/nureKharkiv/"
                className="contact__link"
                target="_blank"
              >
                facebook
              </a>
            </p>
            <p className="contact__text">
              <Trans>
                Official website of Kharkiv National University of Radio
                Electronics (KhNURE) is
              </Trans>
              <a
                href="https://t.me/nure_press"
                className="contact__link"
                target="_blank"
              >
                telegram
              </a>
            </p>
            <p className="contact__text">
              <Trans>
                Official website of Kharkiv National University of Radio
                Electronics (KhNURE) is
              </Trans>
              <a
                href="https://t.me/nure_press"
                className="contact__link"
                target="_blank"
              >
                YouTube
              </a>
            </p>
            <p className="contact__text">
              <Trans>Department of Translation and Interpreting</Trans>
              <a
                href="https://www.instagram.com/mst_nure_ua/"
                className="contact__link"
                target="_blank"
              >
                Instagram
              </a>
            </p>
            <p className="contact__text">
              <Trans>
                Official website of Kharkiv National University of Radio
                Electronics (KhNURE) is
              </Trans>
              <a
                href="https://www.facebook.com/groups/635508543937648/?ref=share"
                className="contact__link"
                target="_blank"
              >
                facebook
              </a>
            </p>
          </div>
          <div className="contact__title">
            <Trans>Contacts</Trans>
          </div>
          <div className="contact__inner">
            <ul className="contact__list">
              <li className="contact__list__item">
                <span className="contact__item__text">
                  <Trans>Admissions Committee: +38 (057) 702-17-20</Trans>
                </span>
              </li>
              <li className="contact__list__item">
                <span className="contact__item__text">
                  <Trans>
                    Postgraduate Education Center: +38 (057) 702-18-05
                  </Trans>
                </span>
              </li>
              <li className="contact__list__item">
                <span className="contact__item__text">
                  <Trans>Distance Learning Center: +38 (057) 702-14-75</Trans>
                </span>
              </li>
              <li className="contact__list__item">
                <span className="contact__item__text">
                  <Trans>
                    Preparatory Center for Pre-University Training: +38 (057)
                    702-14-55
                  </Trans>
                </span>
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

export default ContactPage

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

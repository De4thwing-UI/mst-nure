import React from "react"
import { graphql } from "gatsby"
import "./contact.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
const ContactPage = () => {
  return (
    <div>
      <Header />
      <Title>Контакти</Title>
      <div className="contacts">
        <div className="container">
          <div className="contact__title">Наші контакти</div>
          <div className="contact__inner">
            <p className="contact__text">
              Адреса: пр. Науки, 14, корпус "І", 5 поверх, кабінет 507, Харків,
              Україна, 61166
            </p>
            <p className="contact__text">Тел.: (+38 057) 702-13-78</p>
            <p className="contact__text">Email: d_mst@nure.ua</p>
            <p className="contact__text">
              Офіційна сторінка ХНУРЕ в
              <a
                href="https://www.facebook.com/nureKharkiv/"
                className="contact__link"
                target="_blank"
              >
                facebook
              </a>
            </p>
            <p className="contact__text">
              
              Офіційна сторінка ХНУРЕ в
              <a
                href="https://t.me/nure_press"
                className="contact__link"
                target="_blank"
              >
                telegram
              </a>
            </p>
            <p className="contact__text">
              
              Офіційна сторінка ХНУРЕ в
              <a
                href="https://t.me/nure_press"
                className="contact__link"
                target="_blank"
              >
                YouTube
              </a>
            </p>
            <p className="contact__text">
              
              Сторінка кафедри МСТ в
              <a
                href="https://www.instagram.com/mst_nure_ua/"
                className="contact__link"
                target="_blank"
              >
                Instagram
              </a>
            </p>
            <p className="contact__text">
              
              Офіційна сторінка ХНУРЕ в
              <a
                href="https://www.facebook.com/groups/635508543937648/?ref=share"
                className="contact__link"
                target="_blank"
              >
                facebook
              </a>
            </p>
          </div>
          <div className="contact__title">Наші контакти</div>
          <div className="contact__inner">
            <ul className="contact__list">
              <li className="contact__list__item">
                <span className="contact__item__text">
                  Приймальна комісія: +38 (057) 702-17-20
                </span>
              </li>
              <li className="contact__list__item">
                <span className="contact__item__text">
                  Центр післядипломної освіти: +38 (057) 702-18-05
                </span>
              </li>
              <li className="contact__list__item">
                <span className="contact__item__text">
                  Центр заочної форми навчання: +38 (057) 702-14-75
                </span>
              </li>
              <li className="contact__list__item">
                <span className="contact__item__text">
                  Центр довузівської підготовки: +38 (057) 702-14-55
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

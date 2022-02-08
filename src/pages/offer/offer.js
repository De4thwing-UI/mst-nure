import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./offer.css"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import News from "../../components/lastnews/lastnews"
import Title from "../../components/title/title"
import Button from "../../components/button/button"
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const OfferPage = () => {
  return (
    <div>
      <Header />
      <Title>Запропонувати тему</Title>
      <div className="offer">
        <div className="container">
          <div className="offer__inner">
            <div className="offer__text">
              <h1 className="offer__title">
                Сподіваємося на плідну співпрацю! Чекаємо Ваших заявок.
              </h1>
              <p className="offer__suptitle">
                Шановні керівники поліграфічних, видавничих, рекламних
                підприємств, фірм, організацій! Кафедра відкриває сторінку
                формування заявок з підприємствами-замовниками поліграфічної та
                видавничої продукції.
              </p>
            </div>
            <form className="offer__form">
              <label className="form__project-name">
                <span className="form__text">Назва проекту</span>
                <input className="form__input" type="text" />
              </label>
              <label className="form__project-name">
                <span className="form__text">Підприємство замовник</span>
                <input className="form__input" type="text" />
              </label>
              <label className="form__project-name">
                <span className="form__text">Телефон контактної особи</span>
                <input className="form__input" type="text" id="" />
              </label>
              <label className="form__project-name">
                <span className="form__text">E-mail контактної особи</span>
                <input className="form__input" type="text" />
              </label>
              <label className="form__project-name">
                <span className="form__text">Опис проекту</span>
                <textarea className="form__text-area" type="text" />
              </label>
              <div className="form__submit">
                <Button className="offer__button">Надіслати</Button>
                <label className="form__atach">
                  <FontAwesomeIcon icon={faLink} size="lg"  className="atach__icon"/>
                  Прикріпити файл
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

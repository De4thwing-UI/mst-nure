import React from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import "./news_item.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"

const NewsItemPage = () => {
  return (
    <div>
      <Header />
      <div className="news__intro">
        <div className="container">
          <div className="news__intro__title">
            <p className="news__date"> Середа, 10 листопада 2021, 11: 54 </p>{" "}
            <h1 className="news__intro__suptitle">
              Перші результати роботи“ Школи дизайну”{" "}
            </h1>{" "}
            <p className="news__intro__text">
              У жовтні студентське телебачення та кафедра МСТ запустили "Школу
              Дизайну ", що веде студентка 3 курсу кафедри МСТ та провідний
              дизайнер Медіацентру ХНУРЕ Марія Глюза.{" "}
            </p>{" "}
          </div>{" "}
          <StaticImage
            src="../../images/news_item/1.png"
            alt="News"
            className="news__item__picture"
          ></StaticImage>{" "}
        </div>{" "}
      </div>{" "}
      <div className="news__item__inner">
        <div className="container">
          <div className="news__inner__title"> Про“ Школу дизайну” </div>{" "}
          <div className="news__inner__text">
            <p>
              На заняттях слухачі вчаться створювати власні дизайнерські
              проєкти: логотипи, брендбуки, торгові знаки, плакати.Студенти
              спеціальності 186 Видавництво та поліграфія й інших спеціальностей
              нашого університету розробляють бріфи та прописують завдання,
              уточнюють майбутні етапи роботи та розбирають можливі технічні
              нюанси для того, щоб швидко створити загальний, зрозумілий усім
              сторонам контекст, бути на одній хвилі у проєкті з усіма
              учасниками і даже замовником.{" "}
            </p>{" "}
          </div>{" "}
          <div className="news__inner__suptitle"> Було створено 25 робіт </div>{" "}
          <div className="news__inner__text">
            <p>
              Ось вже перші результати!Вони не досконалі, але це перші кроки до
              майбутньої професії.{" "}
            </p>{" "}
          </div>{" "}
          <div className="news__image__group">
            <StaticImage
              src="../../images/news_item/2.png"
              alt="News"
              className="news__group__large__picture"
            ></StaticImage>{" "}
            <StaticImage
              src="../../images/news_item/3.png"
              alt="News"
              className="news__group__picture"
            ></StaticImage>{" "}
            <StaticImage
              src="../../images/news_item/4.png"
              alt="News"
              className="news__group__picture"
            ></StaticImage>{" "}
          </div>{" "}
          <div className="news__inner__title"> Висновки з занять </div>{" "}
          <div className="news__inner__text">
            <p>
              На заняттях слухачі вчаться створювати власні дизайнерські
              проєкти: логотипи, брендбуки, торгові знаки, плакати.Студенти
              спеціальності 186 Видавництво та поліграфія й інших спеціальностей
              нашого університету розробляють бріфи та прописують завдання,
              уточнюють майбутні етапи роботи та розбирають можливі технічні
              нюанси для того, щоб швидко створити загальний, зрозумілий усім
              сторонам контекст, бути на одній хвилі у проєкті з усіма
              учасниками і даже замовником.{" "}
            </p>{" "}
          </div>{" "}
          <ul className="news__list">
            <li>
              <p> Nullam mi pretium sed curabitur tortor nisi. </p>{" "}
            </li>{" "}
            <li>
              <p>
                Neque volutpat eget neque odio eleifend in .Lacus, arcu euismod
                vestibulum non varius sem proin.{" "}
              </p>{" "}
            </li>{" "}
            <li>
              <p>
                Vitae ut vitae non posuere ac.Nisi varius sagittis nulla iaculis
                leo nisl id turpis egestas.{" "}
              </p>{" "}
            </li>{" "}
          </ul>{" "}
          <div className="news__inner__text">
            <p>
              Sodales sollicitudin cursus ipsum volutpat in neque.In odio neque
              proin quam ornare dignissim mattis.Semper felis pellentesque duis
              arcu.Mauris vulputate vitae sit placerat magna.Purus elit praesent
              at diam amet lacus vel morbi non.Tortor neque tellus eget maecenas
              sodales vehicula.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <News />
      <Footer />
    </div>
  )
}

export default NewsItemPage

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

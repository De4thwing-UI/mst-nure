import React from "react"
import { graphql, Link } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import "./news.css"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Title from "../../components/title/title"
const NewsPage = () => {
  return (
    <div>
      <Header />
      <Title>Новини</Title>
      <div className="news__page">
        <div className="container">
          <div className="news__page__inner">
            <div className="news__item">
              <StaticImage
                src="../../images/News/news_image1.png"
                alt="News"
                className="news__image"
              />
              <h1 className="news__item__title">
                1 березня відбувся день відкритих дверей
              </h1>
              <div className="news__item__text">
                1 березня, перший день весни! Завершальний у цьому навчальному
                році День відкритих дверей зібрав величезну кількість
                абітурієнтів та гостей...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
            <div className="news__item">
              <StaticImage
                src="../../images/News/news_image2.png"
                alt="News"
                className="news__image"
              />
              <h1 className="news__item__title">
                Церемонія вручення дипломів магістрам...
              </h1>
              <div className="news__item__text">
                20 січня відбулася церемонія вручення дипломів магістрам, які
                завершили навчання за спеціальністю 186 «Видавництво та
                поліграфія»...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
            <div className="news__item">
              <StaticImage
                src="../../images/News/news_image4.png"
                alt="News"
                className="news__image"
              />
              <h1 className="news__item__title">
                День відкритих дверей 01.03.2020
              </h1>
              <div className="news__item__text">
                1 березня 2020р. Харківський національний університет
                радіоелектроніки та кафедра МСТ запрошує прийняти участь у
                Дні...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
            <div className="news__item">
              <StaticImage
                src="../../images/News/news_image5.png"
                alt="News"
                className="news__image"
              />
              <h1 className="news__item__title">
                ХНУРЕ проводить всеукраїнську олімпіаду
              </h1>
              <div className="news__item__text">
                1 березня, перший день весни! Завершальний у цьому навчальному
                році День відкритих дверей зібрав величезну кількість
                абітурієнтів та гостей...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <Link language="ua" to="/news_item/news_item">
                  Дізнатись більше
                </Link>
              </div>
            </div>
            <div className="news__item">
              <StaticImage
                src="../../images/News/news_image6.png"
                alt="News"
                className="news__image"
              />
              <h1 className="news__item__title">
                Перші результати роботи “Школи дизайну”
              </h1>
              <div className="news__item__text">
                У жовтні студентське телебачення та кафедра МСТ запустили "Школу
                Дизайну", що веде студентка 3 курсу кафедри МСТ та провідний
                дизайнер Медіацентру...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <Link language="ua" to="/news_item/news_item">
                  Дізнатись більше
                </Link>
              </div>
            </div>
            <div className="news__item">
              <StaticImage
                src="../../images/News/news_image7.png"
                alt="News"
                className="news__image"
              />
              <h1 className="news__item__title">
                Успішно завершено захист магістерських робіт
              </h1>
              <div className="news__item__text">
                14 вересня в конференц-залі відбувся захист докторської
                дисертації кандидата технічних наук, доцента кафедри МСТ Ігоря
                Вікторовича Левикіна
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
            <div className="news__item">
              <StaticImage
                src="../../images/News/news_image8.png"
                alt="News"
                className="news__image"
              />
              <h1 className="news__item__title">
                Вітаємо першокурсників зі вступом до ХНУРЕ
              </h1>
              <div className="news__item__text">
                Бажаємо впевнено прокладати шлях до обраної професії і сміливо
                отримувати все нові і важливі знання, щоб в подальшому стати
                відмінними фахівцями - асами...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
            <div className="news__item">
              <StaticImage
                src="../../images/News/news_image3.png"
                alt="News"
                className="news__image"
              />
              <h1 className="news__item__title">
                1 березня відбувся день відкритих дверей
              </h1>
              <div className="news__item__text">
                1 березня, перший день весни! Завершальний у цьому навчальному
                році День відкритих дверей зібрав величезну кількість
                абітурієнтів та гостей...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
            <div className="news__item">
              <StaticImage
                src="../../images/News/news_image2.png"
                alt="News"
                className="news__image"
              />
              <h1 className="news__item__title">
                1 березня відбувся день відкритих дверей
              </h1>
              <div className="news__item__text">
                1 березня, перший день весни! Завершальний у цьому навчальному
                році День відкритих дверей зібрав величезну кількість
                абітурієнтів та гостей...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
          </div>
          <div className="pagination">
            <a href="#">&lt;</a>
            <a className="pagination__active" href="#">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#">9</a>
            <a href="#">&gt;</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NewsPage

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

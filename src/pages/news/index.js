import React, { useState } from "react"
import { graphql } from "gatsby"
import "./news.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import Title from "src/components/title"
import Pagination from "src/components/pagination"
import NewsImageOne from "src/images/news/news_image1.png"
import NewsImageTwo from "src/images/news/news_image2.png"
import NewsImageThree from "src/images/news/news_image3.png"
import NewsImageFour from "src/images/news/news_image4.png"
import NewsImageFive from "src/images/news/news_image6.png"
import NewsImageSix from "src/images/news/news_image5.png"
import NewsImageSeven from "src/images/news/news_image7.png"
import NewsImageEight from "src/images/news/news_image8.png"

const NewsPage = () => {
  const newses = [
    {
      photo: NewsImageOne,
      title: "1 березня відбувся день відкритих дверей",
      text: "1 березня, перший день весни! Завершальний у цьому навчальному році День відкритих дверей зібрав величезну кількість абітурієнтів та гостей...",
      link: "#",
    },
    {
      photo: NewsImageTwo,
      title: "Церемонія вручення дипломів магістрам...",
      text: "20 січня відбулася церемонія вручення дипломів магістрам, які завершили навчання за спеціальністю 186 «Видавництво та поліграфія»...",
      link: "#",
    },
    {
      photo: NewsImageThree,
      title: "День відкритих дверей 01.03.2020",
      text: "1 березня 2020р. Харківський національний університет радіоелектроніки та кафедра МСТ запрошує прийняти участь у Дні...",
      link: "#",
    },
    {
      photo: NewsImageFour,
      title: "ХНУРЕ проводить всеукраїнську олімпіаду",
      text: "1 березня, перший день весни! Завершальний у цьому навчальному році День відкритих дверей зібрав величезну кількість абітурієнтів та гостей...",
      link: "#",
    },
    {
      photo: NewsImageFive,
      title: "Перші результати роботи “Школи дизайну”",
      text: "У жовтні студентське телебачення та кафедра МСТ запустили 'Школу Дизайну', що веде студентка   3 курсу кафедри МСТ та провідний дизайнер Медіацентру...",
      link: "/news_item",
    },
    {
      photo: NewsImageSeven,
      title: "Успішно завершено захист магістерських робіт",
      text: "14 вересня в конференц-залі відбувся захист докторської дисертації кандидата технічних наук, доцента кафедри МСТ Ігоря Вікторовича Левикіна",
      link: "#",
    },
    {
      photo: NewsImageEight,
      title: "Вітаємо першокурсників зі вступом до ХНУРЕ",
      text: "Бажаємо впевнено прокладати шлях до обраної професії і сміливо отримувати все нові і важливі знання, щоб в подальшому стати відмінними фахівцями - асами...",
      link: "#",
    },
    {
      photo: NewsImageOne,
      title: "1 березня відбувся день відкритих дверей",
      text: "1 березня, перший день весни! Завершальний у цьому навчальному році День відкритих дверей зібрав величезну кількість абітурієнтів та гостей...",
      link: "#",
    },
    {
      photo: NewsImageTwo,
      title: "1 березня відбувся день відкритих дверей",
      text: "1 березня, перший день весни! Завершальний у цьому навчальному році День відкритих дверей зібрав величезну кількість абітурієнтів та гостей...",
      link: "#",
    },
  ]

  const limit = 3
  const [displayItems, setDisplayItems] = useState(newses.slice(0, limit))

  const handlePageChange = page => {
    const offset = limit * (page - 1)
    setDisplayItems(newses.slice(offset, offset + limit))
  } 
  return (
    <div>
      <Header />
      <Title> Новини кафедри </Title>{" "}
      <div className="news__page">
        <div className="container">
          <div className="news__page__inner">
            {newses.map((news, index) => (
              <div className="news__item" key={index.toString()}>
                <img src={news.photo} alt="News" className="news__image" />
                <h1 className="news__item__title">{news.title} </h1>{" "}
                <div className="news__item__text">{news.text}</div>{" "}
                <div className="news__border"> &emsp; </div>{" "}
                <div className="news__item__link">
                  <a href={news.link}> Дізнатись більше </a>{" "}
                </div>{" "}
              </div>
            ))}
          </div>{" "}
          <Pagination
            items={displayItems.length}
            handlePageChange={handlePageChange}
          />
        </div>{" "}
      </div>{" "}
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

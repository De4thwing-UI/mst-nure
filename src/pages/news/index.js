import React, { useState } from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
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
import NewsImageNine from "src/images/news/news_image11.png"
import NewsImageTen from "src/images/news/news_image12.png"
import NewsImageEleven from "src/images/news/news_image13.png"
import NewsImageTwelve from "src/images/news/news_image14.png"
import NewsImageThirteen from "src/images/news/news_image15.png"
import NewsImageFourteen from "src/images/news/news_image16.png"
import NewsImageFifteen from "src/images/news/news_image17.png"
import NewsImageSixteen from "src/images/news/news_image18.png"

const NewsPage = () => {
  const newses = [
    {
      photo: NewsImageNine,
      title: "Meeting with the PC of NURE",
      text: "Are you already in the process of writing your bachelor's thesis? Do you want to continue your education in the top-ranked university?",
      link: "http://mst.nure.ua/index.php/novini/667-zustrich-z-pk-khnure-magistratura",
    },
    {
      photo: NewsImageTen,
      title: "Meeting with the PC of NURE Bachelor's Program",
      text: "This is such an important stage in your life - applying to your dream university - and there is so little time left. We understand how difficult and challenging it can be, so we are here to help you.",
      link: "http://mst.nure.ua/index.php/novini/666-zustrich-z-pk-khnure-bakalavr",
    },
    {
      photo: NewsImageEleven,
      title: "Hotline of NURE",
      text: "Every year, the admission campaign raises numerous questions among our applicants. We understand you perfectly well, so we strive to provide comprehensive assistance.",
      link: "http://mst.nure.ua/index.php/novini/665-garyacha-liniya-pk-khnure",
    },
    {
      photo: NewsImageTwelve,
      title: "Congratulations to our winners.",
      text: "The winners of the 8th Kharkiv Student Advertising Festival have already been announced. And as always, students from our department have become winners in various categories.",
      link: "http://mst.nure.ua/index.php/novini/670-vitaemo-nashikh-peremozhtsiv",
    },
    {
      photo: NewsImageThirteen,
      title: "The week of acquaintance with Khnure 2023",
      text: "NURE has some very important news for prospective students. We want to help everyone understand all the details of the available programs at Kharkiv National University of Radio Electronics.",
      link: "http://mst.nure.ua/index.php/novini/669-tizhden-znajomstva-z-khnure-2023",
    },
    {
      photo: NewsImageFourteen,
      title: "Results of the XXVII Youth Forum...",
      text: "From May 10th to May 12th, the XXVII International Youth Forum 'Radio Electronics and Youth in the 21st Century' took place at our university.",
      link: "http://mst.nure.ua/index.php/novini/668-pidsumki-khkhvii-molodizhnogo-forumu-radioelektronika-i-molod-u-khkhi-stolitti",
    },
    {
      photo: NewsImageFourteen,
      title: "Results of the XXVII Youth Forum...",
      text: "From May 10th to May 12th, the XXVII International Youth Forum 'Radio Electronics and Youth in the 21st Century' took place at our university.",
      link: "http://mst.nure.ua/index.php/novini/668-pidsumki-khkhvii-molodizhnogo-forumu-radioelektronika-i-molod-u-khkhi-stolitti",
    },
    {
      photo: NewsImageFifteen,
      title: "Kharkiv IT Cluster invites students to join us.",
      text: "The interaction between the university and the IT Cluster team is not only an opportunity to communicate with professionals but also a great help in acquiring new knowledge.",
      link: "http://mst.nure.ua/index.php/novini/664-karkiv-it-cluster-zaproshue-studentiv",
    },
    {
      photo: NewsImageSixteen,
      title: "IT Holidays with NURE",
      text: "The world of IT truly impresses with the multitude of directions and spheres for your future activity. There is plenty of room to thrive! That's why we want your spring break to be filled with incredible...",
      link: "http://mst.nure.ua/index.php/novini/663-it-kanikuli-z-khnure-2023",
    },
    {
      photo: NewsImageThree,
      title: "1 березня відбувся день відкритих дверей",
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
                <h1 className="news__item__title">
                  <Trans>{news.title}</Trans>
                </h1>{" "}
                <div className="news__item__text">
                  <Trans>{news.text}</Trans>
                </div>{" "}
                <div className="news__border"> &emsp; </div>{" "}
                <div className="news__item__link">
                  <a href={news.link}>
                    <Trans>Дізнатись більше</Trans>
                  </a>{" "}
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

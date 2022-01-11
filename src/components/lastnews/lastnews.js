import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../components/button/button"
import "./lastnews.css"

const News = ({ title }) => {
  return (
    <div className="news">
      <div className="container">
        <div className="news__title">
          <h1 className="news__text">Новини</h1>
          <Link language="ua" to="/news/news" className="news__link">
            <Button>Всі новини</Button>
          </Link>
        </div>
        <div className="news__inner">
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
              році День відкритих дверей зібрав величезну кількість абітурієнтів
              та гостей...
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
              році День відкритих дверей зібрав величезну кількість абітурієнтів
              та гостей...
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
              році День відкритих дверей зібрав величезну кількість абітурієнтів
              та гостей...
            </div>
            <div className="news__border">&emsp;</div>
            <div className="news__item__link">
              <a href="#">Дізнатись більше</a>
            </div>
          </div>
        </div>
        <Link language="ua" to="/news/news" className="news__link-sm">
          <Button>Всі новини</Button>
        </Link>
      </div>
    </div>
  )
}
export default News

import React from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import Button from "src/components/button"
import "./lastnews.css"

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="news__title">
          <h1 className="news__text">
            <Trans>News of the department</Trans>
          </h1>
          <Link language="ua" to="/news" className="news__link">
            <Button>
              <Trans>All news</Trans>
            </Button>
          </Link>
        </div>
        <div className="news__inner">
          <div className="news__item">
            <StaticImage
              src="../../images/news/news_image1.png"
              alt="News"
              className="news__image"
            />
            <h1 className="news__item__title">
              <Trans>On March 1, an open day was held</Trans>
            </h1>
            <div className="news__item__text">
              <Trans>March 1, the first day of spring!</Trans>
            </div>
            <div className="news__border"> &emsp; </div>
            <div className="news__item__link">
              <a href="#">
                <Trans>Learn more</Trans>
              </a>
            </div>
          </div>
          <div className="news__item">
            <StaticImage
              src="../../images/news/news_image2.png"
              alt="News"
              className="news__image"
            />
            <h1 className="news__item__title">
              <Trans>On March 1, an open day was held</Trans>
            </h1>
            <div className="news__item__text">
              <Trans>March 1, the first day of spring!</Trans>
            </div>
            <div className="news__border"> &emsp; </div>
            <div className="news__item__link">
              <a href="#">
                <Trans>Learn more</Trans>
              </a>
            </div>
          </div>
          <div className="news__item">
            <StaticImage
              src="../../images/news/news_image3.png"
              alt="News"
              className="news__image"
            />
            <h1 className="news__item__title">
              <Trans>On March 1, an open day was held</Trans>
            </h1>
            <div className="news__item__text">
              <Trans>March 1, the first day of spring!</Trans>
            </div>
            <div className="news__border"> &emsp; </div>
            <div className="news__item__link">
              <a href="#">
                <Trans>Learn more</Trans>
              </a>
            </div>
          </div>
        </div>
        <Link language="ua" to="/news/news" className="news__link-sm">
          <Button>
            <Trans>All news</Trans>
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default News

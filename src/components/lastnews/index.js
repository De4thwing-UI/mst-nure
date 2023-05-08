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
              src="../../images/news/news_image11.png"
              alt="News"
              className="news__image"
            />
            <h1 className="news__item__title">
              <Trans>
                <Trans>Meeting with the PC of NURE</Trans>
              </Trans>
            </h1>
            <div className="news__item__text">
              <Trans>
                Are you already in the process of writing your bachelor's
                thesis? Do you want to continue your education in the top-ranked
                university?
              </Trans>
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
              src="../../images/news/news_image12.png"
              alt="News"
              className="news__image"
            />
            <h1 className="news__item__title">
              <Trans>Meeting with the PC of NURE Bachelor's Program</Trans>
            </h1>
            <div className="news__item__text">
              <Trans>
                This is such an important stage in your life - applying to your
                dream university - and there is so little time left. We
                understand how difficult and challenging it can be, so we are
                here to help you.
              </Trans>
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
              src="../../images/news/news_image13.png"
              alt="News"
              className="news__image"
            />
            <h1 className="news__item__title">
              <Trans>Hotline of NURE</Trans>
            </h1>
            <div className="news__item__text">
              <Trans>
                Every year, the admission campaign raises numerous questions
                among our applicants. We understand you perfectly well, so we
                strive to provide comprehensive assistance.
              </Trans>
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

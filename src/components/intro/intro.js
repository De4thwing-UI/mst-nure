import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./intro.css"

const Intro = () => {
  return (
    <div className="directions__intro">
      <div className="container">
        <div className="directions__intro__inner">
          <div className="directions__intro__inner__text">
            <h1 className="directions__intro__title">
              У науковій роботі беруть активну участь не тільки викладачі та
              співробітники кафедри
            </h1>
            <h2 className="directions__intro__subtitle">
              А й студенти, і магістранти спеціальності «Видавництво і
              поліграфія». Викладачі, аспіранти, співробітники та студенти
              кафедри постійно беруть участь у міжнародних науково-практичних
              конференціях, форумах, виставках.
            </h2>
          </div>
          <StaticImage
            src="../../images/directions/directions-intro-bg.png"
            alt="directions_intro_image"
            className="directions__intro__image"
          />
        </div>
        <div className="directions__intro__features">
          <div className="features__item">
            <StaticImage
              className="features__icon"
              src="../../images/features/students.svg"
              alt="Teachers"
            />
            <div className="features__title">
              150
              <p className="features__text">Наукових робіт</p>
            </div>
          </div>
          <div className="features__item">
            <StaticImage
              className="features__icon"
              src="../../images/features/students.svg"
              alt="Teachers"
            />
            <div className="features__title">
              740
              <p className="features__text">Тез доповідей</p>
            </div>
          </div>
          <div className="features__item">
            <StaticImage
              className="features__icon"
              src="../../images/features/students.svg"
              alt="Teachers"
            />
            <div className="features__title">
              300
              <p className="features__text">Експонатів виставок</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Intro

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./intro.css"
import { Trans } from "react-i18next"

const Intro = () => {
  return (
    <div className="directions__intro">
      <div className="container">
        <div className="directions__intro__inner">
          <div className="directions__intro__inner__text">
            <h1 className="directions__intro__title">
              <Trans>Not only teachers and employees of the department
              take an active part in scientific work</Trans>
            </h1>
            <h2 className="directions__intro__subtitle">
              <Trans>
                And students and master's students of the «Publishing and
                printing» specialty. Teachers, graduate students, employees and
                students of the department constantly participate in
                international scientific and practical conferences, forums, and
                exhibitions.
              </Trans>
            </h2>
          </div>
          <StaticImage
            src="../../images/directions/directions-intro-bg.png"
            alt="directions_intro_image"
            className="directions__intro__image"
          />
        </div>
        <div className="directions__intro__features">
          <div className="directions__features__item">
            <StaticImage
              className="directions__features__icon"
              src="../../images/features/students.svg"
              alt="Teachers"
            />
            <div className="directions__features__title">
              150
              <p className="directions__features__text"><Trans>Scientific works</Trans></p>
            </div>
          </div>
          <div className="directions__features__item">
            <StaticImage
              className="directions__features__icon"
              src="../../images/features/docs.svg"
              alt="Teachers"
            />
            <div className="directions__features__title">
              740
              <p className="directions__features__text"><Trans>Abstracts of reports</Trans></p>
            </div>
          </div>
          <div className="directions__features__item">
            <StaticImage
              className="features__icon"
              src="../../images/features/image.svg"
              alt="Teachers"
            />
            <div className="directions__features__title">
              300
              <p className="directions__features__text"><Trans>Exhibition exhibits</Trans></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Intro

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./experiments.css"
import { Trans } from "react-i18next"

const Experiments = () => {
  return (
    <div className="experiments">
      <div className="container">
        <div className="experiments__intro__inner">
          <StaticImage
            src="../../images/directions/experiments-intro-bg.png"
            alt="directions_intro_image"
            className="experiments__intro__image"
          />
          <div className="experiments__intro__inner__text">
            <h1 className="experiments__intro__title">
              <Trans>
                At this time, several more research topics are being developed:
              </Trans>
            </h1>
            <ol>
              <li className="experiments__intro__subtitle">
                <Trans>
                  Information and analytical technologies and tools for
                  improving efficiency and security
                </Trans>
              </li>

              <li className="experiments__intro__subtitle">
                <Trans>
                  Development of a geo-information analytical system for
                  monitoring and managing resources of united territorial
                  communities
                </Trans>
              </li>
              <li className="experiments__intro__subtitle">
                <Trans>
                  Grant agreement for the development of the «Skole tourist»
                  project between NURE and the University of Economics in
                  Bygdoszcz (Poland).
                </Trans>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Experiments

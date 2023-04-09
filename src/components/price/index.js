import React from "react"
import "./price.css"
import { StaticImage } from "gatsby-plugin-image"
import { Trans } from "react-i18next"

const Price = () => {
  return (
    <div>
      <div className="price-one">
        <div className="container">
          <div className="price-one__title">
            <Trans>
              The cost of one year of tuition for individuals or legal entities
              (contractual form) at the first (bachelor's) level of higher
              education
            </Trans>
          </div>
          <div className="price-one__inner">
            <div className="price-one__item">
              <div className="price-one__title">
                <h1 className="price-one__suptitle">
                  <Trans>14 500 UAH</Trans>
                </h1>
                <p className="price-one__text">
                  <Trans>Full-time form of study.</Trans>
                </p>
              </div>
            </div>
            <div className="price-one__item">
              <div className="price-one__title">
                <h1 className="price-one__suptitle">
                  <Trans>8000 UAH</Trans>
                </h1>
                <p className="price-one__text">
                  <Trans>
                    Distance learning form (correspondence form) of study
                  </Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="price-two">
        <div className="container">
          <div className="price-two__title">
            <Trans>
              The cost of one year of tuition for individuals (physical/legal
              entities) on a contractual basis for the second (master's) level
              of higher education.
            </Trans>
          </div>
          <div className="price-two__inner">
            <div className="price-two__item">
              <div className="price-two__title">
                <h1 className="price-two__suptitle">
                  <Trans>15 500 UAH</Trans>
                </h1>
                <p className="price-two__text">
                  <Trans>Full-time form of study.</Trans>
                </p>
              </div>
            </div>
            <div className="price-two__item">
              <div className="price-two__title">
                <h1 className="price-otwo_suptitle">
                  <Trans>9000 UAH</Trans>
                </h1>
                <p className="price-two__text">
                  <Trans>
                    Distance learning form (correspondence form) of study
                  </Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price

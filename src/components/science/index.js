import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import "./science.css"

const Science = () => {
  const directions = [
    {
      title: "Geoinformation systems and technologies",
      text: "Leaders: prof. Tkachenko V.P., doc.",
    },
    {
      title: "Technologies for the development of electronic publications",
      text: "Leaders: prof. Yehorova I.M.",
    },
    {
      title: "Automation systems for printing production management",
      text: "Leaders: Prof. V.P. Tkachenko, Prof. Levykin I.V.",
    },
    {
      title:"Problems of digital image processing and color reproduction in polygraphy, computer graphics",
      text: "Leaders: prof. Yehorova I.M.",
    },
  ]
  return (
    <div className="directions">
      <div className="container">
        <div className="directions__title">
          <h1 className="directions__title__text"> <Trans>Scientific directions of the department</Trans> </h1>
        </div>
        <div className="directions__inner">
          {directions.map((direction, index) => (
            <div className="directions__item" key={index.toString()}>
              <div className="directions__item__title"><Trans>{direction.title}</Trans></div>
              <div className="directions__item__text"><Trans>{direction.text}</Trans></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Science

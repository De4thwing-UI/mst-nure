import React from "react"
import "./magistracy.css"
import { Trans } from "react-i18next"

const Magistracy = () => {
  const magistracies = [
    {
      suptitle: "Educational and professional program",
      name: "TEMP",
      text: "Technologies of electronic multimedia publications",
    },
    {
      suptitle: "Educational and professional program",
      name: "CTSPPP",
      text: "Computer technologies",
    },
    {
      suptitle: "Educational and professional program",
      name: "TPP",
      text: "Technologies of printed publications",
    },
  ]

  return (
    <div className="magistracy">
      <div className="container">
        <div className="magistracy__title"><Trans>Magistracy</Trans></div>
        <div className="magistracy__inner">
          {magistracies.map((magistracy, index) => (
            <div className="magistracy__item" key={index.toString()}>
              <p className="magistracy__item__suptitle">
                <Trans>{magistracy.suptitle}</Trans>
              </p>
              <h1 className="magistracy__item__name"><Trans>{magistracy.name}</Trans></h1>
              <p className="magistracy__item__text"><Trans>{magistracy.text}</Trans></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Magistracy

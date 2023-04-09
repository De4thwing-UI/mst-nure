import React from "react"
import "./zno.css"
import { Trans } from "react-i18next"

const Zno = () => {
  const znos = [
    {
      title: "External Independent Testing (EIT) in Mathematics",
      text:"Profile level (on a scale of 100-200 points)",
    },
    {
      title: "External Independent Testing (EIT) in Ukrainian language or Ukrainian language and literature.",
      text: "For technical universities, for specialty 186 Publishing and Printing, Ukrainian language (on a scale of 100-200 points) is sufficient.",
    },
  ]
  const choices = [
    {
      title: "External Independent Testing (EIT) in Physics",
      text: "(On a scale of 100-200 points)",
    },
    {
      title: "External Independent Testing (EIT) in Chemistry",
      text: "(On a scale of 100-200 points)",
    },
    {
      title: "External Independent Testing (EIT) in a foreign language",
      text: "(On a scale of 100-200 points)",
    },
    {
      title: "External Independent Testing (EIT) in Geography",
      text: "(On a scale of 100-200 points)",
    },
    {
      title: "External Independent Testing (EIT) in Ukrainian History",
      text: "(On a scale of 100-200 points)",
    },
    {
      title: "External Independent Testing (EIT) in Biology",
      text: "(On a scale of 100-200 points)",
    },
  ]
  return (
    <div className="zno">
      <div className="container">
        <div className="zno__title">
         <Trans>For the specialty 186 Publishing and Printing in the competition, participation is allowed.</Trans>
        </div>
        <div className="zno__inner">
          {znos.map((zno, index) => (
            <div className="zno__item" key={index.toString()}>
              <div className="zno__item__title"><Trans>{zno.title}</Trans></div>
              <div className="zno__item__text"><Trans>{zno.text}</Trans></div>
            </div>
          ))}
        </div>
      </div>
      <div className="zno__choice">
        <div className="container">
          <div className="zno__choice__title"><Trans>Specialties available for selection</Trans></div>
          <div className="zno__choice__inner">
            {choices.map((choice, index) => (
              <div className="zno__choice__item" key={index.toString()}>
                <div className="zno__choice__item__title"><Trans>{choice.title}</Trans></div>
                <div className="zno__choice__item__text"><Trans>{choice.text}</Trans></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Zno

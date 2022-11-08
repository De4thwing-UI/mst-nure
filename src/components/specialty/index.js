import React from "react"
import { graphql } from "gatsby"
import "./specialty.css"
import { Trans } from "react-i18next"

const Specialty = () => {
  const specialties = [
    {
      name: "186 Publishing and printing · Bachelor",
      specialization: "Publishing and printing business (VPS).",
    },
    {
      name: "186 Publishing and printing · Bachelor",
      specialization: "Technologies of printed publications (TDV).",
    },
    {
      name: "186 Publishing and printing · Master's degree",
      specialization:
        "Computer technologies and systems of publishing and printing industries (KTS VPV).",
    },
    {
      name: "186 Publishing and printing · Master's degree",
      specialization: "Technologies of electronic multimedia publications (TOPIC)",
    },
  ]
  return (
    <div className="specialty">
      <div className="container">
        <div className="specialty__inner">
          {specialties.map((specialtie, index) => (
            <div className="specialty__item" key={index.toString()}>
              <div className="specialty__text">
                <Trans>Specialty</Trans>
              </div>
              <div className="specialty__name"><Trans>{specialtie.name}</Trans></div>
              <div className="specialty__specialization">
                <span>
                  <Trans>Specialty</Trans>:
                </span>{" "}
                <Trans>{specialtie.specialization}</Trans>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Specialty

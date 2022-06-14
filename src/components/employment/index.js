import React from "react"
import Button from "src/components/button"
import FirstImg from "src/images/employment/factor.png"
import SecondImg from "src/images/employment/ranok.png"
import ThirdImg from "src/images/employment/data.png"
import FourImg from "src/images/employment/epam.png"
import FiveImg from "src/images/employment/softserve.png"
import SixImg from "src/images/employment/grid.png"
import "./employment.css"
import { Trans } from "react-i18next"

const Employment = () => {
  const employments = [
    {
      photo: FirstImg,
    },
    {
      photo: SecondImg,
    },
    {
      photo: ThirdImg,
    },
    {
      photo: FourImg,
    },
    {
      photo: FiveImg,
    },
    {
      photo: SixImg,
    },
  ]
  return (
    <div className="employment">
      <div className="container">
        <div className="employment__title"><Trans>Employment</Trans></div>
        <div className="employment__inner">
          {employments.map((employment, index) => (
            <div className="employment__item" key={index.toString()}>
              <img
                src={employment.photo}
                alt="Factor"
                className="employment__image"
              />
            </div>
          ))}
        </div>
        <div className="employment__button">
          <a href="#">
            <Button><Trans>All partners</Trans></Button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Employment

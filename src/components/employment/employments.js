import React from "react"
import Button from "../../components/button/button"
import FirstImg from "../../images/Employment/factor.png"
import SecondImg from "../../images/Employment/ranok.png"
import ThirdImg from "../../images/Employment/data.png"
import FourImg from "../../images/Employment/epam.png"
import FiveImg from "../../images/Employment/softserve.png"
import SixImg from "../../images/Employment/grid.png"
import "./employment.css"

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
        <div className="employment__title">Працевлаштування</div>
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
          {" "}
          <a href="#">
            <Button>Всі партнери</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Employment

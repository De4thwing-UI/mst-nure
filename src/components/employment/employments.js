import React from "react"
import Button from "src/components/button/button"
import FirstImg from "src/images/Employment/factor.png"
import SecondImg from "src/images/Employment/ranok.png"
import ThirdImg from "src/images/Employment/data.png"
import FourImg from "src/images/Employment/epam.png"
import FiveImg from "src/images/Employment/softserve.png"
import SixImg from "src/images/Employment/grid.png"
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
        <div className="employment__title"> Працевлаштування </div>{" "}
        <div className="employment__inner">
          {" "}
          {employments.map((employment, index) => (
            <div className="employment__item" key={index.toString()}>
              <img
                src={employment.photo}
                alt="Factor"
                className="employment__image"
              />
            </div>
          ))}{" "}
        </div>{" "}
        <div className="employment__button">
          {" "}
          <a href="#">
            <Button> Всі партнери </Button>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  )
}
export default Employment

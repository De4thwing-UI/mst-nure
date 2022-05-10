import React from "react"
import Button from "../button/button"
import Pagination from "../Pagination/Pagination"
import "./works.css"
import FirstImg from "../../images/works/1.png"
import SecondImg from "../../images/works/2.png"
import ThirdImg from "../../images/works/3.png"

const Works = () => {
  const works = [
    {
      name: "Гапіч Антон",
      photo: FirstImg,
      position: "Ілюстрація",
    },
    {
      name: "Ісаєнко Тетяна",
      photo: SecondImg,
      position: "Ілюстрація",
    },
    {
      name: "Музичук Анна",
      photo: ThirdImg,
      position: "Соціальний плакат",
    },
  ]
  return (
    <div className="works">
      <div className="container">
        <div className="works__title">
          <h1 className="works__text">Роботи студентів</h1>
          <a href="#" className="works__link">
            <Button>Дивитись всі</Button>
          </a>
        </div>
        <div className="works__inner">
        {works.map((work, index) => (
          <div className="works__item" key={index.toString()}>
            <img
              src={work.photo}
              alt="1"
              className="works__image"
            />
            <h1 className="works__item__title">{work.name}</h1>
            <div className="works__item__text">{work.position}</div>
          </div>
          ))}
          <a href="#" className="works__link-sm">
            <Button>Дивитись всі</Button>
          </a>
        </div>
        <Pagination />
      </div>
    </div>
  )
}
export default Works

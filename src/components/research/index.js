import React from "react"
import "./research.css"

const Research = () => {
  return (
    <div className="research">
      <div className="container">
        <div className="research__title">
          Студентська науково-дослідницька робота (НДРС) реалізується в такий
          спосіб
        </div>
        <div className="research__inner">
          <ul className="research__list">
            <li className="research__item">
              <span className="research__item__text">
                Участь студентів в різних науково-практичних заходах: наукових
                семінарах, форумах, конференціях, виставках, конкурсах
                студентських робіт, олімпіадах з дисциплін та спеціальностей.
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                Залучення студентів до виконання науково-дослідних проектів, що
                фінансуються з різних джерел (держбюджет, договори, гранти
                тощо).
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                Атестаційні роботи з дослідницькими розділами або цілком
                науково-дослідного характеру.
              </span>
            </li>
          </ul>
          <ul className="research__list">
            <li className="research__item">
              <span className="research__item__text">
                Індивідуальні науково-дослідні роботи студентів, тобто участь
                студентів у вирішенні певної проблеми під керівництвом
                конкретного наукового керівника з числа
                професорсько-викладацького складу.
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                Виконання НДР на практиках.
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                
                Включення елементів НДР в навчальні заняття.
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                
                Залучення студентів до участі в науково-інноваційній діяльності.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Research

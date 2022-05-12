import React from "react"
import "./disertations.css"
import Pagination from "src/components/pagination"

const Disertations = () => {
  const disertations = [
    {
      title: "Попов О.В.",
      text: "«Моделі, методи та інструментальні засоби оперативного управління міським господарством», науковий керівник Ткаченко В.П. - 2008.",
    },
    {
      title: "Костарєв Д.Б.",
      text: "«Моделі, методи та інструментальні засоби побудови автоматизованих навчальних систем», науковий керівник Ткаченко В.П. - 2009.",
    },
  ]
  return (
    <div className="disertation">
      <div className="container">
        <div className="disertation__title">
          <h1 className="disertation__title__text">
            {" "}
            За останні роки підготовлено та захищено кандидатські дисертації{" "}
          </h1>{" "}
        </div>{" "}
        <div className="disertation__inner">
          {" "}
          {disertations.map((disertation, index) => (
            <div className="disertation__item" key={index.toString()}>
              <div className="disertation__item__title">
                {" "}
                {disertation.title}{" "}
              </div>{" "}
              <div className="disertation__item__text">
                {" "}
                {disertation.text}{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        <Pagination />
      </div>{" "}
    </div>
  )
}
export default Disertations

import React from "react"
import "./magistracy.css"

const Magistracy = () => {
  const magistracies = [
    {
      suptitle: "Освітньо-професійна програма",
      name: "ТЕМВ",
      text: "Технології електронних мультимедійних видань",
    },
    {
      suptitle: "Освітньо-професійна програма",
      name: "КТСВПВ",
      text: "Комп’ютерні технології та системи видавничо-поліграфічних виробництв",
    },
    {
      suptitle: "Освітньо-професійна програма",
      name: "ТДВ",
      text: "Технології друкованих видань",
    },
  ]

  return (
    <div className="magistracy">
      <div className="container">
        <div className="magistracy__title">Магістратура</div>
        <div className="magistracy__inner">
          {magistracies.map((magistracy, index) => (
            <div className="magistracy__item" key={index.toString()}>
              <p className="magistracy__item__suptitle">
                {magistracy.suptitle}
              </p>
              <h1 className="magistracy__item__name">{magistracy.name}</h1>
              <p className="magistracy__item__text">{magistracy.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Magistracy

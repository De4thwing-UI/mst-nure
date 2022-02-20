import React from "react"
import "./specialty.css"

const Specialty = () => {
  const specialties = [
    {
      name: "186 Видавництво та поліграфія · Бакалавр",
      specialization: "Освітня програма: Видавничо-поліграфічна справа (ВПС).",
    },
    {
      name: "186 Видавництво та поліграфія · Бакалавр",
      specialization: "Технології друкованих видань (ТДВ).",
    },
    {
      name: "186 Видавництво та поліграфія · Магістр",
      specialization:
        "Комп’ютерні технології і системи видавничо-поліграфічних виробництв (КТС ВПВ).",
    },
    {
      name: "186 Видавництво та поліграфія · Магістр",
      specialization: "Технології електронних мультимедійних видань (ТЕМВ)",
    },
  ]
  return (
    <div className="specialty">
      <div className="container">
        <div className="specialty__inner">
          {specialties.map((specialtie, index) => (
            <div className="specialty__item" key={index.toString()}>
              <div className="specialty__text">Спеціальність</div>
              <div className="specialty__name">{specialtie.name}</div>
              <div className="specialty__specialization">
                <span>Спеціалізація:</span> {specialtie.specialization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Specialty

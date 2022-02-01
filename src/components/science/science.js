import React from "react"
import "./science.css"

const Science = () => {
  const directions = [
    {
      title: "Геоінформаційні системи і технології",
      text: "Керівники: проф. Ткаченко В.П., доц. Губа М.І.",
    },
    {
      title: "Технології розробки електронних видань",
      text: "Керівник: проф. Єгорова І.М.",
    },
    {
      title: "Системи автоматизації управління поліграфічним виробництвом",
      text: "Керівники: проф.Ткаченко В.П., проф. Левикін І.В.",
    },
    {
      title:
        "Проблеми обробки цифрових зображень і відтворення кольору в поліграфії, комп'ютерна графіка",
      text: "Керівник: проф. Єгорова І.М.",
    },
  ]
  return (
    <div className="directions">
      <div className="container">
        <div className="directions__title">
          <h1 className="directions__title__text">Наукові напрями кафедри</h1>
        </div>
        <div className="directions__inner">
          {directions.map((direction, index) => (
            <div className="directions__item" key={index.toString()}>
              <div className="directions__item__title">{direction.title}</div>
              <div className="directions__item__text">{direction.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Science

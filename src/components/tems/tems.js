import React from "react"
import "./tems.css"

const Tems = () => {
  const tems = [
    {
      title: "ДЗ/475-2011",
      suptitle: "2013-2015 р.р.",
      text: "Розробка технології та інструментальних засобів створення міських геоінформаційних систем на базі програмних продуктів з відкритим кодом",
    },
    {
      title: "РД/356/25-0214",
      suptitle: "2014 р",
      text: "Розробка концепції та схеми сценаріїв мультимодальної взаємодії користувача з офісним додатком на платформі Tizen...",
    },
    {
      title: "ДЗ/475-2011",
      suptitle: "2013-2015 р.р.",
      text: "Розробка технології та інструментальних засобів створення міських геоінформаційних систем на базі програмних продуктів з відкритим кодом",
    },
    {
      title: "РД/356/25-0214",
      suptitle: "2014 р",
      text: "Розробка концепції та схеми сценаріїв мультимодальної взаємодії користувача з офісним додатком на платформі Tizen...",
    },
  ]
  return (
    <div className="tems">
      <div className="container">
        <div className="tems__title">
          <h1 className="tems__title__text">Госпдоговірна тематика</h1>
        </div>
        <div className="tems__inner">
          {tems.map((tem, index) => (
            <div className="tems__item" key={index.toString()}>
              <div className="tems__item__title">
                {tem.title}
                <p className="tems__item__suptitle">{tem.suptitle}</p>
              </div>
              <div className="tems__item__text">{tem.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Tems

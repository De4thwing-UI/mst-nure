import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./experiments.css"

const Experiments = () => {
  return (
    <div className="experiments">
      <div className="container">
        <div className="experiments__intro__inner">
          <StaticImage
            src="../../images/directions/experiments-intro-bg.png"
            alt="directions_intro_image"
            className="experiments__intro__image"
          />
          <div className="experiments__intro__inner__text">
            <h1 className="experiments__intro__title">
              На цей час розробляється ще кілька науково-дослідних тем:
            </h1>
            <ol>
              <li className="experiments__intro__subtitle">
                Інформаційно-аналітичні технології та інструментальні засоби
                підвищення ефективності та безпеки
              </li>

              <li className="experiments__intro__subtitle">
                Розроблення геоінформаційної аналітичної системи моніторингу і
                управління ресурсами об'єднаних територіальних громад
              </li>
              <li className="experiments__intro__subtitle">
                Грантова угода на розробку проекту «Сколе туристичний» між ХНУРЕ
                та Університетом Економіки в м. Бигдощ (Польща).
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Experiments

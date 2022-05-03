import React from "react"
import "./student_science.css"
import { StaticImage } from "gatsby-plugin-image"

const Studentscience = () => {
  return (
    <div className="studentscience__intro">
      <div className="container">
        <div className="studentscience__intro__inner">
          <div className="studentscience__intro__text">
            <h1 className="studentscience__intro__title">
              Важливою складовою процесу навчання є науково-дослідна робота
              студентів.
            </h1>
            <p className="studentscience__intro__subtitle">
              На кафедрі створені всі необхідні умови для надання студентам
              можливості реалізувати свої бажання в області науки.
            </p>
          </div>
          <StaticImage
            className="studentscience__intro__image"
            src="../../images/studenscience/1.png"
            alt="intro"
          />
        </div>
      </div>
    </div>
  )
}
export default Studentscience

import React from "react"
import "./student_science.css"
import { StaticImage } from "gatsby-plugin-image"
import { Trans } from "react-i18next"

const Studentscience = () => {
  return (
    <div className="studentscience__intro">
      <div className="container">
        <div className="studentscience__intro__inner">
          <div className="studentscience__intro__text">
            <h1 className="studentscience__intro__title">
              <Trans>
                An important component of the learning process is the research
                work of students.
              </Trans>
            </h1>
            <p className="studentscience__intro__subtitle">
              <Trans>
                The department has created all the necessary conditions to give
                students the opportunity to realize their wishes in the field of
                science.
              </Trans>
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

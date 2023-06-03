import React from "react"
import "./zno.css"
import { Trans } from "react-i18next"

const Zno = () => {
  const znos = [
    {
      title: "Ukrainian History",
    },
    {
      title: "Foreign Language",
    },
    {
      title: "Biology",
    },
    {
      title: "Biology",
    },
    {
      title: "Chemistry",
    },
  ]
  return (
    <div className="zno">
      <div className="container">
        <div className="zno__title">
          <Trans>Elective subjects</Trans>
        </div>
        <div className="zno__inner">
          {znos.map((zno, index) => (
            <div className="zno__item" key={index.toString()}>
              <div className="zno__item__title">
                <Trans>{zno.title}</Trans>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Zno

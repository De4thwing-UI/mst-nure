import React from "react"
import { Trans } from "react-i18next"
import "./tems.css"

const Tems = () => {
  const tems = [
    {
      title: "DZ/475-2011",
      suptitle: "2013-2015 y.y.",
      text: "Development of technology and tools for creating urban geoinformation systems based on open source software products",
    },
    {
      title: "RD/356/25-0214",
      suptitle: "2014 y.",
      text: "Development of the concept and scheme of multimodal user interaction scenarios with an office application on the Tizen platform...",
    },
    {
      title: "DZ/475-2011",
      suptitle: "2013-2015 y.y.",
      text: "Development of technology and tools for creating urban geoinformation systems based on open source software products",
    },
    {
      title: "RD/356/25-0214",
      suptitle: "2014 y.",
      text: "Development of the concept and scheme of multimodal user interaction scenarios with an office application on the Tizen platform...",
    },
  ]
  return (
    <div className="tems">
      <div className="container">
        <div className="tems__title">
          <h1 className="tems__title__text"><Trans>Contractual topics</Trans></h1>
        </div>
        <div className="tems__inner">
          {tems.map((tem, index) => (
            <div className="tems__item" key={index.toString()}>
              <div className="tems__item__title">
                <Trans>{tem.title}</Trans> 
                <p className="tems__item__suptitle"><Trans>{tem.suptitle}</Trans></p>
              </div>
              <div className="tems__item__text"><Trans>{tem.text}</Trans></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Tems

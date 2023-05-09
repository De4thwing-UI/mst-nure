import React, { useState } from "react"
import "./disertations.css"
import Pagination from "src/components/pagination"
import { Trans } from "react-i18next"

const Disertations = () => {
  const disertations = [
    {
      title: "Popov O.V.",
      text: "«Models, methods and instrumental means of operational management of urban economy», research supervisor V.P. Tkachenko. - 2008.",
    },
    {
      title: "Kostarev D.B.",
      text: "«Models, methods and tools for building automated learning systems», scientific supervisor V.P. Tkachenko. - 2009.",
    },
    {
      title: "Levykin I.V.",
      text: "METHODS, MODELS AND INFORMATION TECHNOLOGIES OF MANAGEMENT OF INTERSUBSTITUTE BUSINESS PROCESSES OF THE ENTERPRISE",
    },
  ]

  const limit = 2
  const [displayItems, setDisplayItems] = useState(disertations.slice(0, limit))

  const handlePageChange = page => {
    const offset = limit * (page - 1)
    setDisplayItems(disertations.slice(offset, offset + limit))
  }

  return (
    <div className="disertation">
      <div className="container">
        <div className="disertation__title">
          <h1 className="disertation__title__text">
            <Trans>
              Candidate theses have been prepared and defended in recent years
            </Trans>
          </h1>
        </div>
        <div className="disertation__inner">
          {disertations.map((disertation, index) => (
            <div className="disertation__item" key={index.toString()}>
              <div className="disertation__item__title">
                <Trans>{disertation.title}</Trans>
              </div>
              <div className="disertation__item__text">
                <Trans>{disertation.text}</Trans>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          items={displayItems.length}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
export default Disertations

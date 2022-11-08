import React, { useState } from "react"
import "./conferences.css"
import Pagination from "src/components/pagination"
import { Trans } from "react-i18next"

const Conferences = () => {
  const limit = 2
  const [selectedItems, setSelectedItems] = useState("Конференції")
  const scienceTypes = [
    {
      name: "Conferences",
      children: [
        {
          title:
            "International Youth Forum «Radio Electronics and Youth in the 21 st Century»",
          city: "C. Kharkiv",
        },
        {
          title:
            "International scientific and technical conference of students and postgraduates «Young Printing»",
          city: "C. Kyiv",
        },
      ],
    },
    {
      name: "Competitions",
      children: [
        {
          title:
            "International scientific and technical conference of students and postgraduates «Young Printing»",
          city: "C. Kyiv",
        },
      ],
    },
    {
      name: "Olympics",
      children: [
        {
          title:
            "International Youth Forum «Radio Electronics and Youth in the 21 st Century»",
          city: "C. Kharkiv",
        },
        {
          title:
          "International scientific and technical conference of students and postgraduates «Young Printing»",
        city: "C. Kyiv",
        },
      ],
    },
    {
      name: "Publications",
      children: [
        {
          title:
          "International Youth Forum «Radio Electronics and Youth in the 21 st Century»",
        city: "C. Kharkiv",
        },
        {
          title:
          "International scientific and technical conference of students and postgraduates «Young Printing»",
        city: "C. Kyiv",
        },
      ],
    },
  ]

  const [scienceItems, setScienceItems] = useState(scienceTypes[0].children)

  const [displayItems, setDisplayItems] = useState(scienceItems.slice(0, limit))

  const handlePageChange = page => {
    const offset = limit * (page - 1)
    setDisplayItems(scienceItems.slice(offset, offset + limit))
  }

  const handleScienceTypeChange = scienceTypeName => {
    const scienceChildren = scienceTypes.find(
      s => s.name === scienceTypeName
    ).children
    setSelectedItems(scienceTypeName)
    setScienceItems(scienceChildren)
    setDisplayItems(scienceChildren.slice(0, limit))
    handlePageChange(1)
  }

  return (
    <div className="conferences">
      <div className="container">
        <div className="conferences__menu">
          <div className="conferences__menu__inner">
            {scienceTypes.map((item, index) => (
              <div key={index.toString()} className="conferences__menu__item">
                <button
                  className={
                    selectedItems === item.name
                      ? "conferences__button active"
                      : "conferences__button"
                  }
                  onClick={() => handleScienceTypeChange(item.name)}
                >
                  <Trans>{item.name}</Trans>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="conferences__inner">
          {displayItems.map((conference, index) => (
            <div className="conferences__item" key={index.toString()}>
              <div className="conferences__item__title">
                <Trans>{conference.title}</Trans>
              </div>
              <div className="conferences__item__city">
                <Trans>{conference.city}</Trans>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          items={scienceItems.length}
          limit={2}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Conferences

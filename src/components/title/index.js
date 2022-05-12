import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import "./title.css"

const Title = ({ children }) => {
  return (
    <div className="title">
      <h1 className="title__text">{children}</h1>
    </div>
  )
}

export default Title

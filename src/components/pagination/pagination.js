import React from "react"
import "./pagination.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight"

const Pagination = () => {
  return (
    <div className="works__pagination">
      <a href="#" className="works__paginations-arrow">
        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
      </a>
      <a className="works__pagination__active" href="#">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">7</a>
      <a href="#">8</a>
      <a href="#">9</a>
      <a href="#" className="works__paginations-arrow">
        <FontAwesomeIcon icon={faAngleRight} size="lg" />
      </a>
    </div>
  )
}
export default Pagination

import React from "react"
import "./pagination.css"

const Pagination = () => {
  return (
    <div className="works__pagination">
      <a href="#">&lt;</a>
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
      <a href="#">&gt;</a>
    </div>
  )
}
export default Pagination

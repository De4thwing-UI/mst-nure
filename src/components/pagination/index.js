import React, { useState } from "react"
import "./pagination.css"

const Pagination = ({ items, handlePageChange }) => {
  const [currentPage, setPage] = useState(1)
  const pages = Math.ceil(items / 3)

  return (
    <div className="works__pagination">
      {Array(pages)
        .fill("")
        .map((_, index) => (
          <span
            key={index.toString()}
            className={
              index + 1 === currentPage
                ? "works__pagination__item active"
                : "works__pagination__item"
            }
            onClick={() => {
              setPage(index + 1)
              handlePageChange(index + 1)
            }}
          >
            {index + 1}
          </span>
        ))}
    </div>
  )
}
export default Pagination

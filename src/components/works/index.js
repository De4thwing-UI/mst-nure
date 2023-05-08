import React, { useState } from "react"
import Button from "../button"
import Pagination from "src/components/pagination"
import "./works.css"
import FirstImg from "src/images/works/1.png"
import SecondImg from "src/images/works/2.png"
import ThirdImg from "src/images/works/3.png"
import FourthImg from "src/images/works/4.png"
import FiveImg from "src/images/works/5.png"
import SixImg from "src/images/works/6.png"
import SevenImg from "src/images/works/6.png"
import EightImg from "src/images/works/8.png"
import NineImg from "src/images/works/9.png"
import TenImg from "src/images/works/10.png"
import ElevenImg from "src/images/works/11.jpg"
import TwelveImg from "src/images/works/12.jpg"

import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"

const Works = () => {
  const works = [
    {
      name: "Tatyana Isayenko",
      photo: TenImg,
      position: "Landing",
    },
    {
      name: "Tatyana Isayenko",
      photo: ElevenImg,
      position: "Table game",
    },
    {
      name: "Tatyana Isayenko",
      photo: TwelveImg,
      position: "Magazine",
    },
    {
      name: "Anton Gapich",
      photo: FourthImg,
      position: "Illustration",
    },
    {
      name: "Tatyana Isayenko",
      photo: FiveImg,
      position: "Illustration",
    },
    {
      name: "Anna Muzychuk",
      photo: SixImg,
      position: "Social poster",
    },
    {
      name: "Anna Muzychuk",
      photo: FourthImg,
      position: "Social poster",
    },
    {
      name: "Anna Muzychuk",
      photo: SevenImg,
      position: "Social poster",
    },
    {
      name: "Anna Muzychuk",
      photo: EightImg,
      position: "Social poster",
    },
    {
      name: "Anna Muzychuk",
      photo: NineImg,
      position: "Social poster",
    },

    {
      name: "Anton Gapich",
      photo: FirstImg,
      position: "Illustration",
    },
    {
      name: "Tatyana Isayenko",
      photo: SecondImg,
      position: "Illustration",
    },
    {
      name: "Anton Gapich",
      photo: FirstImg,
      position: "Illustration",
    },
    {
      name: "Anna Muzychuk",
      photo: ThirdImg,
      position: "Social poster",
    },
  ]

  const limit = 3
  const [displayWorks, setDisplayWorks] = useState(works.slice(0, limit))

  const handlePageChange = page => {
    const offset = limit * (page - 1)
    setDisplayWorks(works.slice(offset, offset + limit))
  }

  return (
    <div className="works">
      <div className="container">
        <div className="works__title">
          <h1 className="works__text">
            {" "}
            <Trans>Works of students</Trans>{" "}
          </h1>
          <Link to="/works" className="works__link">
            <Button>
              {" "}
              <Trans>Show more</Trans>{" "}
            </Button>
          </Link>{" "}
        </div>
        <div className="works__inner">
          {displayWorks.map((work, index) => (
            <div className="works__item" key={index.toString()}>
              <img src={work.photo} alt="1" className="works__image" />
              <h1 className="works__item__title">
                {" "}
                <Trans>{work.name}</Trans>{" "}
              </h1>
              <div className="works__item__text">
                {" "}
                <Trans>{work.position}</Trans>{" "}
              </div>
            </div>
          ))}
          <Link to="/works" className="works__link-sm">
            <Button>
              {" "}
              <Trans>Show more</Trans>{" "}
            </Button>
          </Link>{" "}
        </div>
        <Pagination items={works.length} handlePageChange={handlePageChange} />
      </div>
    </div>
  )
}
export default Works

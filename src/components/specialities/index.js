import React from "react"
import Button from "src/components/button"
import WebImg from "src/images/specialities/web.svg"
import VpsImg from "src/images/specialities/VPS.svg"
import GraphImg from "src/images/specialities/graph.svg"
import ThreedImg from "src/images/specialities/3d.svg"
import EbooksImg from "src/images/specialities/e-books.svg"
import VideoImg from "src/images/specialities/video.svg"
import "./specialities.css"
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"

const Specialities = () => {
  const specialities = [
    {
      title: "Web development",
      image: WebImg,
    },
    {
      title: "Publishing and printing processes",
      image: VpsImg,
    },
    {
      title: "Graphic design",
      image: GraphImg,
    },
    {
      title: "3d modeling",
      image: ThreedImg,
    },
    {
      title: "Design of electronic publications",
      image: EbooksImg,
    },
    {
      title: "Processing of video and audio information",
      image: VideoImg,
    },
  ]
  return (
    <div className="specialities">
      <div className="container">
        <div className="specialties__title">
          <h1 className="specialties__text">
            <Trans>Specialty 186 Publishing and printing</Trans>
          </h1>
          <a href="#" className="specialties__link">
            <Button>
              <Link to="/admissions">
                {" "}
                <Trans>Learn more</Trans>
              </Link>{" "}
            </Button>
          </a>
        </div>
        <div className="specialities__inner">
          {specialities.map((specialitie, index) => (
            <div className="specialities__item" key={index.toString()}>
              <img
                src={specialitie.image}
                alt="spec"
                className="specialities__image"
              />
              <div className="specialities__item__title">
                <Trans>{specialitie.title}</Trans>
              </div>
            </div>
          ))}
          <a href="#" className="specialties__link-sm">
            <Button>
              <Link to="/admissions">
                {" "}
                <Trans>Learn more</Trans>
              </Link>{" "}
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Specialities

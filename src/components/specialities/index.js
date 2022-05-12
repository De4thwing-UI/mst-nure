import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "src/components/button"
import WebImg from "src/images/Specialities/web.svg"
import VpsImg from "src/images/Specialities/VPS.svg"
import GraphImg from "src/images/Specialities/graph.svg"
import ThreedImg from "src/images/Specialities/3d.svg"
import EbooksImg from "src/images/Specialities/e-books.svg"
import VideoImg from "src/images/Specialities/video.svg"
import "./specialities.css"

const Specialities = () => {
  const specialities = [
    {
      title: "Web-розробка",
      image: WebImg,
    },
    {
      title: "Видавничо-поліграфічні процеси",
      image: VpsImg,
    },
    {
      title: "Графічний дизайн",
      image: GraphImg,
    },
    {
      title: "3D моделювання",
      image: ThreedImg,
    },
    {
      title: "Проектування електронних видань",
      image: EbooksImg,
    },
    {
      title: "Обробка відео-, аудіо інформації",
      image: VideoImg,
    },
  ]
  return (
    <div className="specialities">
      <div className="container">
        <div className="specialties__title">
          <h1 className="specialties__text">
            Спеціальність 186 Видавництво та поліграфія{" "}
          </h1>{" "}
          <a href="#" className="specialties__link">
            <Button> Дізнатись більше </Button>{" "}
          </a>{" "}
        </div>{" "}
        <div className="specialities__inner">
          {" "}
          {specialities.map((specialitie, index) => (
            <div className="specialities__item" key={index.toString()}>
              <img
                src={specialitie.image}
                alt="spec"
                className="specialities__image"
              />
              <div className="specialities__item__title">
                {" "}
                {specialitie.title}{" "}
              </div>{" "}
            </div>
          ))}{" "}
          <a href="#" className="specialties__link-sm">
            <Button> Дізнатись більше </Button>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  )
}
export default Specialities

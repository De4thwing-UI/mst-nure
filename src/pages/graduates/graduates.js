import React from "react"
import { graphql, Link } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import "./graduates.css"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Button from "../../components/button/button"
import Pagination from "../../components/pagination/pagination"
import News from "../../components/lastnews/lastnews"
import Title from "../../components/title/title"
import GapichImg from "../../images/graduates/gapich.png"
import LeviImg from "../../images/graduates/levi.png"
import YarmolaImg from "../../images/graduates/yarmola.png"
import YaremchukImg from "../../images/graduates/yaremchuk.png"
import IbraImg from "../../images/graduates/ibra.png"
import RomanukImg from "../../images/graduates/romanuk.png"
import KudzoImg from "../../images/graduates/kudzo.png"
import ZinaImg from "../../images/graduates/zina.png"
import FirstImg from "../../images/works/1.png"
import SecondImg from "../../images/works/2.png"
import ThirdImg from "../../images/works/3.png"
import FourthImg from "../../images/works/4.png"
import FiveImg from "../../images/works/5.png"
import SixImg from "../../images/works/6.png"
import SevenImg from "../../images/works/7.png"
import EightImg from "../../images/works/8.png"
import NineImg from "../../images/works/9.png"

const GraduatePage = () => {
  const graduates = [
    {
      name: "Гапіч Антон",
      photo: GapichImg,
      position: "ВПВПС-18-2",
    },
    {
      name: "Леві Аккерман",
      photo: LeviImg,
      position: "ВПВПС-16-1",
    },
    {
      name: "Андрій Ярмоленко",
      photo: YarmolaImg,
      position: "ВПВПС-18-2",
    },
    {
      name: "Роман Яремчук",
      photo: YaremchukImg,
      position: "ВПВПС-17-3",
    },
    {
      name: "Златан Ібрагімович",
      photo: IbraImg,
      position: "ВПВПС-16-4",
    },
    {
      name: "Тарас Романюк",
      photo: RomanukImg,
      position: "ВПВПС-18-1",
    },
    {
      name: "Джотаро Куджо",
      photo: KudzoImg,
      position: "ВПВПС-18-2",
    },
    {
      name: "Олександр Зінченко",
      photo: ZinaImg,
      position: "ВПВПС-18-3",
    },
  ]
  const works = [
    {
      name: "Гапіч Антон",
      photo: FirstImg,
      position: "Ілюстрація",
    },
    {
      name: "Ісаєнко Тетяна",
      photo: SecondImg,
      position: "Ілюстрація",
    },
    {
      name: "Музичук Анна",
      photo: ThirdImg,
      position: "Соціальний плакат",
    },
    {
      name: "Гапіч Антон",
      photo: FourthImg,
      position: "Мобільний додаток",
    },
    {
      name: "Тарас Степаненко",
      photo: FiveImg,
      position: "Веб сайт",
    },
    {
      name: "Олександр Зінченко",
      photo: SixImg,
      position: "Веб сайт",
    },
    {
      name: "Георгій Бущан",
      photo: SevenImg,
      position: "Веб сайт",
    },
    {
      name: "Андрій Ярмоленко",
      photo: EightImg,
      position: "Ілюстрація",
    },
    {
      name: "Дмитро Мельніченко",
      photo: NineImg,
      position: "3D Ілюстрація",
    },  
  ]
  return (
    <div>
      <Header />
      <Title>Наші випускники</Title>
      <div className="graduates__page">
        <div className="container">
          <div className="graduates__inner">
            {graduates.map((graduate, index) => (
              <div className="graduates__inner__item" key={index.toString()}>
                <img
                  className="graduates__item__image"
                  src={graduate.photo}
                  alt="teachers__photo"
                ></img>
                <h1 className="graduates__item__title">{graduate.name}</h1>
                <p className="graduates__item__text">{graduate.position}</p>
              </div>
            ))}
          </div>
        </div>
        <Pagination />
      </div>
      <div className="works">
        <div className="container">
          <div className="works__title">
            <h1 className="works__text">Роботи студентів</h1>

          </div>
        </div>
        <div className="graduates__works">
          <div className="container">
            <div className="graduates__works__inner">
              {works.map((work, index) => (
                <div className="graduate__works__item" key={index.toString()}>
                  <img
                    src={work.photo}
                    alt="1"
                    className="graduate__works__image"
                  />
                  <h1 className="graduate__works__item__title">{work.name}</h1>
                  <div className="graduate__works__item__text">
                    {work.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination />
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default GraduatePage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

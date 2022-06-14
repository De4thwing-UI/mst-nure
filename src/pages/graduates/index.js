import React, { useState } from "react"
import { graphql } from "gatsby"
import "./graduates.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import Pagination from "src/components/pagination"
import News from "src/components/lastnews"
import Title from "src/components/title"
import GapichImg from "src/images/graduates/gapich.png"
import LeviImg from "src/images/graduates/levi.png"
import YarmolaImg from "src/images/graduates/yarmola.png"
import YaremchukImg from "src/images/graduates/yaremchuk.png"
import IbraImg from "src/images/graduates/ibra.png"
import RomanukImg from "src/images/graduates/romanuk.png"
import KudzoImg from "src/images/graduates/kudzo.png"
import ZinaImg from "src/images/graduates/zina.png"
import FirstImg from "src/images/works/1.png"
import SecondImg from "src/images/works/2.png"
import ThirdImg from "src/images/works/3.png"
import FourthImg from "src/images/works/4.png"
import FiveImg from "src/images/works/5.png"
import SixImg from "src/images/works/6.png"
import SevenImg from "src/images/works/7.png"
import EightImg from "src/images/works/8.png"
import NineImg from "src/images/works/9.png"

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

  const worksLimit = 3
  const [displayWorks, setDisplayWorks] = useState(works.slice(0, worksLimit))
  const graduatesLimit = 3
  const [displayGraduates, setDisplayGraduates] = useState(
    graduates.slice(0, graduatesLimit)
  )

  const handleWorksPageChange = page => {
    const offset = worksLimit * (page - 1)
    setDisplayWorks(works.slice(offset, offset + worksLimit))
  }

  const handleGraduatesPageChange = page => {
    const offset = graduatesLimit * (page - 1)
    setDisplayGraduates(works.slice(offset, offset + graduatesLimit))
  }

  return (
    <div>
      <Header />
      <Title> Наші випускники </Title>
      <div className="graduates__page">
        <div className="container">
          <div className="graduates__inner">
            {graduates.map((graduate, index) => (
              <div className="graduates__inner__item" key={index.toString()}>
                <img
                  src={graduate.photo}
                  alt="1"
                  className="graduates__item__image"
                />
                <h1 className="graduates__item__title"> {graduate.name} </h1>
                <p className="graduates__item__text"> {graduate.position} </p>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          items={displayGraduates.length}
          handlePageChange={handleGraduatesPageChange}
        />
      </div>
      <div className="works">
        <div className="container">
          <div className="works__title">
            <h1 className="works__text"> Роботи студентів </h1>
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
        <Pagination
          items={displayWorks.length}
          handlePageChange={handleWorksPageChange}
        />
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

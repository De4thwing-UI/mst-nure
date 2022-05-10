import React from "react"
import { graphql } from "gatsby"
import Header from "src/components/header/header"
import Footer from "src/components/footer/footer"
import News from "src/components/lastnews/lastnews"
import Pagination from "src/components/pagination/pagination"
import Title from "src/components/title/title"
import FirstImg from "src/images/works/1.png"
import SecondImg from "src/images/works/2.png"
import ThirdImg from "src/images/works/3.png"
import FourthImg from "src/images/works/4.png"
import FiveImg from "src/images/works/5.png"
import SixImg from "src/images/works/6.png"
import SevenImg from "src/images/works/7.png"
import EightImg from "src/images/works/8.png"
import NineImg from "src/images/works/9.png"
import "./works.css"
const WorksPage = () => {
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
      <Title> Роботи студентів </Title>{" "}
      <div className="works">
        <div className="container"> </div>{" "}
        <div className="graduates__works">
          <div className="container">
            <div className="graduates__works__inner">
              {" "}
              {works.map((work, index) => (
                <div className="graduate__works__item" key={index.toString()}>
                  <img
                    src={work.photo}
                    alt="1"
                    className="graduate__works__image"
                  />
                  <h1 className="graduate__works__item__title">
                    {" "}
                    {work.name}{" "}
                  </h1>{" "}
                  <div className="graduate__works__item__text">
                    {" "}
                    {work.position}{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <Pagination />
      </div>{" "}
      <News />
      <Footer />
    </div>
  )
}

export default WorksPage

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

import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./teacher.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import DeynekoImg from "src/images/teachers/janna.png"
import EgorovaImg from "src/images/teachers/egorova.png"
import KulishovaImg from "src/images/teachers/kulishova.png"
import LevikinImg from "src/images/teachers/levikin.png"
import ManakovImg from "src/images/teachers/manakov.png"
import TkachenkoImg from "src/images/teachers/tkachenko.png"
import BizukImg from "src/images/teachers/bizuk.png"
import VovkImg from "src/images/teachers/vovk.png"

const TeachersPage = () => {
  const teachers = [
    {
      name: "Дейнеко Ж. В.",
      photo: DeynekoImg,
      position: "Зав. кафедри",
    },
    {
      name: "Єгорова І.М.",
      photo: EgorovaImg,
      position: "Професор ХНУРЕ",
    },
    {
      name: "Кулішова Н.Є.",
      photo: KulishovaImg,
      position: "Професор ХНУРЕ",
    },
    {
      name: "Левикін І.В.",
      photo: LevikinImg,
      position: "Професор ХНУРЕ",
    },
    {
      name: "Манаков В.П.",
      photo: ManakovImg,
      position: "Професор ХНУРЕ",
    },
    {
      name: "Ткаченко В.П.",
      photo: TkachenkoImg,
      position: "Професор ХНУРЕ",
    },
    {
      name: "Бізюк А.В.",
      photo: BizukImg,
      position: "Доцент",
    },
    {
      name: "Вовк О.В,",
      photo: VovkImg,
      position: "Доцент",
    },
  ]
  return (
    <div>
      <Header />
      <Title> Склад кафедри </Title>
      <div className="features">
        <div className="container">
          <div className="features__inner">
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/people.svg"
                alt="Teachers"
              />
              <div className="features__title">
                24 <p className="features__text"> Викладача </p>
              </div>
            </div>
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/people.svg"
                alt="Teachers"
              />
              <div className="features__title">
                4 <p className="features__text"> Сумісника </p>
              </div>
            </div>
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/students.svg"
                alt="Teachers"
              />
              <div className="features__title">
                16 <p className="features__text"> Кандидатів наук </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="teachers__page">
        <div className="container">
          <div className="teachers__inner">
            
            {teachers.map((teacher, index) => (
              <div className="teachers__inner__item" key={index.toString()}>
                <img
                  className="teachers__item__image"
                  src={teacher.photo}
                  alt="teachers__photo"
                />
                <h1 className="teachers__item__title"> {teacher.name} </h1>
                <p className="teachers__item__text"> {teacher.position} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default TeachersPage

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

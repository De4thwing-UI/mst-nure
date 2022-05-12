import React from "react"
import { graphql } from "gatsby"

import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import TZMImg from "src/images/sections/TZM.png"
import WEBImg from "src/images/sections/WEB.png"
import OTIImg from "src/images/sections/OTI.png"
import SecurityImg from "src/images/sections/Security.png"
import "./sections.css"
const SectionsPage = () => {
  const sections = [
    {
      name: "Матеріали та технології в полиграфії",
      photo: TZMImg,
      teacher: "Викладач: проф. Григорьев А.В.",
      day: "Среда, 9:30 – 11:05,",
      audition: "ауд.505і",
    },
    {
      name: "Web-технології",
      photo: WEBImg,
      teacher: "Викладач: проф. Єгорова І.М.",
      day: "Четвер,14:55 – 16:30,",
      audition: "ауд.508і",
    },
    {
      name: "Обробка текстової та графічної інформації, верстка",
      photo: OTIImg,
      teacher: "Викладачі: доц. Челомбітько В.Ф, доц. Дейнеко Ж.В.",
      day: "Четвер,14:55 – 16:30,",
      audition: "ауд.508і",
    },
    {
      name: "Захист інформації в електронних і друкованих виданнях",
      photo: SecurityImg,
      teacher: "Викладач: проф. Бізюк А.В.",
      day: "Четвер,14:55 – 16:30,",
      audition: "ауд.508і",
    },
  ]
  return (
    <div>
      <Header />
      <Title> Гуртки кафедри </Title>{" "}
      <div className="sections">
        <div className="container">
          <div className="sections__inner">
            {" "}
            {sections.map((section, index) => (
              <div className="sections__item" key={index.toString()}>
                <img
                  src={section.photo}
                  alt="News"
                  className="sections__image"
                />
                <div className="section__item__text">
                  <h1 className="section__item__title"> {section.name} </h1>{" "}
                  <p className="section__item__teacher"> {section.teacher} </p>{" "}
                </div>{" "}
                <div className="section__item__place">
                  <p className="section__item__day"> {section.day} </p>{" "}
                  <p className="section__item__audition">
                    {" "}
                    {section.audition}{" "}
                  </p>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <News />
      <Footer />
    </div>
  )
}
export default SectionsPage
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

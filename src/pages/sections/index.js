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
import { Trans } from "react-i18next"
const SectionsPage = () => {
  const sections = [
    {
      name: "Materials and technologies in printing",
      photo: TZMImg,
      teacher: "Teacher: prof. Hryhoryev A.V.",
      day: "Wed., 9:30 - 11:05,",
      audition: "aud. 505i",
    },
    {
      name: "Web technologies",
      photo: WEBImg,
      teacher: "Teacher: prof. Yehorova I.M.",
      day: "Thursday, 14:55 – 16:30,",
      audition: "aud. 508i",
    },
    {
      name: "Processing of text and graphic information, typesetting",
      photo: OTIImg,
      teacher: "Teachers: Assoc. Chelombitko V.F., Assoc. Deineko Zh.V.",
      day: "Thursday, 14:55 – 16:30,",
      audition: "aud. 508i",
    },
    {
      name: "Protection of information in electronic and printed publications",
      photo: SecurityImg,
      teacher: "Викладач: проф. Бізюк А.В.",
      day: "Thursday, 14:55 – 16:30,",
      audition: "aud. 508i",
    },
  ]
  return (
    <div>
      <Header />
      <Title>
        <Trans>Circles of the department</Trans>
      </Title>
      <div className="sections">
        <div className="container">
          <div className="sections__inner">
            {sections.map((section, index) => (
              <div className="sections__item" key={index.toString()}>
                <img
                  src={section.photo}
                  alt="News"
                  className="sections__image"
                />
                <div className="section__item__text">
                  <h1 className="section__item__title">
                    <Trans>{section.name}</Trans>
                  </h1>
                  <p className="section__item__teacher">
                    <Trans>{section.teacher}</Trans>
                  </p>
                </div>
                <div className="section__item__place">
                  <p className="section__item__day">
                    <Trans>{section.day}</Trans>
                  </p>
                  <p className="section__item__audition">
                    <Trans>{section.audition}</Trans>
                  </p>
                </div>
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

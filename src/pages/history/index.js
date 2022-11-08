import { graphql } from "gatsby"
import React, { useState } from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import "./history.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import FirstImg from "src/images/history/1944.png"
import SecondImg from "src/images/history/1977.png"
import ThirdImg from "src/images/history/1988.png"
import FourImg from "src/images/history/1989.png"
import FifthImg from "src/images/history/1997.png"
import SixthImg from "src/images/history/2004.png"
import SeventhImg from "src/images/history/2011.png"
import EightImg from "src/images/history/2015.png"
import NineImg from "src/images/history/2020.png"

const HistoryPage = () => {
  const histories = [
    {
      photo: FirstImg,
      year: "1944 y.",
      text: "1944",
    },
    {
      photo: SecondImg,
      year: "1977 y.",
      text: "1977",
    },
    {
      photo: ThirdImg,
      year: "1964 y. - 1988 y.",
      text: "1964 - 1988",
    },
    {
      photo: FourImg,
      year: "1989 y.",
      text: "From 1988 to the present, the department is headed by a graduate of KhIRE, professor V.P. Tkachenko, who, continuing the best traditions of the department, directed his efforts to improving educational and methodological work, as well as to the development of scientific work at the department in new areas such as «GIS - technologies»,«Computer graphic systems». In 1989, the« Engineering Graphics» department was joined by the« Design of Radio - Electronic Equipment Mechanisms»(«Mechanics») department,whose teachers are prof.P.G.Romanii,Assoc.Sinotin A.M.",
    },
    {
      photo: FifthImg,
      year: "1997 y. - 2002 y.",
      text: "1997-2002",
    },
    {
      photo: SixthImg,
      year: "1998 y.-2004 y.",
      text: "1998-2004",
    },
    {
      photo: SeventhImg,
      year: "2011 y.",
      text: "2011",
    },
    {
      photo: EightImg,
      year: "2015 y.",
      text: "2015",
    },
    {
      photo: NineImg,
      year: "2020 y.",
      text: "2020",
    },
  ]
  return (
    <div>
      <Header />
      <Title> <Trans>History of the department</Trans> </Title>
      <div className="history">
        <div className="container">
          <div className="history__inner">
            <ul className="history__timeline">
              {histories.map((history, index) => (
                <li className="history__timeline__item" key={index.toString()}>
                  <img
                    className="history__image"
                    src={history.photo}
                    alt="History"
                  />
                  <div className="history__item__text">
                    <h1 className="history__item__title"><Trans>{history.year}</Trans> </h1>
                    <p className="history__item__suptitle"> <Trans>{history.text}</Trans></p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default HistoryPage

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

import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import GordyenkoImg from "src/images/commission/гордієнко.png"
import GonsonykImg from "src/images/commission/2.png"
import AntonykImg from "src/images/commission/3.png"
import AndreevImg from "src/images/commission/4.png"
import VinichenkoImg from "src/images/commission/5.png"
import GordeevImg from "src/images/commission/6.png"
import BorysenkoImg from "src/images/commission/7.png"
import BorysovImg from "src/images/commission/8.png"
import OneImg from "src/images/commission/11.png"
import TwoImg from "src/images/commission/12.png"
import ThreeImg from "src/images/commission/13.png"
import FourImg from "src/images/commission/14.png"


const CommissionPage = () => {
  const commissions = [
    {
      name: "Ігор Рубан",
      photo: GordyenkoImg,
      role: "Голова приймальної комісії,",
    },
    {
      name: "Андрій Єрохін",
      photo: GonsonykImg,
      role: "Заступник голови комісії",
    },
    {
      name: "Кирій Валентина",
      photo: AntonykImg,
      role: "Член комісії",
    },
    {
      name: "Аркадій Снігуров",
      photo: AndreevImg,
      role: "Член комісії",
    },
    {
      name: "Олексій Лановий",
      photo: VinichenkoImg,
      role: "Член комісії",
    },
    {
      name: "Олег Золотухін",
      photo: GordeevImg,
      role: "Член комісії",
    },
    {
      name: "Олег Дацок",
      photo: BorysenkoImg,
      role: "Член комісії",
    },
    {
      name: "Євгенія Федоренко",
      photo: BorysovImg,
      role: "Член комісії",
    },
    {
      name: "Діана Руденко",
      photo: OneImg,
      role: "Член комісії",
    },
    {
      name: "Сичова Оксана",
      photo: TwoImg,
      role: "Член комісії",
    },
    {
      name: "Віталій Ткачов",
      photo: ThreeImg,
      role: "Член комісії",
    },
    {
      name: "Сергій Китаєнко",
      photo: FourImg,
      role: "Член комісії",
    },
  ]
  return (
    <div>
      <Header />
      <Title>Постійна комісія УМР</Title>
      <div className="commission">
        <div className="container">
          <div className="commission__inner">
            {commissions.map((commission, index) => (
              <div className="commission__item" key={index.toString()}>
                <img
                  className="commission__image"
                  src={commission.photo}
                  alt="Comission"
                />
                <h1 className="commissions__name"> {commission.name}</h1>
                <p className="commissions__role">{commission.role}</p>
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

export default CommissionPage

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

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

const CommissionPage = () => {
  const commissions = [
    {
      name: "Гордієнко І.Б.",
      photo: GordyenkoImg,
      role: "Голова комісії",
    },
    {
      name: "Джонсонюк Д. С.",
      photo: GonsonykImg,
      role: "Член комісії",
    },
    {
      name: "Антонюк В.С.",
      photo: AntonykImg,
      role: "Член комісії",
    },
    {
      name: "Андреєв С.В.",
      photo: AndreevImg,
      role: "Член комісії",
    },
    {
      name: "Винниченко Р.Т.",
      photo: VinichenkoImg,
      role: "Член комісії",
    },
    {
      name: "Гордеєв Ж.Р.",
      photo: GordeevImg,
      role: "Член комісії",
    },
    {
      name: "Борисенко М.Р.",
      photo: BorysenkoImg,
      role: "Член комісії",
    },
    {
      name: "Борисов. П.Д.",
      photo: BorysovImg,
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

import React, { useState } from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
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
import ThirthinImg from "src/images/works/13.jpg"
import FourthinImg from "src/images/works/14.jpg"
import FifteenImg from "src/images/works/15.jpg"


const GraduatePage = () => {
  const graduates = [
    {
      name: "Gapich Anton",
      photo: GapichImg,
      position: "VPVPS-18-2",
      link: "https://www.linkedin.com/in/anton-gapich-511455180/",
      social: "Linkedin",
      employee: "UI/UX designer - TheRoom design boutique",
    },
    {
      name: "Natalia S. Gurieva",
      photo: LeviImg,
      link: "https://www.facebook.com/natalia.gurieva.7",
      social: "Facebook",
      employee:
        "Professor, PhD in Information Technology, Department of Art and Management, Division of Engineering, University of Guanajuato,",
    },
    {
      name: "Kateryna Kobylnyk",
      photo: YarmolaImg,
      position:
        "She is engaged in scientific research in the field of information technology. She is the author of over 50 scientific publications, including those abroad.",
    },
    {
      name: "Ivan Dmytrovych Golyakov",
      photo: YaremchukImg,
      position:
        "I graduated from Kharkiv National University of Radio Electronics in 2014. Before finishing my studies, I founded a startup and a design studio. I worked as a Digital Designer at the creative agency Arriba! and as an Interaction Designer at Global Logic. I have won numerous awards for design and advertising both in Ukraine and abroad. I taught graphic design at the advertising and design school 'Bagazh'. I studied Digital Experience Design at Hyper Island in Manchester and received a Master of Arts degree in the UK. I have conducted many workshops and lectures on design, teamwork, and facilitation. In 2018, I completed a Growth Marketing course in Amsterdam and became a co-founder of the worldwide online school for Motion Design, motiondesign.school",
      link: "https://www.facebook.com/holiakov",
      social: "Facebook",
    },
    {
      name: "Oksana Fedorenko",
      photo: IbraImg,
      position:
        "I graduated from Kharkiv National University of Radio Electronics in 2014. My career history includes the following: October 2013 to April 2014 - Astron+ LLC, position: prepress engineer. Since May 2014 - Walstead Starachowice (formerly RR Donnelley Starachowice), Poland, position: Colour Specialist.",
      social: "Facebook",
      link: "https://www.linkedin.com/in/oksana-fedorenko-a9434176/",
    },
    {
      name: "Kateryna Gorokhova",
      photo: RomanukImg,
      position:
        "1-й Associate Manager at Netlight Consulting AB Hamburg Germany",
      social: "Facebook",
      link: "https://www.facebook.com/katerina.gorokhova",
    },
    {
      name: "Alina Dmytrenko",
      photo: KudzoImg,
      position: "1st Designer – All Stars DC",
      social: "Facebook",
      link: "https://www.facebook.com/alina.dmitrenko.96",
    },
    {
      name: "Ganna Sereda",
      photo: ZinaImg,
      position: "Vector Illustrator at Graphic Designer",
      social: "Facebook",
      link: "https://www.facebook.com/seredaganna",
    },
  ]
  const works = [
    {
      name: "Maryna Kononenko",
      photo: ThirthinImg,
      position: "Business card",
    },
    {
      name: "Andrii Gordienko",
      photo: FourthinImg,
      position: "Poster",
    },
    {
      name: "Natalya Zmiivska",
      photo: FifteenImg,
      position: "Social poster",
    },
    {
      name: "Gapich Anton",
      photo: FirstImg,
      position: "Illustration",
    },
    {
      name: "Tatyana Isayenko",
      photo: SecondImg,
      position: "Illustration",
    },
    {
      name: "Anna Muzychuk",
      photo: ThirdImg,
      position: "Social poster",
    },
    {
      name: "Gapich Anton",
      photo: FourthImg,
      position: "Mobile application",
    },
    {
      name: "Anna Muzychuk",
      photo: FiveImg,
      position: "Website",
    },
    {
      name: "Oleksandr Zinchenko",
      photo: SixImg,
      position: "Website",
    },
    {
      name: "Gapich Anton",
      photo: SevenImg,
      position: "Website",
    },
    {
      name: "Andriy Yarmolenko",
      photo: EightImg,
      position: "Illustration",
    },
    {
      name: "Dmytro Melnichenko",
      photo: NineImg,
      position: "Illustration",
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
      <Title>
        {" "}
        <Trans>Our graduates</Trans>{" "}
      </Title>{" "}
      <div className="graduates__page">
        <div className="container">
          <div className="graduates__inner">
            {" "}
            {graduates.map((graduate, index) => (
              <div className="graduates__inner__item" key={index.toString()}>
                <img
                  src={graduate.photo}
                  alt="1"
                  className="graduates__item__image"
                />
                <h1 className="graduates__item__title">
                  {" "}
                  <Trans>{graduate.name}</Trans>{" "}
                </h1>{" "}
                <p className="graduates__item__text">
                  {" "}
                  <Trans>{graduate.position}</Trans>
                </p>{" "}
                <p className="graduates__item__text">
                  {" "}
                  <Trans>{graduate.employee}</Trans>
                </p>{" "}
                <a href={graduate.link} target="_blank">
                  <p className="graduates__item__text">
                    {" "}
                    <Trans>{graduate.social}</Trans>
                  </p>{" "}
                </a>
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <Pagination
          items={displayGraduates.length}
          handlePageChange={handleGraduatesPageChange}
        />{" "}
      </div>{" "}
      <div className="works">
        <div className="container">
          <div className="works__title">
            <h1 className="works__text"> Роботи студентів </h1>{" "}
          </div>{" "}
        </div>{" "}
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
        <Pagination
          items={displayWorks.length}
          handlePageChange={handleWorksPageChange}
        />{" "}
      </div>{" "}
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

import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
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
import GrygorevImg from "src/images/teachers/grygorev.png"
import EvstratovImg from "src/images/teachers/evstratov.png"
import KolesnikovaImg from "src/images/teachers/kolesnikova.png"
import ChelombitkoImg from "src/images/teachers/chelombitko.png"
import BelchevaImg from "src/images/teachers/belcheva.png"
import DorofeevaImg from "src/images/teachers/dorofeeva.png"
import TabakovaImg from "src/images/teachers/tabakova.png"
import ZelenyyImg from "src/images/teachers/zelenyy.png"
import ChebotaryovaImg from "src/images/teachers/chebotareva.png"
import BokarevaImg from "src/images/teachers/bokareva.png"
import GubaImg from "src/images/teachers/guba.png"
import YacenkoImg from "src/images/teachers/yacenko.png"
import LihachovImg from "src/images/teachers/lihachov.png"
import ParamonovImg from "src/images/teachers/paramonov.png"
import KraevskaImg from "src/images/teachers/kraevska.png"

const TeachersPage = () => {
  const { t } = useTranslation()
  const teachers = [
    {
      name: "Deineko Zh. V.",
      photo: DeynekoImg,
      position: "Chief department",
      link: "https://nure.ua/staff/zhanna-valentinivna-deyneko",
    },
    {
      name: "Yehorova I.M.",
      photo: EgorovaImg,
      position: "Professor Khnure",
      link: "https://nure.ua/staff/irina-mikolayivna-yegorova",
    },
    {
      name: "Kulishova N.E.",
      photo: KulishovaImg,
      position: "Professor Khnure",
      link: "https://nure.ua/staff/nonna-yevgenivna-kulishova",
    },
    {
      name: "Levykin I.V.",
      photo: LevikinImg,
      position: "Professor Khnure",
      link: "hhttps://nure.ua/staff/igor-viktorovich-levikin",
    },
    {
      name: "Manakov V.P.",
      photo: ManakovImg,
      position: "Professor Khnure",
      link: "https://nure.ua/staff/volodimir-pavlovich-manakov",
    },
    {
      name: "Tkachenko V.P.",
      photo: TkachenkoImg,
      position: "Professor Khnure",
      link: "https://nure.ua/staff/volodimir-pilipovich-tkachenko",
    },
    {
      name: "Bizyuk A.V.",
      photo: BizukImg,
      position: "Docent",
      link: "https://nure.ua/staff/andriy-valeriyovich-bizyuk",
    },
    {
      name: "Vovk O.V.",
      photo: VovkImg,
      position: "Docent",
      link: "https://nure.ua/staff/oleksandr-volodimirovich-vovk",
    },
    {
      name: "Grigoriev O.V.",
      photo: GrygorevImg,
      position: "Professor Khnure",
      link: "https://nure.ua/staff/oleksandr-viktorovich-grigor-yev",
    },
    {
      name: "Evstratov M.D.",
      photo: EvstratovImg,
      position: "Docent",
      link: "https://nure.ua/staff/mikola-dmitrovich-yevstratov",
    },
    {
      name: "Kolesnikova T.A.",
      photo: KolesnikovaImg,
      position: "Docent",
      link: "https://nure.ua/staff/tetyana-anatoliyivna-kolesnikova",
    },
    {
      name: "Chelombitko V.F.",
      photo: ChelombitkoImg,
      position: "Docent",
      link: "https://nure.ua/staff/viktor-fedorovich-chelombitko",
    },
    {
      name: "Belcheva A.V.",
      photo: BelchevaImg,
      position: "Docent",
      link: "https://nure.ua/staff/ganna-volodimirivna-byelcheva",
    },
    {
      name: "Dorofeeva Yu.S.",
      photo: DorofeevaImg,
      position: "Docent",
      link: "https://nure.ua/staff/yuliya-semenivna-gubnitska",
    },
    {
      name: "Tabakova I.S.",
      photo: TabakovaImg,
      position: "Docent",
      link: "https://nure.ua/staff/irina-stanislavivna-tabakova",
    },
    {
      name: "Zeleny O.P",
      photo: ZelenyyImg,
      position: "Senior Lecturer ",
      link: "https://nure.ua/staff/oleksandr-pavlovich-zeleniy",
    },
    {
      name: "Chebotaryova I.B.",
      photo: ChebotaryovaImg,
      position: "Senior Lecturer ",
      link: "https://nure.ua/staff/irina-borisivna-chebotarova",
    },
    {
      name: "Bokareva Yu.S.",
      photo: BokarevaImg,
      position: "Senior Lecturer ",
      link: "https://nure.ua/staff/yuliya-sergiyivna-bokaryeva",
    },
    {
      name: "Guba M.I.",
      photo: GubaImg,
      position: "Senior Lecturer ",
      link: "https://nure.ua/staff/mikola-ivanovich-guba",
    },
    {
      name: "Yatsenko L.O.",
      photo: YacenkoImg,
      position: "Senior Lecturer ",
      link: "https://nure.ua/staff/larisa-oleksandrivna-yatsenko",
    },
    {
      name: "Likhachev S.O.",
      photo: LihachovImg,
      position: "Assistant",
      link: "https://nure.ua/staff/sergiy-oleksandrovich-lihachov",
    },
    {
      name: "Парамонов А.К.",
      photo: ParamonovImg,
      position: "Assistant",
      link: "https://nure.ua/staff/anton-kostyantinovich-paramonov",
    },
    {
      name: "Краєвська Н.О.",
      photo: KraevskaImg,
      position: "Assistant",
      link: "https://nure.ua/staff/natalija-oleksandrivna-kraievska",
    },
  ]
  return (
    <div>
      <Header />
      <Title>
        {" "}
        <Trans>The composition of the department</Trans>{" "}
      </Title>{" "}
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
                24 <p className="features__text"> <Trans>Teachers</Trans> </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/people.svg"
                alt="Teachers"
              />
              <div className="features__title">
                1 <p className="features__text"> <Trans>Doctor of Science</Trans> </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="features__item">
              <StaticImage
                className="features__icon"
                src="../images/features/students.svg"
                alt="Teachers"
              />
              <div className="features__title">
                16 <p className="features__text"> <Trans>Candidates of Sciences</Trans> </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="teachers__page">
        <div className="container">
          <div className="teachers__inner">
            {" "}
            {teachers.map((teacher, index) => (
              <div className="teachers__inner__item" key={index.toString()}>
                <img
                  className="teachers__item__image"
                  src={teacher.photo}
                  alt="teachers__photo"
                />
                <a href={teacher.link} target="_blank">
                  <h1 className="teachers__item__title"> <Trans>{teacher.name}</Trans> </h1>{" "}
                </a>{" "}
                <p className="teachers__item__text"> <Trans> {teacher.position} </Trans> </p>{" "}
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

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
  const teachers = [
    {
      name: "Дейнеко Ж. В.",
      photo: DeynekoImg,
      position: "Зав. кафедри",
      link: "https://nure.ua/staff/zhanna-valentinivna-deyneko",
    },
    {
      name: "Єгорова І.М.",
      photo: EgorovaImg,
      position: "Професор ХНУРЕ",
      link: "https://nure.ua/staff/irina-mikolayivna-yegorova",
    },
    {
      name: "Кулішова Н.Є.",
      photo: KulishovaImg,
      position: "Професор ХНУРЕ",
      link: "https://nure.ua/staff/nonna-yevgenivna-kulishova",
    },
    {
      name: "Левикін І.В.",
      photo: LevikinImg,
      position: "Професор ХНУРЕ",
      link: "hhttps://nure.ua/staff/igor-viktorovich-levikin",
    },
    {
      name: "Манаков В.П.",
      photo: ManakovImg,
      position: "Професор ХНУРЕ",
      link: "https://nure.ua/staff/volodimir-pavlovich-manakov",
    },
    {
      name: "Ткаченко В.П.",
      photo: TkachenkoImg,
      position: "Професор ХНУРЕ",
      link: "https://nure.ua/staff/volodimir-pilipovich-tkachenko",
    },
    {
      name: "Бізюк А.В.",
      photo: BizukImg,
      position: "Доцент",
      link: "https://nure.ua/staff/andriy-valeriyovich-bizyuk",
    },
    {
      name: "Вовк О.В.",
      photo: VovkImg,
      position: "Доцент",
      link: "https://nure.ua/staff/oleksandr-volodimirovich-vovk",
    },
    {
      name: "Григор’єв О.В.",
      photo: GrygorevImg,
      position: "Професор ХНУРЕ",
      link: "https://nure.ua/staff/oleksandr-viktorovich-grigor-yev",
    },
    {
      name: "Євстратов М.Д.",
      photo: EvstratovImg,
      position: "Доцент",
      link: "https://nure.ua/staff/mikola-dmitrovich-yevstratov",
    },
    {
      name: "Колесникова Т.А.",
      photo: KolesnikovaImg,
      position: "Доцент",
      link: "https://nure.ua/staff/tetyana-anatoliyivna-kolesnikova",
    },
    {
      name: "Челомбітько В.Ф.",
      photo: ChelombitkoImg,
      position: "Доцент",
      link: "https://nure.ua/staff/viktor-fedorovich-chelombitko",
    },
    {
      name: "Бельчева А.В.",
      photo: BelchevaImg,
      position: "Доцент",
      link: "https://nure.ua/staff/ganna-volodimirivna-byelcheva",
    },
    {
      name: "Дорофєєва Ю.С.",
      photo: DorofeevaImg,
      position: "Доцент",
      link: "https://nure.ua/staff/yuliya-semenivna-gubnitska",
    },
    {
      name: "Табакова І.С.",
      photo: TabakovaImg,
      position: "Доцент",
      link: "https://nure.ua/staff/irina-stanislavivna-tabakova",
    },
    {
      name: "Зелений О.П.",
      photo: ZelenyyImg,
      position: "Старший викладач",
      link: "https://nure.ua/staff/oleksandr-pavlovich-zeleniy",
    },
    {
      name: "Чеботарьова І.Б.",
      photo: ChebotaryovaImg,
      position: "Старший викладач",
      link: "https://nure.ua/staff/irina-borisivna-chebotarova",
    },
    {
      name: "Бокарєва Ю.С.",
      photo: BokarevaImg,
      position: "Старший викладач",
      link: "https://nure.ua/staff/yuliya-sergiyivna-bokaryeva",
    },
    {
      name: "Губа М.І.",
      photo: GubaImg,
      position: "Старший викладач",
      link: "https://nure.ua/staff/mikola-ivanovich-guba",
    },
    {
      name: "Яценко Л.О.",
      photo: YacenkoImg,
      position: "Старший викладач",
      link: "https://nure.ua/staff/larisa-oleksandrivna-yatsenko",
    },
    {
      name: "Ліхачов С.О.",
      photo: LihachovImg,
      position: "Асистент",
      link: "https://nure.ua/staff/sergiy-oleksandrovich-lihachov",
    },
    {
      name: "Парамонов А.К.",
      photo: ParamonovImg,
      position: "Асистент",
      link: "https://nure.ua/staff/anton-kostyantinovich-paramonov",
    },
    {
      name: "Краєвська Н.О.",
      photo: KraevskaImg,
      position: "Асистент",
      link: "https://nure.ua/staff/natalija-oleksandrivna-kraievska",
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
                1 <p className="features__text"> Доктор наук</p>
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
                <a href={teacher.link} target="_blank">
                  <h1 className="teachers__item__title"> {teacher.name} </h1>
                </a>
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

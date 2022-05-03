import React from "react"
import { graphql, Link } from "gatsby"
import "./science-work.css"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import News from "../../components/lastnews/lastnews"
import Title from "../../components/title/title"

const ScienceworkPage = () => {
  const tables = [
    {
      number: "01",
      measures: "Ніч науки",
      term: "Вересень, 2021, м. Харків",
      responsible: "Зелений О.П.",
    },
    {
      number: "02",
      measures: "Український студентський фестиваль реклами",
      term: "Листопад 2021, м. Київ",
      responsible: "Бокарєва Ю.С.",
    },
    {
      number: "03",
      measures:
        "Міжнародний конкурс студентських наукових робіт з поліграфії, видавничої справи «Молодь і поліграфія»",
      term: "Листопад 2021, м. Київ",
      responsible: "Бокарєва Ю.С.",
    },
    {
      number: "04",
      measures: "Олімпіада з курсу «Інженерна графіка»",
      term: "Грудень 2021, м. Харків, ХНУРЕ",
      responsible: "Челомбітько В.Ф.",
    },
    {
      number: "05",
      measures: "Міжнародний конкурс упаковки «Упаковка майбутнього 2021»",
      term: "Грудень, 2021-Січень, 2022, м. Київ",
      responsible: "Бокарєва Ю.С.",
    },
    {
      number: "06",
      measures:
        "Всеукраїнський конкурс студентських наукових робіт з галузі науки «Прикладна геометрія, інженерна графіка та ергономіка»",
      term: "Січень, 2022, м. Харків, ХПІ",
      responsible: "Челомбітько В.Ф.",
    },
    {
      number: "07",
      measures:
        "Міжнародний молодіжний форум «Радіоелектроніка і молодь в ХХІ ст.»»",
      term: "Квітень, 2022, м. Харків, ХНУРЕ",
      responsible: "Вовк О.В.",
    },
    {
      number: "08",
      measures:
        "Виставка технічної творчості молоді на Міжнародного молодіжного форуму «Радіоелектроніка і молодь в ХХІ ст.»",
      term: "Квітень, 2022, м. Харків, ХНУРЕ",
      responsible: "Вовк О.В.",
    },
    {
      number: "09",
      measures:
        "Міжнародна студентська наукова конференція «Друкарство молоде»",
      term: "Квітень, 2022, м. Київ, ВПІ НТУУ «КПІ»",
      responsible: "Вовк О.В.",
    },
    {
      number: "10",
      measures:
        "Всеукраїнський конкурс студентських наукових робіт з природничих, технічних і гуманітарних наук 2021-2022 н.р.",
      term: "Квітень, 2022, м. Київ, ВПІ НТУУ «КПІ»",
      responsible: "Вовк О.В.",
    },
    {
      number: "11",
      measures:
        "Всеукраїнський конкурс студентських наукових робіт по спеціальності 186 «Видавництво та поліграфія»",
      term: "Квітень, 2022, м. Київ, ВПІ НТУУ «КПІ»",
      responsible: "Вовк О.В.",
    },
    {
      number: "12",
      measures:
        "VII Міжнародна науково-технічна конференція «Поліграфічні, мультимедійні та web-технології».Молодіжна школа-семінар",
      term: "Травень, 2022, м. Харків, ХНУРЕ",
      responsible: "Вовк О.В.",
    },
  ]
  return (
    <div>
      <Header />
      <Title>Науково-дослідницька робота</Title>
      <div className="science-work">
        <div className="container">
          <div className="science-work__title">
            План кафедри медіасистем та технології з науково-дослідної роботи
            студентів на 2021/2022 Навчальний рік
          </div>
          <div className="science-work__inner">
            <table className="science-work__table">
              <tr className="science-work__item">
                <th className="science-work__cell">№</th>
                <th className="science-work__cell">Заходи</th>
                <th className="science-work__cell">Термін виконання</th>
                <th className="science-work__cell">Відповідальний</th>
              </tr>
              {tables.map((table, index) => (
                <tr className="science-work__item" key={index.toString()}>
                  <th className="science-work__column">{table.number}</th>
                  <th className="science-work__column">{table.measures}</th>
                  <th className="science-work__column">{table.term}</th>
                  <th className="science-work__column">{table.responsible}</th>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default ScienceworkPage

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

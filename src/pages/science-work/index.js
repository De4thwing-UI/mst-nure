import React from "react"
import { graphql } from "gatsby"
import "./science-work.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"
const ScienceworkPage = () => {
  const tables = [
    {
      number: "01",
      measures: "Science Night",
      term: "September 2021, Kharkiv city",
      responsible: "Zeleny O.P.",
    },
    {
      number: "02",
      measures: "Ukrainian Student Advertising Festival",
      term: "November 2021, Kyiv city",
      responsible: "Bokareva Yu.S.",
    },
    {
      number: "03",
      measures:
        "International Student Scientific Competition in Printing, Publishing and Graphic Arts 'Youth and Printing'",
      term: "November 2021, Kyiv city",
      responsible: "Bokareva Yu.S.",
    },
    {
      number: "04",
      measures: "Olympiad on the course 'Engineering Graphics'",
      term: "December 2021, Kharkiv city, NURE",
      responsible: "Chelombitko V.F.",
    },
    {
      number: "05",
      measures: "International Packaging Design Competition 'Packaging of the Future 2021'",
      term: "Грудень, 2021-Січень, 2022, м. Київ",
      responsible: "Bokareva Yu.S.",
    },
    {
      number: "06",
      measures:
        "All-Ukrainian Competition of Student Scientific Works in the Field of Applied Geometry, Engineering Graphics, and Ergonomics",
      term: "January 2022, Kharkiv city, Kharkiv Polytechnic Institute",
      responsible: "Chelombitko V.F.",
    },
    {
      number: "07",
      measures:
        "International Youth Forum 'Radio Electronics and Youth in the 21st Century'",
      term: "April 2022, Kharkiv city, NURE",
      responsible: "Vovk O.V.",
    },
    {
      number: "08",
      measures:
        "Exhibition of Technical Creativity of Youth at the International Youth Forum 'Radio Electronics and Youth in the 21st Century'",
      term: "April 2022, Kharkiv city, NURE",
      responsible: "Vovk O.V.",
    },
    {
      number: "09",
      measures:
        "International Student Scientific Conference 'Printing is Young'",
      term: "April 2022, Kyiv city, Faculty of Printing and Publishing, KPI",
      responsible: "Vovk O.V.",
    },
    {
      number: "10",
      measures:
        "All-Ukrainian Competition of Student Scientific Works in Natural, Technical, and Humanities Sciences for the 2021-2022 academic year",
      term: "April 2022, Kyiv city, Faculty of Printing and Publishing, KPI",
      responsible: "Vovk O.V.",
    },
    {
      number: "11",
      measures:
        "All-Ukrainian Competition of Student Scientific Works in the field of specialty 186 'Publishing and Printing'",
      term: "April 2022, Kyiv city, Faculty of Printing and Publishing, KPI",
      responsible: "Vovk O.V.",
    },
    {
      number: "12",
      measures:
        "VII International Scientific and Technical Conference 'Printing, Multimedia, and Web Technologies' with Youth School-Seminar",
      term: "May 2022, Kharkiv, Ukraine, NURE",
      responsible: "Vovk O.V.",
    },
  ]
  return (
    <div>
      <Header />
      <Title>
        {" "}
        <Trans>Scientific - research work</Trans>{" "}
      </Title>
      <div className="science-work">
        <div className="container">
          <div className="science-work__title">
            <Trans>
              Plan of the Department of Media Systems and Technologies for
              Student Research Work for the 2021/2022 Academic Year
            </Trans>
          </div>
          <div className="science-work__inner">
            <table className="science-work__table">
              <tr className="science-work__item">
                <th className="science-work__cell"> № </th>
                <th className="science-work__cell">
                  {" "}
                  <Trans>Activities</Trans>{" "}
                </th>
                <th className="science-work__cell">
                  {" "}
                  <Trans>Execution period or timeframe</Trans>{" "}
                </th>
                <th className="science-work__cell">
                  {" "}
                  <Trans>Responsible</Trans>{" "}
                </th>
              </tr>
              {tables.map((table, index) => (
                <tr className="science-work__item" key={index.toString()}>
                  <th className="science-work__column"> <Trans>{table.number}</Trans>  </th>
                  <th className="science-work__column"> <Trans>{table.measures}</Trans> </th>
                  <th className="science-work__column"> <Trans>{table.term}</Trans> </th>
                  <th className="science-work__column"><Trans>{table.responsible}</Trans></th>
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

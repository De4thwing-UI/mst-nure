import React from "react"
import { graphql } from "gatsby"
import "./diploma.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"
const DiplomaPage = () => {
  const diplomas = [
    {
      number: "01",
      student: "Ампілогова Альбіна",
      group: "VPVPS-18-2",
      curator: "Bizyuk A.V.",
    },
    {
      number: "02",
      student: "Корікова Марія",
      group: "VPVPS-18-1",
      curator: "Bizyuk A.V.",
    },
    {
      number: "03",
      student: "Мотрук Софія",
      group: "VPVPS-18-1",
      curator: "Bizyuk A.V.",
    },
    {
      number: "04",
      student: "Сабадаш Влада",
      group: "VPVPS-18-1",
      curator: "Bizyuk A.V.",
    },
    {
      number: "05",
      student: "Ісаєнко Тетяна",
      group: "VPVPS-18-2",
      curator: "Bokareva Yu.S.",
    },
    {
      number: "06",
      student: "Лескова Євгенія",
      group: "VPVPS-18-1",
      curator: "Bokareva Yu.S.",
    },
    {
      number: "07",
      student: "Максимов Олексій",
      group: "VPVPS-18-3",
      curator: "Bokareva Yu.S.",
    },
    {
      number: "08",
      student: "Бабьяк Вікторія",
      group: "VPVPS-18-2",
      curator: "Vovk O.V.",
    },
    {
      number: "09",
      student: "Надточій Діана",
      group: "VPVPS-18-1",
      curator: "Vovk O.V.",
    },
    {
      number: "10",
      student: "Посохова Дар'я",
      group: "VPVPS-18-2",
      curator: "Vovk O.V.",
    },
    {
      number: "11",
      student: "Стадник Поліна",
      group: "VPVPS-18-3",
      curator: "Vovk O.V.",
    },
    {
      number: "12",
      student: "Вискребенцев Павло",
      group: "VPVPS-18-1",
      curator: "Grigoriev O.V.",
    },
    {
      number: "13",
      student: "Кочеткова Дар'я",
      group: "VPVPS-18-2",
      curator: "Grigoriev O.V.",
    },
    {
      number: "14",
      student: "Літвіновський Максим",
      group: "VPVPS-18-1",
      curator: "Grigoriev O.V.",
    },
    {
      number: "15",
      student: "Першин Віталій",
      group: "ВПВПСу-19-1",
      curator: "Grigoriev O.V.",
    },
    {
      number: "16",
      student: "Середа Валерія",
      group: "ВПВПСу-19-1",
      curator: "Grigoriev O.V.",
    },
    {
      number: "17",
      student: "Гапіч Антон",
      group: "VPVPS-18-2 ",
      curator: "Yehorova I.M.",
    },
    {
      number: "18",
      student: "Сухомлин Дмитро",
      group: "VPVPS-18-2 ",
      curator: "Yehorova I.M.",
    },
    {
      number: "19",
      student: "Данг Вієт",
      group: "VPVPS-18-2 ",
      curator: "Yehorova I.M.",
    },
    {
      number: "20",
      student: "Дейнека Дар'я",
      group: "VPVPS-18-2 ",
      curator: "Kulishova N.E.",
    },
    {
      number: "21",
      student: "Зуєвський Дмитро",
      group: "VPVPS-18-2 ",
      curator: "Kulishova N.E.",
    },
    {
      number: "22",
      student: "Портянченко Максим",
      group: "VPVPS-18-1",
      curator: "Kulishova N.E.",
    },
    {
      number: "23",
      student: "Гаманець Андрій",
      group: "VPVPS-18-2",
      curator: "Kulishova N.E.",
    },
    {
      number: "24",
      student: "Заворуєва Юлія",
      group: "VPVPS-18-2",
      curator: "Levykin I.V.",
    },
    {
      number: "25",
      student: "Сидоренко Поліна",
      group: "VPVPS-18-2",
      curator: "Levykin I.V.",
    },
    {
      number: "26",
      student: "Харат Лілія",
      group: "VPVPS-18-2",
      curator: "Levykin I.V.",
    },
    {
      number: "27",
      student: "Вікторов Микита",
      group: "VPVPS-18-3",
      curator: "Levykin I.V.",
    },
    {
      number: "28",
      student: "Бондар Діана",
      group: "VPVPS-18-1",
      curator: "Paramonov A.K.",
    },
    {
      number: "29",
      student: "Мельніченко Дмитро",
      group: "VPVPS-18-1",
      curator: "Paramonov A.K.",
    },
    {
      number: "30",
      student: "Музичук Ганна",
      group: "VPVPS-18-1",
      curator: "Paramonov A.K.",
    },
    {
      number: "31",
      student: "Березовська Вікторія",
      group: "ВПВПСу-19-1",
      curator: "Paramonov A.K.",
    },
    {
      number: "32",
      student: "Корнєєва Анастасія",
      group: "VPVPS-18-3",
      curator: "Tabakova I.S.",
    },
    {
      number: "33",
      student: "Маньшина Крістіна",
      group: "VPVPS-18-1",
      curator: "Tabakova I.S.",
    },
    {
      number: "34",
      student: "Пятницька Єва",
      group: "VPVPS-18-1",
      curator: "Tabakova I.S.",
    },
    {
      number: "35",
      student: "Токар Елєонора",
      group: "VPVPS-18-1",
      curator: "Tabakova I.S.",
    },
    {
      number: "36",
      student: "Клімова Олександра",
      group: "VPVPS-18-3",
      curator: "Tabakova I.S.",
    },
    {
      number: "37",
      student: "Зозуля Дар'я",
      group: "VPVPS-18-3",
      curator: "Tkachenko V.P.",
    },
    {
      number: "38",
      student: "Прокопенко Юлія",
      group: "VPVPS-18-3",
      curator: "Tkachenko V.P.",
    },
    {
      number: "39",
      student: "Гаманець Євген",
      group: "VPVPS-18-2",
      curator: "Tkachenko V.P.",
    },
    {
      number: "40",
      student: "Дорофєєва Катерина",
      group: "VPVPS-18-1",
      curator: "Chebotaryova I.B.",
    },
    {
      number: "41",
      student: "Доценко Дар'я",
      group: "VPVPS-18-2",
      curator: "Chebotaryova I.B.",
    },
    {
      number: "42",
      student: "Каспарова Марія",
      group: "VPVPS-18-1",
      curator: "Chebotaryova I.B.",
    },
    {
      number: "43",
      student: "Попова Карина",
      group: "VPVPS-18-2",
      curator: "Chebotaryova I.B.",
    },
    {
      number: "44",
      student: "Слуцкин Микита",
      group: "VPVPS-18-3",
      curator: "Chebotaryova I.B.",
    },
    {
      number: "45",
      student: "Узлова Аліса",
      group: "VPVPS-18-1",
      curator: "Chebotaryova I.B.",
    },
    {
      number: "46",
      student: "Шарун Дар'я",
      group: "VPVPS-18-1",
      curator: "Chebotaryova I.B.",
    },
    {
      number: "47",
      student: "Гуріна Катерина",
      group: "VPVPS-18-3",
      curator: "Chebotaryova I.B.",
    },
    {
      number: "48",
      student: "Гуріна Катерина",
      group: "VPVPS-18-3",
      curator: "Chelombitko V.F.",
    },
    {
      number: "49",
      student: "Михайлик Анастасія",
      group: "VPVPS-18-1",
      curator: "Chelombitko V.F.",
    },
    {
      number: "50",
      student: "М'якинин Олександр",
      group: "VPVPS-18-3",
      curator: "Chelombitko V.F.",
    },
    {
      number: "51",
      student: "Сидоренко Микита",
      group: "VPVPS-18-3",
      curator: "Chelombitko V.F.",
    },
    {
      number: "52",
      student: "Соломка Данило",
      group: "VPVPS-18-3",
      curator: "Chelombitko V.F.",
    },
    {
      number: "53",
      student: "Старцев Володимир",
      group: "VPVPS-18-2",
      curator: "Chelombitko V.F.",
    },
    {
      number: "54",
      student: "Дерев'янко Юлія",
      group: "VPVPS-18-3",
      curator: "Chelombitko V.F.",
    },
    {
      number: "55",
      student: "Чернай Марина",
      group: "VPVPS-18-2",
      curator: "Chelombitko V.F.",
    },
    {
      number: "56",
      student: "Лобода Анатолій",
      group: "ВПВПСу-19-1",
      curator: "Chelombitko V.F.",
    },
    {
      number: "57",
      student: "Григоренко Яна",
      group: "VPVPS-18-1",
      curator: "Yatsenko L.O.",
    },
    {
      number: "58",
      student: "Нескромний Роман",
      group: "VPVPS-18-3",
      curator: "Yatsenko L.O.",
    },
    {
      number: "59",
      student: "Пасинюк Ілля",
      group: "ВПВПСу-19-1",
      curator: "Yatsenko L.O.",
    },
    {
      number: "60",
      student: "Самойлов Микита",
      group: "ВПВПСу-19-1",
      curator: "Yatsenko L.O.",
    },
    {
      number: "61",
      student: "Бреус Володимир",
      group: "ВПВПСу-19-1",
      curator: "Yatsenko L.O.",
    },
  ]
  return (
    <div>
      <Header />
      <Title>
        <Trans>Graduation</Trans>
      </Title>
      <div className="diploma">
        <div className="container">
          <div className="diploma__title">
            <Trans>Supervisors of bachelor's theses</Trans>
          </div>
          <div className="diploma__inner">
            <table className="diploma__table">
              <tr className="diploma__item">
                <th className="diploma__cell">№</th>
                <th className="diploma__cell">
                  <Trans>Student</Trans>
                </th>
                <th className="diploma__cell">
                  <Trans>Group</Trans>
                </th>
                <th className="diploma__cell">
                  <Trans>Supervisor</Trans>
                </th>
              </tr>
              {diplomas.map((diploma, index) => (
                <tr className="diploma__item" key={index.toString()}>
                  <th className="diploma__column">
                    <Trans>{diploma.number}</Trans>
                  </th>
                  <th className="diploma__column">
                    <Trans>{diploma.student}</Trans>
                  </th>
                  <th className="diploma__column">
                    <Trans>{diploma.group}</Trans>
                  </th>
                  <th className="diploma__column">
                    <Trans>{diploma.curator}</Trans>
                  </th>
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

export default DiplomaPage

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

import React from "react"
import { graphql, Link } from "gatsby"
import "./diploma.css"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import News from "../../components/lastnews/lastnews"
import Title from "../../components/title/title"
const DiplomaPage = () => {
  const diplomas = [
    {
      number: "01",
      student: "Ампілогова Альбіна",
      group: "ВПВПС-18-2",
      curator: "Бізюк А.В.",
    },
    {
      number: "02",
      student: "Корікова Марія",
      group: "ВПВПС-18-1",
      curator: "Бізюк А.В.",
    },
    {
      number: "03",
      student: "Мотрук Софія",
      group: "ВПВПС-18-1",
      curator: "Бізюк А.В.",
    },
    {
      number: "04",
      student: "Сабадаш Влада",
      group: "ВПВПС-18-1",
      curator: "Бізюк А.В.",
    },
    {
      number: "05",
      student: "Ісаєнко Тетяна",
      group: "ВПВПС-18-2",
      curator: "Бокарєва Ю.С.",
    },
    {
      number: "06",
      student: "Лескова Євгенія",
      group: "ВПВПС-18-1",
      curator: "Бокарєва Ю.С.",
    },
    {
      number: "07",
      student: "Максимов Олексій",
      group: "ВПВПС-18-3",
      curator: "Бокарєва Ю.С.",
    },
    {
      number: "08",
      student: "Бабьяк Вікторія",
      group: "ВПВПС-18-2",
      curator: "Вовк О.В.",
    },
    {
      number: "09",
      student: "Надточій Діана",
      group: "ВПВПС-18-1",
      curator: "Вовк О.В.",
    },
    {
      number: "10",
      student: "Посохова Дар'я",
      group: "ВПВПС-18-2",
      curator: "Вовк О.В.",
    },
    {
      number: "11",
      student: "Стадник Поліна",
      group: "ВПВПС-18-3",
      curator: "Вовк О.В.",
    },
    {
      number: "12",
      student: "Вискребенцев Павло",
      group: "ВПВПС-18-1",
      curator: "Григор'єв О.В.",
    },
    {
      number: "13",
      student: "Кочеткова Дар'я",
      group: "ВПВПС-18-2",
      curator: "Григор'єв О.В.",
    },
    {
      number: "14",
      student: "Літвіновський Максим",
      group: "ВПВПС-18-1",
      curator: "Григор'єв О.В.",
    },
    {
      number: "15",
      student: "Першин Віталій",
      group: "ВПВПСу-19-1",
      curator: "Григор'єв О.В.",
    },
    {
      number: "16",
      student: "Середа Валерія",
      group: "ВПВПСу-19-1",
      curator: "Григор'єв О.В.",
    },
    {
      number: "17",
      student: "Гапіч Антон",
      group: "ВПВПС-18-2 ",
      curator: "Єгорова І.М.",
    },
    {
      number: "18",
      student: "Сухомлин Дмитро",
      group: "ВПВПС-18-2 ",
      curator: "Єгорова І.М.",
    },
    {
      number: "19",
      student: "Данг Вієт",
      group: "ВПВПС-18-2 ",
      curator: "Єгорова І.М.",
    },
    {
      number: "20",
      student: "Дейнека Дар'я",
      group: "ВПВПС-18-2 ",
      curator: "Кулішова Н.Є.",
    },
    {
      number: "21",
      student: "Зуєвський Дмитро",
      group: "ВПВПС-18-2 ",
      curator: "Кулішова Н.Є.",
    },
    {
      number: "22",
      student: "Портянченко Максим",
      group: "ВПВПС-18-1",
      curator: "Кулішова Н.Є.",
    },
    {
      number: "23",
      student: "Гаманець Андрій",
      group: "ВПВПС-18-2",
      curator: "Кулішова Н.Є.",
    },
    {
      number: "24",
      student: "Заворуєва Юлія",
      group: "ВПВПС-18-2",
      curator: "Левикін І.В.",
    },
    {
      number: "25",
      student: "Сидоренко Поліна",
      group: "ВПВПС-18-2",
      curator: "Левикін І.В.",
    },
    {
      number: "26",
      student: "Харат Лілія",
      group: "ВПВПС-18-2",
      curator: "Левикін І.В.",
    },
    {
      number: "27",
      student: "Вікторов Микита",
      group: "ВПВПС-18-3",
      curator: "Левикін І.В.",
    },
    {
      number: "28",
      student: "Бондар Діана",
      group: "ВПВПС-18-1",
      curator: "Парамонов А.К.",
    },
    {
      number: "29",
      student: "Мельніченко Дмитро",
      group: "ВПВПС-18-1",
      curator: "Парамонов А.К.",
    },
    {
      number: "30",
      student: "Музичук Ганна",
      group: "ВПВПС-18-1",
      curator: "Парамонов А.К.",
    },
    {
      number: "31",
      student: "Березовська Вікторія",
      group: "ВПВПСу-19-1",
      curator: "Парамонов А.К.",
    },
    {
      number: "32",
      student: "Корнєєва Анастасія",
      group: "ВПВПС-18-3",
      curator: "Табакова І.С.",
    },
    {
      number: "33",
      student: "Маньшина Крістіна",
      group: "ВПВПС-18-1",
      curator: "Табакова І.С.",
    },
    {
      number: "34",
      student: "Пятницька Єва",
      group: "ВПВПС-18-1",
      curator: "Табакова І.С.",
    },
    {
      number: "35",
      student: "Токар Елєонора",
      group: "ВПВПС-18-1",
      curator: "Табакова І.С.",
    },
    {
      number: "36",
      student: "Клімова Олександра",
      group: "ВПВПС-18-3",
      curator: "Табакова І.С.",
    },
    {
      number: "37",
      student: "Зозуля Дар'я",
      group: "ВПВПС-18-3",
      curator: "Ткаченко В.П.",
    },
    {
      number: "38",
      student: "Прокопенко Юлія",
      group: "ВПВПС-18-3",
      curator: "Ткаченко В.П.",
    },
    {
      number: "39",
      student: "Гаманець Євген",
      group: "ВПВПС-18-2",
      curator: "Ткаченко В.П.",
    },
    {
      number: "40",
      student: "Дорофєєва Катерина",
      group: "ВПВПС-18-1",
      curator: "Чеботарьова І.Б.",
    },
    {
      number: "41",
      student: "Доценко Дар'я",
      group: "ВПВПС-18-2",
      curator: "Чеботарьова І.Б.",
    },
    {
      number: "42",
      student: "Каспарова Марія",
      group: "ВПВПС-18-1",
      curator: "Чеботарьова І.Б.",
    },
    {
      number: "43",
      student: "Попова Карина",
      group: "ВПВПС-18-2",
      curator: "Чеботарьова І.Б.",
    },
    {
      number: "44",
      student: "Слуцкин Микита",
      group: "ВПВПС-18-3",
      curator: "Чеботарьова І.Б.",
    },
    {
      number: "45",
      student: "Узлова Аліса",
      group: "ВПВПС-18-1",
      curator: "Чеботарьова І.Б.",
    },
    {
      number: "46",
      student: "Шарун Дар'я",
      group: "ВПВПС-18-1",
      curator: "Чеботарьова І.Б.",
    },
    {
      number: "47",
      student: "Гуріна Катерина",
      group: "ВПВПС-18-3",
      curator: "Чеботарьова І.Б.",
    },
    {
      number: "48",
      student: "Гуріна Катерина",
      group: "ВПВПС-18-3",
      curator: "Челомбітько В.Ф.",
    },
    {
      number: "49",
      student: "Михайлик Анастасія",
      group: "ВПВПС-18-1",
      curator: "Челомбітько В.Ф.",
    },
    {
      number: "50",
      student: "М'якинин Олександр",
      group: "ВПВПС-18-3",
      curator: "Челомбітько В.Ф.",
    },
    {
      number: "51",
      student: "Сидоренко Микита",
      group: "ВПВПС-18-3",
      curator: "Челомбітько В.Ф.",
    },
    {
      number: "52",
      student: "Соломка Данило",
      group: "ВПВПС-18-3",
      curator: "Челомбітько В.Ф.",
    },
    {
      number: "53",
      student: "Старцев Володимир",
      group: "ВПВПС-18-2",
      curator: "Челомбітько В.Ф.",
    },
    {
      number: "54",
      student: "Дерев'янко Юлія",
      group: "ВПВПС-18-3",
      curator: "Челомбітько В.Ф.",
    },
    {
      number: "55",
      student: "Чернай Марина",
      group: "ВПВПС-18-2",
      curator: "Челомбітько В.Ф.",
    },
    {
      number: "56",
      student: "Лобода Анатолій",
      group: "ВПВПСу-19-1",
      curator: "Челомбітько В.Ф.",
    },
    {
      number: "57",
      student: "Григоренко Яна",
      group: "ВПВПС-18-1",
      curator: "Яценко Л.А.",
    },
    {
      number: "58",
      student: "Нескромний Роман",
      group: "ВПВПС-18-3",
      curator: "Яценко Л.А.",
    },
    {
      number: "59",
      student: "Пасинюк Ілля",
      group: "ВПВПСу-19-1",
      curator: "Яценко Л.А.",
    },
    {
      number: "60",
      student: "Самойлов Микита",
      group: "ВПВПСу-19-1",
      curator: "Яценко Л.А.",
    },
    {
      number: "61",
      student: "Бреус Володимир",
      group: "ВПВПСу-19-1",
      curator: "Яценко Л.А.",
    },
  ]
  return (
    <div>
      <Header />
      <Title>Дипломування</Title>
      <div className="diploma">
        <div className="container">
          <div className="diploma__title">
            Керівники дипломних робіт (Бакалавр)
          </div>
          <div className="diploma__inner">
            <table className="diploma__table">
              <tr className="diploma__item">
                <th className="diploma__cell">№</th>
                <th className="diploma__cell">Студент</th>
                <th className="diploma__cell">Группа</th>
                <th className="diploma__cell">Керівник</th>
              </tr>
              {diplomas.map((diploma, index) => (
                <tr className="diploma__item" key={index.toString()}>
                  <th className="diploma__column">{diploma.number}</th>
                  <th className="diploma__column">{diploma.student}</th>
                  <th className="diploma__column">{diploma.group}</th>
                  <th className="diploma__column">{diploma.curator}</th>
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

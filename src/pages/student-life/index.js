import React from "react"
import { graphql } from "gatsby"
import "./student-life.css"
import { StaticImage } from "gatsby-plugin-image"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
const StudentlifePage = () => {
  return (
    <div>
      <Header />
      <Title> Студентське життя </Title>{" "}
      <div className="student-life">
        <div className="container">
          <div className="student-life__inner">
            <div className="student-life__title">
              <h1 className="student-life__suptitle">
                Студентське життя цікаве і різноманітне{" "}
              </h1>{" "}
              <p className="student-life__text">
                У нас в університеті проходять різні заходи, концерти, конкурси,
                тренінги і майстер - класи, на яких студенти можуть показати
                себе і свої таланти, дізнатися щось нове.{" "}
              </p>{" "}
              <p className="student-life__text">
                У вересні наймасштабнішою і захоплюючою подією для
                першокурсників традиційно є Zip - квест.{" "}
              </p>{" "}
            </div>{" "}
            <StaticImage src="../../images/student-life/1.png" alt="News" />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="quest">
        <div className="container">
          <div className="quest__inner">
            <StaticImage src="../../images/student-life/2.png" alt="News" />
            <div className="quest__title">
              <h1 className="quest__suptitle"> Zip - квест </h1>{" "}
              <p className="quest__text">
                Захід, на якому по спеціально підготовленому маршруту учасники
                квесту подорожують по ХНУРЕ, знайомляться з його структурними
                підрозділами, беруть участь в конкурсах і просто весело
                проводять час.У цьому році кожна точка маршруту представляла
                країну, на точках учасники виконували завдання, які
                безпосередньо залежать від країни, і отримували за них бали.В
                організації квесту беруть участь волонтери - студенти, які
                допомагають групам орієнтуватися в університеті.Основна мета -
                подружити студентів між собою і познайомити зі структурою
                університету.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="miss-nure">
        <div className="container">
          <div className="miss__nure__title">
            <h1 className="miss__nure__suptitle"> Міс і містер ХНУРЕ 2017 </h1>{" "}
            <p className="miss__nure__text">
              22 квітня в Харківському національному університеті
              радіоелектроніки відбувся один з щорічних конкурсів краси і
              талантів "Міс і містер ХНУРЕ 2017", для проведення якого цього
              разу відчинив двері нічний клуб "Bolero"!Свято весни і краси
              зібрав понад 300 глядачів, які заповнили зал, з цікавістю і
              хвилюванням спостерігали за тим, що відбувається на сцені і
              вболівали за вподобаних учасників.{" "}
            </p>{" "}
          </div>{" "}
          <div className="miss-nure__inner">
            <StaticImage
              src="../../images/student-life/3.png"
              alt="News"
              className="miss-nure__image"
            />
            <StaticImage
              src="../../images/student-life/4.png"
              alt="News"
              className="miss-nure__image"
            />
            <StaticImage
              src="../../images/student-life/5.png"
              alt="News"
              className="miss-nure__image"
            />
            <StaticImage
              src="../../images/student-life/6.png"
              alt="News"
              className="miss-nure__image"
            />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="mrs__nure">
        <div className="container">
          <div className="mrs__nure__inner">
            <div className="mrs__nure__result">
              <h1 className="mrs__nure__title"> Підсумки конкурсу </h1>{" "}
              <p className="mrs__nure__text">
                За підсумками конкурсу Міс ХНУРЕ стала студентка факультету
                автоматики та комп 'ютеризованих технологій Марія Шацька, а
                Містером ХНУРЕ - Сергій Бутов, студент факультету комп 'ютерної
                інженерії та управління.{" "}
              </p>{" "}
              <p className="mrs__nure__text">
                Окремо були відзначені переможці конкурсу глядацьких симпатій,
                який відбувся за підтримки сайту 057. ua.Ними стали Черниш
                Єлизавета, факультет КН, а також Харламов Андрій.{" "}
              </p>{" "}
              <p className="mrs__nure__text">
                {" "}
                Конкурс оцінював не тільки красу, але ще й таланти наших
                студентів.Найталановитішими учасниками були визнані Бовенко
                Костянтин, який продемонстрував професійну режисерську роботу, а
                також Дарина Приходько, яка виступила в жанрі пісочної анімації.{" "}
              </p>{" "}
            </div>{" "}
            <div className="mrs__nure__trio">
              <h1 className="mrs__nure__trio__title">
                Доповнили трійки переможців:
              </h1>{" "}
              <u className="mrs__nure__trio__list">
                <li className="mrs__nure__trio__item">
                  <span> Перша Віце - міс - Дарина Приходько(ЕТ) </span>{" "}
                </li>{" "}
                <li className="mrs__nure__trio__item">
                  <span> Друга Віце - міс - Вероніка Пархоменко(КН) </span>{" "}
                </li>{" "}
                <li className="mrs__nure__trio__item">
                  <span> Перший Віце - містер - Денис Петрук(КН) </span>{" "}
                </li>{" "}
                <li className="mrs__nure__trio__item">
                  <span> Другий Віце - містер - Еммануель Біней(ПММ) </span>{" "}
                </li>{" "}
              </u>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="molod-life">
        <div className="container">
          <div className="molod-life__inner">
            <div className="molod-life__title">
              <h1 className="molod-life__suptitle">
                Радіоелектроніка та молодь у XXI столітті{" "}
              </h1>{" "}
              <p className="molod-life__text">
                У квітні в ХНУРЕ щорічно проходить Міжнародний молодіжний форум«
                Радіоелектроніка та молодь у XXI столітті».Форум проводиться за
                підтримки Міністерства освіти і науки України з 1997 року.{" "}
              </p>{" "}
              <p className="molod-life__text">
                Мета форуму - об 'єднання молодих учених, студентів та
                аспірантів різних країн навколо ідеї створення інформаційного
                простору, зміцнення між ними зв 'язків, довіри і
                співробітництва.{" "}
              </p>{" "}
            </div>{" "}
            <StaticImage src="../../images/student-life/7.png" alt="News" />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="exhibition">
        <div className="container">
          <div className="exhibition__inner">
            <h1 className="exhibition__title">
              Також в рамках Міжнародного молодіжного форуму« Радіоелектроніка
              та молодь у ХХІ столітті» в університеті проводиться виставка
              технічної творчості молоді.{" "}
            </h1>{" "}
            <p className="exhibition__text">
              На виставці традиційно представлені прилади, пристрої і програмно
              - апаратні розробки, розробки з програмного забезпечення, а також
              поліграфічні розробки студентів кафедри МСТ: плакати соціальної та
              екологічної тематики, журнальні та книжкові видання, виготовлені
              із застосуванням мультимедійних інформаційних технологій.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <News />
      <Footer />
    </div>
  )
}

export default StudentlifePage

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

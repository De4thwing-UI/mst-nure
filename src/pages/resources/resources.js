import React from "react"
import { graphql, Link } from "gatsby"
import "./resources.css"
import Header from "src/components/header/header"
import Footer from "src/components/footer/footer"
import News from "src/components/lastnews/lastnews"
import Title from "src/components/title/title"
const ResourcesPage = () => {
  return (
    <div>
      <Header />
      <Title> Ресурси </Title>{" "}
      <div className="resources">
        <div className="container">
          <div className="resources__title">
            Натиснувши по посиланню ви зможете знайти корисну інформацію,
            наукові джерела поліграфічної галузі.{" "}
          </div>{" "}
          <div className="resources__inner">
            <ul className="resources__list">
              <li className="resources__list__item">
                <a
                  href="http://www.ukrbook.net/"
                  className="resources__link"
                  target="_blank"
                >
                  Книжкова палата України{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://drukarstvo.org.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  Друкарство{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://bukvoid.com.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  Буквоіід{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://polykur.com.ua/doska/"
                  className="resources__link"
                  target="_blank"
                >
                  Поліграфічний кур 'єр{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="https://printus.com.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  Друкуй з нами{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://www.uapp.org/"
                  className="resources__link"
                  target="_blank"
                >
                  Українська асоціація видавців періодичної преси{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://www.redactor.in.ua/"
                  className="resources__link"
                >
                  Редакторский портал{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="https://www.publish.ru/"
                  className="resources__link"
                  target="_blank"
                >
                  PUBLISH / ДИЗАЙН.ВЕРСТКА.ПЕЧАТЬ{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://www.compuart.ru/"
                  className="resources__link"
                  target="_blank"
                >
                  КомпьюАрт{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
            <ul className="resources__list">
              <li className="resources__list__item">
                <a
                  href="https://www.dejurka.ru/"
                  className="resources__link"
                  target="_blank"
                >
                  Дежурка{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://www.gipp.ru/"
                  className="resources__link"
                  target="_blank"
                >
                  Гільдія видавців періодичної преси{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="https://mediamedia.me/"
                  className="resources__link"
                  target="_blank"
                >
                  Media - Media{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://www.rup.com.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  Сайт про поліграфію і рекламі в Україні{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="https://pechatnick.com/"
                  className="resources__link"
                  target="_blank"
                >
                  ПЕЧАТНИК.com{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://www.upba.org.ua/index.php/uk/"
                  className="resources__link"
                >
                  Українська Асоціація Видавців та Книгорозповсюджувачів{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="https://www.ranok.com.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  ТОВ Видавництво« Ранок»{" "}
                </a>{" "}
              </li>{" "}
              <li className="resources__list__item">
                <a
                  href="http://unisoft.ua/"
                  className="resources__link"
                  target="_blank"
                >
                  ПП« Юніcофт»{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <News />
      <Footer />
    </div>
  )
}

export default ResourcesPage

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

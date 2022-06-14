import React from "react"
import { graphql } from "gatsby"
import "./discuss.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
const DiscussgPage = () => {
  return (
    <div>
      <Header />
      <Title> Обговорення ОП </Title>
      <div className="discuss">
        <div className="container">
          <div className="discuss__title"> Обговорення освітніх програм </div>
          <div className="discuss__inner">
            <div className="discuss__text">
              <p className="discuss__text__item">
                Кафедрою МСТ розпочато щорічний процес громадського обговорення
                освітніх програм.
              </p>
              <p className="discuss__text__item">
                Стратегія реформування вищої освіти передбачає створення системи
                моніторингу та постійного поліпшення якості вищої освіти.Це
                відповідає рекомендаціям і стандартам Європейського простору
                вищої освіти, враховує кращі вітчизняні та світові
                практики.надсилати на електронну адресу кафедри МСТ: d_mst
                @nure.ua
              </p>
              <p className="discuss__text__item">
                Ключовим завданням такої реформи є залучення зовнішніх та
                внутрішніх стейкхолдерів до розроблення освітніх програм.
              </p>
              <p className="discuss__text__item">
                Пропозиції та зауваження просимо надсилати на електронну адресу
                кафедри МСТ: <span> d_mst @nure.ua </span>
              </p>
            </div>
            <div className="discuss__title">
              Проєкти навчальних планів і програм для обговорення
            </div>
            <div className="discuss__text">
              <ul className="discuss__list">
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/14b7GFHjXqP3-s6Pb361tjw_OCBVCKhDj/view?usp=sharing"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    Навчальний план за освітньо - професійною програмою
                    "Технології друкованих видань" другого рівня вищої освіти
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1WoL60ebWHIiolAF91RNFhLWXA2pRWq_F/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    Навчальний план за освітньо - професійною програмою
                    "Комп’ютерні технології та системи видавничо-поліграфічних
                    виробництв " другого рівня вищої освіти
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1TLaoj7tpTnYEpHpppKWixuwM9MtuiZ_q/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    Навчальний план за освітньо - професійною програмою
                    "Технології електронних мультимедійних видань" другого рівня
                    вищої освіти
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1C86semW58vpLdVJ1elpjRMRvvBHzlG2D/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    Навчальний план за освітньо - професійною програмою
                    "Видавничо-поліграфічна справа" першого(бакалаврського)
                    рівня вищої освіти
                  </a>
                </li>
              </ul>
            </div>
            <div className="discuss__title">
              Проєкти освітніх програм для обговорення
            </div>
            <div className="discuss__text">
              <ul className="discuss__list">
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1hpWSP1MgyLYnnlrEn-ZxqH1ZFGRGJQCt/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    Освітньо - професійна програма "Технології друкованих
                    видань" другого рівня вищої освіти
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1HVqnAn3yVEME5450T3-9I6VlqXEDuFfG/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    Освітньо - професійна програма "Комп’ютерні технології та
                    системи видавничо - поліграфічних виробництв " другого рівня
                    вищої освіти
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1IjZ4WUprMMClWNQnuI5qKTCtuPlNmGPe/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    Освітньо - професійна програма "Технології електронних
                    мультимедійних видань " другого рівня вищої освіти
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1-P0qD0KqNOP7pyWPEdSusGbHDZDdsGPW/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    Освітньо - професійна програма "Видавничо-поліграфічна
                    справа" першого(бакалаврського) рівня вищої освіти
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default DiscussgPage

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

import React from "react"
import { graphql } from "gatsby"
import "./partners.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
const PartnersPage = () => {
  return (
    <div>
      <Header />
      <Title>Партнери</Title>
      <div className="partners">
        <div className="container">
          <div className="partners__title">Середні спеціальні заклади</div>{" "}
          <ul className="partners__inner">
            <li className="partners__item">
              <a
                href="http://www.zgec.zp.ua/"
                className="partners__link"
                target="_blank"
              >
                Запорізька державна інженерна академія
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.chtk.ck.ua/main/"
                className="partners__link"
                target="_blank"
              >
                Черкаський художньо-технічний коледж
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://poligraflicey.sphere.kharkov.com/"
                className="partners__link"
                target="_blank"
              >
                Харківський поліграфічний центр професійно-технічної освіти
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://kvppu.narod.ru/Index.htm"
                className="partners__link"
                target="_blank"
              >
                Київське вище професійне поліграфічне училище
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://old.iatp.org.ua/"
                className="partners__link"
                target="_blank"
              >
                Дніпропетровський центр професійно-технічної освіти з поліграфії
                та інформаційних технологій
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://zcpto.ho.ua/"
                className="partners__link"
                target="_blank"
              >
                Запорізький центр професійно-технічної освіти
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.vpu25.km.ua/"
                className="partners__link"
                target="_blank"
              >
                Хмельницьке вище професійне училище №25
              </a>
            </li>
            <li className="partners__item">
              <a href="" className="partners__link" target="_blank">
                Донецький поліграфічний ліцей
              </a>
            </li>
          </ul>
          <div className="partners__title">Вищі навчальні заклади</div>{" "}
          <ul className="partners__inner">
            <li className="partners__item">
              <a
                href="http://vpi.kpi.ua/"
                className="partners__link"
                target="_blank"
              >
                НТУУ "КПІ" Видавничо-поліграфічний інститут{" "}
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://vpi.kpi.ua/"
                className="partners__link"
                target="_blank"
              >
                Українська академія друкарства{" "}
              </a>
            </li>
            <li className="partners__item">
              <a
                href="https://lpnu.ua/"
                className="partners__link"
                target="_blank"
              >
                Національний університет "Львівська політехніка"{" "}
              </a>
            </li>
            <li className="partners__item">
              <a
                href="https://www.hneu.edu.ua/"
                className="partners__link"
                target="_blank"
              >
                Харківський національний економічний університет ім. С. Кузнеця{" "}
              </a>
            </li>
          </ul>
          <div className="partners__title">Підприємства</div>{" "}
          <div className="partners__text">
            <p className="partners__text__item">
              Початок взаємовідношень студентів з підприємствами починається з 1
              курсу. Студенти 1 курсу за планом дисципліни «Вступ до
              спеціальності» ходять на ознайомчі екскурсії на поліграфічні
              підприємства Харкова.
            </p>
            <p className="partners__text__item">
              З 2 по 5 курси на підприємствах проводяться лабораторні роботи та
              практичні заняття зі спеціальних дисциплін: «Основи технології
              поліграфічного виробництва», «Технологія і устаткування
              поліграфічних процесів» - Книжкова фабрика «Торнадо» (ПП
              «Юнісофт»), «Технологія оперативних і спеціальних видів друку», «
              Фотореєстраційні та формні процеси», «Вузли і механізми
              поліграфічного устаткування» - НДІ «Лазерних технологій»,
              Харківський поліграфічний центр професійно-технічної освіти,
              «Фотореєстраційні та формні процеси», «Системи управління
              кольором» - ТОВ «Бурунін і Ко», «Обробка відеоінформації» -
              Телевізійний центр ХНУРЕ та ін.
            </p>
          </div>
          <ul className="partners__inner">
            <li className="partners__item">
              <a href="http://www.factor.ua/" className="partners__link">
                ТОВ «Фактор–друк»
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.format-kharkov.com.ua/"
                className="partners__link"
              >
                РА «Формат-Харків»
              </a>
            </li>
            <li className="partners__item">
              <a href="http://www.goldenpages.ua/" className="partners__link">
                ТОВ «Золоті сторінки»
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://mst.nure.ua/reproline.org"
                className="partners__link"
              >
                ТОВ «Репролайн»
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.niilt.kharkov.com/"
                className="partners__link"
              >
                АТ «НДІ Лазерних технологій»
              </a>
            </li>
            <li className="partners__item">
              <a href="http://burunin.com.ua/" className="partners__link">
                ТОВ «Бурунін і Ко»
              </a>
            </li>
            <li className="partners__item">
              <a href="http://www.ranok.com.ua/" className="partners__link">
                ТОВ «Видавництво «Ранок»
              </a>
            </li>
            <li className="partners__item">
              <a href="#" className="partners__link">
                ТОВ «Астрон+»
              </a>
            </li>
            <li className="partners__item">
              <a href="http://madrid.in.ua/" className="partners__link">
                ТОВ «Типографія «Мадрід»
              </a>
            </li>
            <li className="partners__item">
              <a href="http://tube-plant.com/" className="partners__link">
                ТОВ «Тубний завод»
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.qualium-systems.com/"
                className="partners__link"
              >
                ТОВ «Кволіум-системз»
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.qualium-systems.com/"
                className="partners__link"
              >
                ПП «Юнісофт»
              </a>
            </li>
            <li className="partners__item">
              <a href="http://aladdin-print.ua/" className="partners__link">
                ПП «Aladdin-print»
              </a>
            </li>
            <li className="partners__item">
              <a href="http://wu.ua/" className="partners__link">
                ТОВ «Web Ukraine»
              </a>
            </li>
            <li className="partners__item">
              <a href="http://dnzpoligraf.com.ua/" className="partners__link">
                Харківський поліграфічний центр професійно-технічної освіти
              </a>
            </li>
          </ul>
          <div className="partners__title">Міжнародне співробітництво</div>{" "}
          <div className="partners__text">
            <p className="partners__text__item">
              Одним з основних напрямків роботи кафедри МСТ є міжнародне
              співробітництво з університетами Європи, а також Північної
              Америки. Цей напрямок роботи дозволяє контролювати та підвищувати
              якість освіти.
            </p>
            <p className="partners__text__item">
              Обмін навчальними планами і програмами, спільні наукові
              дослідження і розробки, підготовка спільних публікацій і
              доповідей, стажування викладачів, співробітників і аспірантів
              кафедри, обмін студентами є основними формами роботи в даному
              напрямку.
            </p>
            <p className="partners__text__item">
              В даний час діє програма «Подвійного диплому» з Вищою школою
              економіки м. Бидгощ (Польща). Ця програма дозволяє нашим студентам
              отримати диплом магістра нашого університету і диплом магістра
              європейського зразка.
            </p>
            <p className="partners__text__item">
              На кафедрі МСТ діють договори про науково-технічне співробітництво
              з наступними зарубіжними навчальними закладами:
            </p>

            <ul className="partners__inner__text    ">
              <li className="partners__item">
                <span className="partners__item__text">
                  Угода про співробітництво між ХНУРЕ та Штутгартським
                  медіа-університетом. Студенти мають можливість пройти навчання
                  за програмою мобільності за наступними курсами: «Технологія
                  друкованих видань», «Створення аудіо- та відеоконтенту»,
                  «Міжнародний менеджмент в медіаіндустрії».
                </span>
              </li>
              <li className="partners__item">
                <span className="partners__item__text">
                  Договір про наукове і навчальне співробітництво між
                  Санкт-Петербурзьким університетом технології та дизайну і
                  ХНУРЕ. Проводяться спільні науково-практичні конференції.
                </span>
              </li>
              <li className="partners__item">
                <span className="partners__item__text">
                  Угода про зміцнення зв'язків, розширення обміну досвідом
                  підготовки фахівців в галузі видавничої справи та поліграфії і
                  впровадження в навчальний процес інноваційних форм і методів
                  навчання між вузами: НТУУ «КПІ», ХНУРЕ, Білоруським державним
                  технологічним університетом, Ташкентським інститутом
                  текстильної та легкої промисловості, Казахським національним
                  технічним університетом, Киргизьким технічним університетом,
                  Таджицьким технічним університетом, Московським державним
                  університетом друку.
                </span>
              </li>
            </ul>
            <p className="partner__text__item">
              - Угода про співробітництво між ХНУРЕ та Вищою школою економіки м.
              Бидгощ (Польща). В рамках даної угоди в 2017-2018 році
              здійснюється спільна робота над проектом «Сколівщина туристична»,
              мета якого створити мультимедійний додаток (з елементами
              геоінформатики) для десктопних і мобільних пристроїв.
            </p>
            <p className="partner__text__item">
              З 16.05 по 22.05 2017 року делегація у складі: Світлани Кашуби
              (професора WSG, директора Європейського інституту, м. Бидгощ,
              Польща), Марека Шамота (професора, директора кафедри креативної
              промисловості «Поліграфічні, мультимедійні та Web-технології» в
              WSG), Оксани Бєлякової (заступника директора представництва
              Польської академії наук в м. Києві) брала участь у ІІ Міжнародній
              науково-технічній конференції «Поліграфічні, мультимедійні та
              web-технології».
            </p>
            <p className="partner__text__item">
              В рамках цієї конференції на пленарному засіданні професором М.
              Шамотом було зроблено доповідь на тему «Сучасна аудіовізуальна
              культура в розрізі партнерських відносин між Україною та Польщею».
            </p>
            <p className="partner__text__item">
              Також в рамках цієї конференції було проведено відеоконференцію з
              університетом м. Гуанахуато (Мексика). З обох сторін були зроблені
              цікаві доклади.
            </p>
            <p className="partner__text__item">
              Студенти кафедри МСТ взяли активну участь у III Міжнародній
              виставці «Світ очима молодих», що проходила в галереї під Брдо, м.
              Бидгощ, Польща (18 експонатів).
            </p>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default PartnersPage

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

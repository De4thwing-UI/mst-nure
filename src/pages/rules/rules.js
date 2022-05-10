import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "src/components/header/header"
import Footer from "src/components/footer/footer"
import News from "src/components/lastnews/lastnews"
import Title from "src/components/title/title"
import Zno from "src/components/zno/zno"
import Atestat from "src/components/atestat/atsestat"
import Vstup from "src/components/vstup/vstup"
import Price from "src/components/price/price"

import "./rules.css"

const RulesPage = () => {
  return (
    <div>
      <Header />
      <Title> Вcтупна кампанія 2022 року </Title>{" "}
      <div className="competition">
        <div className="container">
          <div className="competition__inner">
            <div className="competition__title">
              <h1 className="competition__suptitle">
                Конкурсний відбір абітурієнтів 2022 року{" "}
              </h1>{" "}
              <p className="competition__text">
                Для конкурсного відбору абітурієнтів ЗВО будуть зараховуватися
                бали сертифікатів ЗНО з трьох конкурсних предметів.Причому, у
                цьому році дійсні сертифікати за 2018 - 2021 роки.Нагадуємо, що
                у 2021 році в переліку навчальних предметів, із яких проходитиме
                ЗНО, виокремлюють українську мову й українську мову і
                літературу.А математика має два рівня– стандарт та
                профільний.Для технічного ЗВО необхідно здавати ЗНО з математики
                профільного рівня{" "}
              </p>{" "}
            </div>{" "}
            <StaticImage
              src="../../images/competition/Rectangle.png"
              alt="News"
            />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Zno />
      <div className="coefficient">
        <div className="container">
          <div className="coefficient__inner">
            <div className="coefficient__rating">
              <h1 className="rating__title"> Рейтингові коефіціенти </h1>{" "}
              <p className="rating__text">
                Закладам вищої освіти(ЗВО) дозволили встановлювати в залежності
                від пріоритетності предмету рейтингові коефіцієнти ? Мінімальний
                конкурсний бал для допуску до участі у конкурсі або для
                зарахування поза конкурсом 125.{" "}
              </p>{" "}
            </div>{" "}
            <div className="coeficcient__storage">
              <h1 className="storage__title">
                За спеціальністю 186 Видавництво та поліграфія конкурсний бал
                складає :
              </h1>{" "}
              <ul className="storage__list">
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    Бал атестата про повну загальну середню освіту(коефіцієнт 0,
                    1);{" "}
                  </span>{" "}
                </li>{" "}
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    {" "}
                    ЗНО з математики(базовий рівень, коефіцієнт 0, 4);{" "}
                  </span>{" "}
                </li>{" "}
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    ЗНО з української мови та літератури(базовий рівень,
                    коефіцієнт 0, 25);{" "}
                  </span>{" "}
                </li>{" "}
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    ЗНО з іноземної мови або фізики або хімії(базовий рівень,
                    коефіцієнт 0, 2).{" "}
                  </span>{" "}
                </li>{" "}
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    Вага балу за особливі успіхи(диплом МАН, призові місця в
                    олімпіадах) і / або успішне закінчення Центру довузівської
                    підготовки(ЦДП) ХНУРЕ– 0, 05(до 10 додаткових балів).{" "}
                  </span>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="olimpics">
        <div className="container">
          <div className="olimpics__inner">
            <StaticImage
              src="../../images/competition/olimpics.png"
              alt="News"
              className="olimpics__image"
            />
            <div className="olimpics__title">
              <h1 className="olimpics__suptitle"> Всеукраїнські Олімпіади </h1>{" "}
              <p className="olimpics__text">
                Учасникам Всеукраїнської олімпіади ХНУРЕ для професійної
                орієнтації вступників на основі повної загальної середньої
                освіти зі спеціальностей, яким надається особлива підтримка
                Міністерства, а саме для вступу на спеціальність 186 Видавництво
                та поліграфія, яка проводиться у ХНУРЕ відповідно до
                Положення(Додаток 6 до Правил вступу), можуть нараховуватись
                додаткові бали до оцінки сертифіката зовнішнього незалежного
                оцінювання з одного відповідного предмета в обсязі від 1 до 20
                балів.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="coefficient">
        <div className="container">
          <div className="coefficient__inner">
            <div className="coefficient__rating">
              <h1 className="rating__title"> Конкурсний бал </h1>{" "}
              <p className="rating__text">
                Остаточно конкурсний бал множиться на регіональний(РК),
                галузевий(ГК), сільський(СК) та першочерговий(ПЧК) коефіцієнти
                шляхом його множення на їх добуток.{" "}
                <p className="rating__text"> </p>{" "}
                <p className="rating__text">
                  Якщо після домноження на коефіцієнти конкурсний бал перевищує
                  200, то він встановлюється таким, що дорівнює 200.{" "}
                </p>{" "}
                <Link to="#" className="rating__link">
                  Дізнатись більше{" "}
                </Link>{" "}
              </p>{" "}
            </div>{" "}
            <div className="coeficcient__storage">
              <h1 className="storage__title">
                За спеціальністю 186 Видавництво та поліграфія конкурсний бал
                складає:
              </h1>{" "}
              <ul className="storage__list">
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    Бал атестата про повну загальну середню освіту(коефіцієнт 0,
                    1);{" "}
                  </span>{" "}
                </li>{" "}
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    {" "}
                    ЗНО з математики(базовий рівень, коефіцієнт 0, 4);{" "}
                  </span>{" "}
                </li>{" "}
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    ЗНО з української мови та літератури(базовий рівень,
                    коефіцієнт 0, 25);{" "}
                  </span>{" "}
                </li>{" "}
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    ЗНО з іноземної мови або фізики або хімії(базовий рівень,
                    коефіцієнт 0, 2).{" "}
                  </span>{" "}
                </li>{" "}
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    Вага балу за особливі успіхи(диплом МАН, призові місця в
                    олімпіадах) і / або успішне закінчення Центру довузівської
                    підготовки(ЦДП) ХНУРЕ– 0, 05(до 10 додаткових балів).{" "}
                  </span>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="abiturient">
        <div className="container">
          <div className="abiturient__title">
            Абітурієнте!Якщо у тебе повна середня загальна освіта, ти можеш:
          </div>{" "}
          <div className="abiturient__inner">
            {" "}
            <ul className="abiturient__list">
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  Подати до 5 заяв на 5 спеціальностей у власному електронному
                  кабінеті або особисто в Консультаційному центрі Приймальної
                  комісії ХНУРЕ з 14 до 23 липня 2021 р., вказавши пріоритети
                  свого вибору;{" "}
                </span>{" "}
              </li>{" "}
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  {" "}
                  Скласти вступні випробування з 01 до 13 липня 2022 р.(за
                  необхідності, якщо є на це підстави);{" "}
                </span>{" "}
              </li>{" "}
            </ul>{" "}
            <ul className="abiturient__list">
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  Бал атестата про повну загальну середню освіту(коефіцієнт 0,
                  1);{" "}
                </span>{" "}
              </li>{" "}
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  {" "}
                  ЗНО з математики(базовий рівень, коефіцієнт 0, 4);{" "}
                </span>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="bakalavr">
        <div className="container">
          <div className="bakalavr__title">
            Абітурієнте!Якщо у тебе повна середня загальна освіта, ти можеш:
          </div>{" "}
          <div className="bakalavr__inner">
            {" "}
            <ul className="bakalavr__list">
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  Подати документи на вступ з 14 до 23 липня 2022 р.;{" "}
                </span>{" "}
              </li>{" "}
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  {" "}
                  Скласти вступний тест в Приймальній комісії ХНУРЕ з 24 по 30
                  липня 2021 р.;{" "}
                </span>{" "}
              </li>{" "}
            </ul>{" "}
            <ul className="bakalavr__list">
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  Ознайомитися з рейтинговим списком 2 серпня 2021 р.;{" "}
                </span>{" "}
              </li>{" "}
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  {" "}
                  Особисто принести оригінали документів до 17: 00 4 серпня 2021
                  р.;{" "}
                </span>{" "}
              </li>{" "}
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  {" "}
                  Зарахування не пізніше 6 серпня 2021 р.{" "}
                </span>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Atestat />
      <Vstup />
      <Price />
      <div className="ask">
        <div className="container">
          <div className="ask__title">
            <h1 className="ask__suptitle"> Залишились питання ? </h1>{" "}
            <p className="ask__text">
              Більш докладно про ці нововведення оголошено на сайті університету
              радіоелектроніки в правилах вступу 2021 року– nure.ua.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <News />
      <Footer />
    </div>
  )
}

export default RulesPage

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

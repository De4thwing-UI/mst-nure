import React from "react"
import "./vstup.css"
import { StaticImage } from "gatsby-plugin-image"

const Vstup = () => {
  return (
    <div>
      <div className="vstup">
        <div className="container">
          <div className="vstup__title">Вступ до магістратури у 2022 році</div>
          <div className="vstup__inner">
            <ul className="vstup__timeline">
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    Крок 1. Зареєструватися
                  </h1>
                  <p className="vstup__item__text">
                    https://zno.testportal.com.ua/master/login – Кабінет
                    учасника ЄФВВ/ЄВІ) для складання єдиного вступного іспиту
                    (ЄВІ) з іноземної мови з 11 травня по 03 червня (о 18:00)
                  </p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">Крок 2. Вступний іспит</h1>
                  <p className="vstup__item__text">
                    Основна сесія єдиного вступного іспиту проводиться 30 червня
                    (додаткова сесія проводиться в строки, встановлені
                    Українським центром оцінювання якості освіти).
                  </p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    Крок 3. Зареєструвати свій електронний кабінет з 01 липня.
                  </h1>
                  <p className="vstup__item__text">
                    Подати заяву і необхідні документи з 15 липня по 23 липня
                    через електронний кабінет.
                  </p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    Крок 4. Фахові вступні випробування
                  </h1>
                  <p className="vstup__item__text">
                    Для вступників, які вступають на основі ступеня вищої освіти
                    (освітньо-кваліфікаційного рівня), і успішно склали єдиний
                    вступний іспит, проводяться з 19 липня по 30 липня.
                  </p>
                  <p className="vstup__item__text">Дивитись конкурсні бали</p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    Крок 5. Дочекатися рейтингового списку 2 серпня
                  </h1>
                  <p className="vstup__item__text">
                    Рекомендації для зарахування за державним замовленням
                    надаються не пізніше ніж 02 серпня.
                  </p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    Крок 6. Принести оригінали документів.
                  </h1>
                  <p className="vstup__item__text">
                    У період з 2 серпня (після оприлюднення списку) до 10 серпня
                    необхідно принести оригінали документів, тим самим,
                    виконавши вимоги до зарахування за державним замовленням.
                  </p>
                  <p className="vstup__item__text">Комплект документів</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="enrollment">
          <div className="container">
            <div className="enrollment__inner">
              <div className="enrolment__title">
                <h1 className="enrollment__suptitle">
                  Зарахування вступників за державним замовленням – 12 серпня.
                </h1>
                <p className="enrollment__text">
                  Виконання вимог до зарахування на місця за кошти
                  фізичних/юридичних осіб закінчується 30 серпня о 12:00.
                  Переведення на вакантні місця державного та на місця за
                  рахунок цільових пільгових державних кредитів осіб, які
                  зараховані на навчання за кошти фізичних та/або юридичних осіб
                  (відповідно до цих Правил та Умов), здійснюється не пізніше
                  ніж 19 серпня. Зарахування вступників за кошти
                  фізичних/юридичних осіб 31 серпня.
                </p>
              </div>
              <StaticImage
                src="../../images/competition/vstup.png"
                alt="News"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Vstup

import React from "react"
import "./atestat.css"

const Atestat = () => {
  return (
    <div>
      <div className="atestat">
        <div className="container">
          <div className="atestat__title">
            Вступ до ХНУРЕ на базі атестату середньої школи
          </div>
          <div className="atestat__inner">
            <ul className="atestat__timeline">
              <li className="atestat__timeline__item">
                <div className="atestat__item__text">
                  <h1 className="atestat__item__title">
                    Крок 1. Електронна заява.
                  </h1>
                  <p className="atestat__item__text">
                    У 2021 році вступники, що вступають на базі документа про
                    повну загальну середню освіту за ступенем «Бакалавр» на
                    денну форму навчання з 14 по 23 липня подають до закладу
                    вищої освіти заяви про вступ в електронній формі на сайті
                    https://ez.osvitavsim.org.ua/
                  </p>
                  <p className="atestat__item__text">
                    Після реєстрації вступник отримає логін та пароль для
                    доступу до особистого електронного кабінету.
                  </p>
                  <p className="atestat__item__text">
                    Подана вступником електронна заява буде відразу відображена
                    у розділі Єдиної державної електронної бази з питань освіти
                    – ЄДЕБО, до якого має доступ ХНУРЕ.
                  </p>
                </div>
              </li>
              <li className="atestat__timeline__item">
                <div className="atestat__item__text">
                  <h1 className="atestat__item__title">
                    Крок 2. Список рекомендованих
                  </h1>
                  <p className="atestat__item__text">
                    28 липня ознайомитись зі списком рекомендованих на сайті
                    nure.ua
                  </p>
                </div>
              </li>
              <li className="atestat__timeline__item">
                <div className="atestat__item__text">
                  <h1 className="atestat__item__title">
                    Крок 3. Подача документів
                  </h1>
                  <p className="atestat__item__text">
                    З 28 липня по 2 серпня 2021 року особисто подати оригінали
                    документів до Приймальної комісії ХНУРЕ. Підготуйте комплект
                    документів завчасно.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="junior">
        <div className="container">
          <div className="junior__title">
            <h1 className="junior__suptitle">
              Вступ до ХНУРЕ на базі диплома молодшого спеціаліста
            </h1>
            <p className="junior__text">
              Вступники можуть зараховуватись за державним замовленням лише в
              разі вступу на ту саму або споріднену в межах галузі знань. При
              цьому обсяг академічної різниці в дисциплінах, як правило, не може
              перевищувати 20 кредитів, про що під час прийому заяви на вступ
              письмово вказується на звороті заяви вступника заступником декана
              факультету Комп’ютерних наук, на який подає заяву вступник, та
              засвідчується підписом декана.
            </p>
          </div>
          <div className="junior__inner">
            <ul className="junior__timeline">
              <li className="junior__timeline__item">
                <div className="junior__item__text">
                  <h1 className="junior__item__title">
                    Крок 1. Подати заяву і документи з 14 по 23 липня.{" "}
                  </h1>
                  <p className="junior__item__text">
                    Документи необхідно подавати в паперовому вигляді.
                  </p>
                  <p className="junior_text">Дивитись комплект документів</p>
                </div>
              </li>
              <li className="junior__timeline__item">
                <div className="junior__item__text">
                  <h1 className="junior__item__title">
                    Крок 2. Скласти фахові випробування з 24 по 30 липня 2021
                    року.{" "}
                  </h1>
                  <p className="junior__item__text">
                    Необхідно скласти фахові випробування
                  </p>
                </div>
              </li>
              <li className="junior__timeline__item">
                <div className="junior__item__text">
                  <h1 className="junior__item__title">
                    Крок 3. Дочекатися рейтингового списку 2 серпня
                  </h1>
                  <p className="junior__item__text">
                    Рейтинговий список вступників буде оприлюднений 2 серпня
                    2021 року із зазначенням рекомендованих до зарахування на
                    місця державного замовлення.
                  </p>
                </div>
              </li>
              <li className="junior__timeline__item">
                <div className="junior__item__text">
                  <h1 className="junior__item__title">
                    Крок 4. Принести оригінали документів особисто.
                  </h1>
                  <p className="junior__item__text">
                    Після оприлюднення списку необхідно принести оригінали
                    документів до 17:00 години 4 серпня, тим самим, виконавши
                    вимоги до зарахування за державним замовленням.
                  </p>
                  <p className="junior__item__text">
                    Зарахування вступників за державним замовленням – 6 серпня.
                    Виконання вимог до зарахування на місця за кошти
                    фізичних/юридичних осіб за денною формою навчання
                    закінчується до 12:00 години 30 серпня, за заочною формою
                    навчання – до 17.00 30 вересня.
                  </p>
                  <p className="junior__item__">
                    Зарахування вступників за кошти фізичних/юридичних осіб за
                    денною формою навчання відбудеться 31 серпня, за заочною
                    формою навчання – 1 жовтня.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Atestat

import React from "react"
import "./price.css"
import { StaticImage } from "gatsby-plugin-image"

const Price = () => {
  return (
    <div>
      <div className="price-one">
        <div className="container">
          <div className="price-one__title">
            Вартість одного року навчання за кошти фізичних або юридичних осіб
            (контрактна форма) на першому (бакалаврському) рівні вищої освіти
          </div>
          <div className="price-one__inner">
            <div className="price-one__item">
              <div className="price-one__title">
                <h1 className="price-one__suptitle">14 500 грн.</h1>
                <p className="price-one__text">Денна форма навчання</p>
              </div>
            </div>
            <div className="price-one__item">
              <div className="price-one__title">
                <h1 className="price-one__suptitle">8000 грн.</h1>
                <p className="price-one__text">Заочна форма навчання</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="price-two">
        <div className="container">
          <div className="price-two__title">
            Вартість одного року навчання за кошти фізичних/юридичних осіб
            (контрактна форма) на другому (магістерському) рівні вищої освіти
          </div>
          <div className="price-two__inner">
            <div className="price-two__item">
              <div className="price-two__title">
                <h1 className="price-two__suptitle">15 500 грн.</h1>
                <p className="price-two__text">Денна форма навчання</p>
              </div>
            </div>
            <div className="price-two__item">
              <div className="price-two__title">
                <h1 className="price-otwo_suptitle">9000 грн.</h1>
                <p className="price-two__text">Заочна форма навчання</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price

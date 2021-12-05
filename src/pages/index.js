import React from 'react';
import { graphql, Link } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import './index.css';
import { StaticImage } from "gatsby-plugin-image";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Button from '../components/button/button';
const IndexPage = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Header />
      {/* Intro */}
      <div className="intro">
        <div className="container">
          <div className="intro__inner">
            <h1 className="intro__title"> Харківський національний університет радіоелектроніки</h1>
            <h2 className="intro__subtitle">Кафедра Медіасистеми та технології</h2>
            <h3 className="intro__text">Ми завжди готові допомогти Вам отримати максимум знань і умінь в нашій професійній сфері</h3>
          </div>
          <StaticImage src="../images/intro-bg.svg" alt="intro_image" className="intro__image" />
        </div>
      </div>
      {/* Features */}
      <div className="features">
        <div className="container">
          <div className="features__inner">
            <div className="features__item">
              <StaticImage className="features__icon" src="../images/features/people.svg" alt="Teachers" />
              <div className="features__title">24
                <p className="features__text">Викладача</p>
              </div>
            </div>
            <div className="features__item">
              <StaticImage className="features__icon" src="../images/features/work.svg" alt="Teachers" />
              <div className="features__title">100%
                <p className="features__text">Працевлаштування</p>
              </div>
            </div>
            <div className="features__item">
              <StaticImage className="features__icon" src="../images/features/students.svg" alt="Teachers" />
              <div className="features__title">3000+
                <p className="features__text">Випускників</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* News */}
      <div className="news">
        <div className="container">
          <div className="news__title">
            <h1 className="news__text">Новини</h1>
            <Link language="ua" to="/news/news" className="news__link">
              <Button>Всі новини</Button>
            </Link>
          </div>
          <div className="news__inner">
            <div className="news__item">
              <StaticImage src="../images/News/news_image1.png" alt="News" className="news__image" />
              <h1 className="news__item__title">1 березня відбувся день відкритих дверей</h1>
              <div className="news__item__text">1 березня, перший день весни! Завершальний у цьому навчальному році День відкритих дверей зібрав величезну кількість абітурієнтів та гостей...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
            <div className="news__item">
              <StaticImage src="../images/News/news_image2.png" alt="News" className="news__image" />
              <h1 className="news__item__title">1 березня відбувся день відкритих дверей</h1>
              <div className="news__item__text">1 березня, перший день весни! Завершальний у цьому навчальному році День відкритих дверей зібрав величезну кількість абітурієнтів та гостей...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
            <div className="news__item">
              <StaticImage src="../images/News/news_image3.png" alt="News" className="news__image" />
              <h1 className="news__item__title">1 березня відбувся день відкритих дверей</h1>
              <div className="news__item__text">1 березня, перший день весни! Завершальний у цьому навчальному році День відкритих дверей зібрав величезну кількість абітурієнтів та гостей...
              </div>
              <div className="news__border">&emsp;</div>
              <div className="news__item__link">
                <a href="#">Дізнатись більше</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Specification */}
      <div className="specialities">
        <div className="container">
          <div className="specialties__title">
            <h1 className="specialties__text">Спеціальність 186 Видавництво та поліграфія</h1>
            <a href="#" className="specialties__link"><Button>
              Дізнатись більше</Button></a>
          </div>
          <div className="specialities__inner">
            <div className="specialities__item">
              <StaticImage src="../images/Specialities/web.svg" alt="web" className="specialities__image" />
              <div className="specialities__item__title">Web-розробка</div>
            </div>
            <div className="specialities__item">
              <StaticImage src="../images/Specialities/VPS.svg" alt="web" className="specialities__image" />
              <div className="specialities__item__title">Видавничо-поліграфічні процеси
              </div>
            </div>
            <div className="specialities__item">
              <StaticImage src="../images/Specialities/graph.svg" alt="web" className="specialities__image" />
              <div className="specialities__item__title">Графічний дизайн</div>
            </div>
            <div className="specialities__item">
              <StaticImage src="../images/Specialities/3d.svg" alt="web" className="specialities__image" />
              <div className="specialities__item__title">3D моделювання</div>
            </div>
            <div className="specialities__item">
              <StaticImage src="../images/Specialities/e-books.svg" alt="web" className="specialities__image" />
              <div className="specialities__item__title">Проектування електронних видань
              </div>
            </div>
            <div className="specialities__item">
              <StaticImage src="../images/Specialities/video.svg" alt="web" className="specialities__image" />
              <div className="specialities__item__title">Обробка відео-, аудіо інформації</div>
            </div>
          </div>
        </div>
      </div>
      {/* Magistracy */}
      <div className="magistracy">
        <div className="container">
          <div className="magistracy__title">
            Магістратура
          </div>
          <div className="magistracy__inner">
            <div className="magistracy__item">
              <p className="magistracy__item__suptitle">Освітньо-професійна програма</p>
              <h1 className="magistracy__item__name">ТЕМВ</h1>
              <p className="magistracy__item__text">Технології електронних мультимедійних видань</p>
            </div>
            <div className="magistracy__item">
              <p className="magistracy__item__suptitle">Освітньо-професійна програма</p>
              <h1 className="magistracy__item__name">КТСВПВ</h1>
              <p className="magistracy__item__text">Комп’ютерні технології та системи видавничо-поліграфічних виробництв</p>
            </div>
            <div className="magistracy__item">
              <p className="magistracy__item__suptitle">Освітньо-професійна програма</p>
              <h1 className="magistracy__item__name">ТДВ</h1>
              <p className="magistracy__item__text">Технології друкованих видань</p>
            </div>
          </div>
        </div>
      </div>
      <div className="works">
        <div className="container">
          <div className="works__title">
            <h1 className="works__text">Роботи студентів</h1>
            <a href="#" className="works__link"><Button>
              Дивитись всі</Button></a>
          </div>
          <div className="works__inner">
            <div className="works__item">
              <StaticImage src="../images/Works/1.png" alt="1" className="works__image" />
              <h1 className="works__item__title">Гапіч Антон</h1>
              <div className="works__item__text">
                Мобільний додаток
              </div>
            </div>
            <div className="works__item">
              <StaticImage src="../images/Works/2.png" alt="1" className="works__image" />
              <h1 className="works__item__title">Ісаєнко Тетяна</h1>
              <div className="works__item__text">
                Ілюстрація
              </div>
            </div>
            <div className="works__item">
              <StaticImage src="../images/Works/3.png" alt="1" className="works__image" />
              <h1 className="works__item__title">Музичук Анна</h1>
              <div className="works__item__text">
                Соціальний плакат
              </div>
            </div>
          </div>
          <div className="works__pagination">
            <a href="#">&lt;</a>
            <a className="works__pagination__active" href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#">9</a>
            <a href="#">&gt;</a>
          </div>
        </div>
      </div>
      <div className="employment">
        <div className="container">
          <div className="employment__title">
            Працевлаштування
          </div>
          <div className="employment__inner">
            <div className="employment__item">
              <StaticImage src="../images/Employment/factor.png" alt="Factor" className="employment__image" />
            </div>
            <div className="employment__item">
              <StaticImage src="../images/Employment/ranok.png" alt="Ranok" className="employment__image" />
            </div>
            <div className="employment__item">
              <StaticImage src="../images/Employment/data.png" alt="Data" className="employment__image" />
            </div>
            <div className="employment__item">
              <StaticImage src="../images/Employment/epam.png" alt="Epam" className="employment__image" />
            </div>
            <div className="employment__item">
              <StaticImage src="../images/Employment/grid.png" alt="Grid" className="employment__image" />
            </div>
            <div className="employment__item">
              <StaticImage src="../images/Employment/softserve.png" alt="softsevre" className="employment__image" />
            </div>
          </div>
          <div className="employment__button"> <a href="#"><Button>
            Всі партнери</Button></a></div>
        </div>
      </div>
      <Footer />

    </div>
  )
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
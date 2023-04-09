import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import Zno from "src/components/zno"
import Atestat from "src/components/atestat"
import Vstup from "src/components/vstup"
import Price from "src/components/price"
import { Trans } from "react-i18next"
import "./rules.css"

const RulesPage = () => {
  return (
    <div>
      <Header />
      <Title>
        {" "}
        <Trans>Introductory Campaign of 2022</Trans>{" "}
      </Title>
      <div className="competition">
        <div className="container">
          <div className="competition__inner">
            <div className="competition__title">
              <h1 className="competition__suptitle">
                <Trans>Admissions Competition for 2022 Applicants</Trans>
              </h1>
              <p className="competition__text">
                <Trans>
                  For the competitive selection of university applicants, scores
                  from three competitive subjects in the External Independent
                  Testing (EIT) certificates will be taken into account. Valid
                  certificates from 2018 to 2021 will be accepted this year.
                  Please note that in 2021, the list of subjects for EIT
                  includes Ukrainian language and Ukrainian language and
                  literature, while mathematics has two levels - standard and
                  profile. Technical universities require EIT in mathematics at
                  the profile level.
                </Trans>
              </p>
            </div>
            <StaticImage
              src="../../images/competition/Rectangle.png"
              alt="News"
            />
          </div>
        </div>
      </div>
      <Zno />
      <div className="coefficient">
        <div className="container">
          <div className="coefficient__inner">
            <div className="coefficient__rating">
              <h1 className="rating__title">
                {" "}
                <Trans>Rating coefficients</Trans>{" "}
              </h1>
              <p className="rating__text">
                <Trans>
                  Higher education institutions (HEIs) have been allowed to
                  establish rating coefficients based on the priority of the
                  subject? The minimum competitive score for participation in
                  the competition or admission outside the competition is 125.
                </Trans>
              </p>
            </div>
            <div className="coeficcient__storage">
              <h1 className="storage__title">
                <Trans>
                  The competitive score for the specialty 186 Publishing and
                  Printing is composed of:
                </Trans>
              </h1>
              <ul className="storage__list">
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The score of the certificate of complete general secondary
                      education (coefficient 0.1);
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The score of the mathematics subject test in the Ukrainian
                      External Independent Evaluation (EIE) at the basic level
                      (coefficient 0.4);
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The score of the Ukrainian language and literature subject
                      test in the Ukrainian External Independent Evaluation
                      (EIE) at the basic level (coefficient 0.25);
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The score of the foreign language, physics, or chemistry
                      subject test in the Ukrainian External Independent
                      Evaluation (EIE) at the basic level (coefficient 0.2).
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The weight of the score for special achievements (diploma
                      of the All-Ukrainian Student Olympiad, prize places in
                      Olympiads) and/or successful completion of the Preparatory
                      Department of Kharkiv National University of Radio
                      Electronics (KDPU) - 0.05 (up to 10 additional points).
                    </Trans>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="olimpics">
        <div className="container">
          <div className="olimpics__inner">
            <StaticImage
              src="../../images/competition/olimpics.png"
              alt="News"
              className="olimpics__image"
            />
            <div className="olimpics__title">
              <h1 className="olimpics__suptitle">
                {" "}
                <Trans>All-Ukrainian Olympiads</Trans>{" "}
              </h1>
              <p className="olimpics__text">
                <Trans>
                  Participants of the All-Ukrainian Olympiad of Kharkiv National
                  University of Radio Electronics (HNURE) for professional
                  orientation of applicants based on complete general secondary
                  education in specialties that receive special support from the
                  Ministry, specifically for admission to the specialty 186
                  Publishing and Printing conducted at HNURE in accordance with
                  the Regulations (Appendix 6 to the Admission Rules), may be
                  awarded additional points to the score of the External
                  Independent Evaluation certificate in one corresponding
                  subject, ranging from 1 to 20 points.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="coefficient">
        <div className="container">
          <div className="coefficient__inner">
            <div className="coefficient__rating">
              <h1 className="rating__title">
                {" "}
                <Trans>Competitive score</Trans>{" "}
              </h1>
              <p className="rating__text">
                <Trans>
                  The Final competitive score is multiplied by regional (РК),
                  sectoral (ГК), rural (СК), and priority (ПЧК) coefficients by
                  multiplying it by their product.
                </Trans>
                <p className="rating__text"> </p>
                <p className="rating__text">
                  <Trans>
                    If the competitive score exceeds 200 after multiplication by
                    the coefficients, it is set to a maximum value of 200.
                  </Trans>
                </p>
                <Link to="#" className="rating__link">
                  <Trans>Learn more</Trans>
                </Link>
              </p>
            </div>
            <div className="coeficcient__storage">
              <h1 className="storage__title">
                <Trans>
                  The competitive score for the specialty 186 Publishing and
                  Printing is composed of:
                </Trans>
              </h1>
              <ul className="storage__list">
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      Diploma of complete secondary education certificate
                      (coefficient 0.1);
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The score of the mathematics subject test in the Ukrainian
                      External Independent Evaluation (EIE) at the basic level
                      (coefficient 0.4);
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The score of the Ukrainian language and literature subject
                      test in the Ukrainian External Independent Evaluation
                      (EIE) at the basic level (coefficient 0.25);
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The score of the Ukrainian language and literature subject
                      test in the Ukrainian External Independent Evaluation
                      (EIE) at the basic level (coefficient 0.25);
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The weight of the score for special achievements (diploma
                      of the All-Ukrainian Student Olympiad, prize places in
                      Olympiads) and/or successful completion of the Preparatory
                      Department of Kharkiv National University of Radio
                      Electronics (KDPU) - 0.05 (up to 10 additional points).
                    </Trans>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="abiturient">
        <div className="container">
          <div className="abiturient__title">
            <Trans>
              Dear applicant! If you have completed full general secondary
              education, you can:
            </Trans>
          </div>
          <div className="abiturient__inner">
            <ul className="abiturient__list">
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  <Trans>
                    You can submit up to 5 applications for 5 specialties in
                    your personal online account or in person at the
                    Consultation Center of the Admissions Committee of Kharkiv
                    National University of Radio Electronics (KhNURE) from July
                    14th to July 23rd, 2021, indicating the priorities of your
                    choice;
                  </Trans>
                </span>
              </li>
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  <Trans>
                    To take entrance exams from July 1st to July 13th, 2022 (if
                    necessary, if there are grounds for it);
                  </Trans>
                </span>
              </li>
            </ul>
            <ul className="abiturient__list">
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  <Trans>
                    Diploma of complete secondary education certificate
                    (coefficient 0.1);
                  </Trans>
                </span>
              </li>
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  <Trans>
                    The score of the mathematics subject test in the Ukrainian
                    External Independent Evaluation (EIE) at the basic level
                    (coefficient 0.4);
                  </Trans>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bakalavr">
        <div className="container">
          <div className="bakalavr__title">
            <Trans>
              Dear applicant! If you have completed full general secondary
              education, you can:
            </Trans>{" "}
          </div>
          <div className="bakalavr__inner">
            <ul className="bakalavr__list">
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  <Trans>
                    To submit documents for admission from July 14th to July
                    23rd, 2022;
                  </Trans>
                </span>
              </li>
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  <Trans>
                    "To take the entrance test at the Admissions Committee of
                    Kharkiv National University of Radio Electronics (KhNURE)
                    from July 24th to July 30th, 2021;"
                  </Trans>
                </span>
              </li>
            </ul>
            <ul className="bakalavr__list">
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  <Trans>
                    To familiarize yourself with the ranking list on August 2nd,
                    2021;
                  </Trans>
                </span>
              </li>
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  <Trans>
                    To personally bring the original documents until 17:00 on
                    August 4th, 2021;
                  </Trans>
                </span>
              </li>
              <li className="bakalavr__list__item">
                <span className="bakalavr__list__item__text">
                  <Trans>
                    Admission will be no later than August 6th, 2021.
                  </Trans>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Atestat />
      <Vstup />
      <Price />
      <div className="ask">
        <div className="container">
          <div className="ask__title">
            <h1 className="ask__suptitle">
              {" "}
              <Trans>Are there any remaining questions?</Trans>
            </h1>
            <p className="ask__text">
              <Trans>
                More detailed information about these innovations is announced
                on the website of the National University of Radio Electronics
                in the admission rules for 2021 – nure.ua.
              </Trans>
            </p>
          </div>
        </div>
      </div>
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

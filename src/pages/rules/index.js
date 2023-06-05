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
        <Trans>Introductory Campaign of 2023</Trans>{" "}
      </Title>
      <div className="competition">
        <div className="container">
          <div className="competition__inner">
            <div className="competition__title">
              <h1 className="competition__suptitle">
                <Trans>
                  Bachelor's Admission based on external independent testing
                </Trans>
              </h1>
              <p className="competition__text">
                <div className="coeficcient__storage">
                  <ul className="storage__list">
                    <li className="storage__list__item">
                      <span className="storage__list__item__text">
                        <Trans>
                          In 2023, applicants in Ukraine will take a national
                          multi-subject test as an alternative to the Unified
                          Entrance Examination (ZNO). University admissions will
                          be based on the results of this test.
                        </Trans>
                      </span>
                    </li>
                    <li className="storage__list__item">
                      <span className="storage__list__item__text">
                        <Trans>
                          The test will be somewhat simplified as it has been
                          adapted to the military realities in the country. It
                          will consist of two mandatory subjects and one
                          elective subject.
                        </Trans>
                      </span>
                    </li>
                    <li className="storage__list__item">
                      <span className="storage__list__item__text">
                        <Trans>
                          The national multi-subject test (NMT) will take place
                          on a single day. Within the test, there will be two
                          mandatory subjects: Ukrainian language and
                          mathematics, as well as one elective subject.
                        </Trans>
                      </span>
                    </li>
                  </ul>
                </div>
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
                <Trans>
                  During the test, applicants will have a total of 180 minutes.
                  They will have the flexibility to allocate the time among the
                  different sections of the test according to their preference.
                </Trans>{" "}
              </h1>
            </div>
            <div className="coeficcient__storage">
              <h1 className="storage__title">
                <Trans>
                  The Ministry of Education and Science (МОН) has planned two
                  sessions for the National Multi-Subject Test (NMT) in 2023:
                </Trans>
              </h1>
              <ul className="storage__list">
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The main session of the National Multi-Subject Test (NMT)
                      is scheduled to take place in June.
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The additional session of the National Multi-Subject Test
                      (NMT) is scheduled to take place in June-July. The
                      additional session is intended for those applicants who,
                      due to valid reasons, were unable to take the tests during
                      the main session.
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
                <Trans>Motivation Letter</Trans>{" "}
              </h1>
              <p className="olimpics__text">
                <Trans>
                  One of the admission criteria for 2023 will also include a
                  motivation letter. For admission to the state-funded (budget)
                  places, the motivation letter will be used only to rank
                  applicants with the same competitive scores. The motivation
                  letter should be submitted by the applicant through their
                  personal account and should contain written information, in
                  any format chosen by the applicant, about their personal
                  interest in pursuing a specific educational program
                  (specialization, educational institution) and corresponding
                  expectations, achievements in academic and other areas of
                  activity, as well as their own strengths and weaknesses. If
                  necessary, the applicant may include supporting materials
                  (including electronic format) that confirm the information
                  provided in the letter. The motivation letter is mandatory for
                  all applicants and does not carry any score value.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="nmt">
        <div className="container">
          <div className="nmt__inner">
            <div className="nmt__title">
              <h1 className="nmt__suptitle">
                {" "}
                <Trans>
                  The tasks of the National Multi-Subject Test (NMT) will be
                  unique for each test day
                </Trans>{" "}
              </h1>
              <p className="nmt__text">
                <Trans>
                  The tasks of the National Multi-Subject Test (NMT) that will
                  be offered to participants on different test days will not be
                  repeated. The test question bank, prepared by experts from the
                  Ukrainian Center for Educational Quality Assessment, contains
                  a sufficient number of unique tasks. However, all NMT tasks
                  will align with the requirements of the official examination
                  programs approved by the Ministry of Education and Science. As
                  known, the main testing session will take place from June 5th
                  to June 23rd. Participants of the NMT will receive their test
                  invitations on May 25th-26th.
                </Trans>
              </p>
            </div>
            <StaticImage
              src="../../images/competition/nmt.png"
              alt="News"
              className="nmt__image"
            />
          </div>
        </div>
      </div>
      <div className="coefficient">
        <div className="container">
          <div className="coefficient__inner">
            <div className="coefficient__rating">
              <h1 className="rating__title">
                {" "}
                <Trans>
                  Step-by-step instructions for applicants in 2023
                </Trans>{" "}
              </h1>
              <StaticImage
                src="../../images/competition/steps.png"
                alt="News"
                className="steps__image"
              />
            </div>
            <div className="coeficcient__storage">
              <ul className="storage__list">
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      Creating an applicant's online account will be available
                      from July 1st
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      You can submit up to 5 applications for 5 specialties
                      (budget and contract) and up to 20 applications (contract
                      only) through your own online account from July 19th to
                      July 31st, indicating the priorities of your choices.
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      You can familiarize yourself with the ranking lists of
                      recommended candidates for budgetary positions on August
                      5th
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      To fulfill the enrollment requirements, you need to
                      confirm your choice of educational institution in your
                      online account by applying a qualified electronic
                      signature, upload a signed contract with a qualified
                      electronic signature, a scanned copy of your military
                      registration document (for males), and other documents
                      through the Google Form of the Admissions Committee, no
                      later than 6:00 PM on August 8, 2023
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      Enrollment for budgetary positions will be completed no
                      later than August 10, 2023
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      Enrollment for contract positions will take place from
                      August 10th to August 30th
                    </Trans>
                  </span>
                </li>
              </ul>
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
                <Trans>
                  The stages of the admission campaign for obtaining a master's
                  degree in 2023 may include the following steps
                </Trans>{" "}
              </h1>
              <ul className="storage__list">
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      Registration for participation in the External Independent
                      Evaluation (EIE) and the External Foreign Language
                      Verification (EFLV) at any higher education institution
                      will take place from May 8th to May 31st (main period) and
                      from July 12th to July 14th (additional period)
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      Registration of applicant's electronic accounts will begin
                      on July 1st
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The main and additional sessions of the External
                      Independent Evaluation (EIE) and the External Foreign
                      Language Verification (EFLV) will take place according to
                      the schedule of the Ukrinian Center for Educational
                      Quality Assessment (UCEQA) from June 26th to July 18th
                      (main period) and from August 4th to August 14th
                      (additional period)
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      The professional examination for individuals participating
                      in the competitive selection exclusively for privately
                      funded places will take place from July 31st until 18:00
                      on August 14th
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      Provision of recommendations for enrollment and
                      publication of the list of recommended candidates with
                      notification of their eligibility or ineligibility for
                      state-funded higher education will take place no later
                      than August 26th
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      Enrollment for contract positions will take place from
                      August 10th to August 30th
                    </Trans>
                  </span>
                </li>
              </ul>
            </div>
            <div className="coeficcient__storage">
              <StaticImage
                src="../../images/competition/etaps.png"
                alt="News"
                className="etaps__image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="nmt">
        <div className="container">
          <div className="nmt__inner">
            <div className="nmt__title">
              <h1 className="nmt__suptitle">
                {" "}
                <Trans>Submission of documents</Trans>{" "}
              </h1>
              <p className="nmt__text">
                <Trans>
                  Documents for admission are submitted by the applicant in
                  electronic form by uploading scanned copies of the documents
                  to a special Google form provided by the selection committee.
                  The Admissions Committee reviews the documents in accordance
                  with the procedures determined by the legislation
                </Trans>
              </p>
              <p className="nmt__text">
                <Trans>
                  If there are objective reasons for the absence of a document
                  confirming the obtained educational qualification level, a
                  certificate from the state enterprise 'Infresurs' regarding
                  its acquisition may be submitted.
                </Trans>
              </p>
              <StaticImage
                src="../../images/competition/docs.png"
                alt="News"
                className="docs__image"
              />
            </div>
            <div className="coeficcient__storage">
              <h1 className="storage__title">
                <Trans>
                  During the submission of documents for admission in electronic
                  form, applicants provide the following information to the
                  Google form
                </Trans>
              </h1>
              <ul className="storage__list">
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      A scanned copy of the application form signed with a
                      qualified digital signature (QDS) by the applicant should
                      be submitted
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      A copy of an identity document, as specified by the Law of
                      Ukraine 'On the Unified State Demographic Register and
                      Documents that Confirm the Citizenship of Ukraine,
                      Identity or Special Status,' should be submitted
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      A copy of the identification code should be submitted
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      A copy of the foreign passport should be submitted if
                      available
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      A copy of the document of the state standard certifying
                      the previously obtained educational degree
                      (educational-qualifying level), based on which the
                      admission is carried out, and its appendix, should be
                      submitted
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      Copies of all documents regarding previously obtained
                      higher education and their appendices should be submitted
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>Motivation Letter</Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      A copy of the military registration document, including
                      all pages containing information, should be submitted for
                      applicants enrolling in full-time studies. This applies to
                      individuals subject to military service, who should
                      provide either a military ID or a temporary certificate of
                      military duty, and to conscripts, who should provide a
                      certificate of assignment to the military registration
                      office
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      A copy of the education contract, signed with a qualified
                      electronic signature (KЕP), should be submitted
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      A copy of the contract for paid services, signed with a
                      qualified electronic signature (KЕP), should be submitted
                    </Trans>
                  </span>
                </li>
                <li className="storage__list__item">
                  <span className="storage__list__item__text">
                    <Trans>
                      A high-quality digital photo in the format of 3 x 4 should
                      be submitted.
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
            <Trans>Contacts</Trans>
          </div>
          <div className="abiturient__inner">
            <ul className="abiturient__list">
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  <Trans>
                    Phone numbers of the Admission Committee: +38 (097) 4189953,
                    +38 (095) 4201113. Email: abitur@nure.ua.
                  </Trans>
                </span>
              </li>
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  <Trans>Telegram: Applicant NURE @nure_osvita</Trans>
                </span>
              </li>
              <li className="abiturient__list__item">
                <span className="abiturient__list__item__text">
                  <Trans>Chat about ADMISSION 2022 to HNURE @nure_vstup</Trans>
                </span>
              </li>
              <p className="contact__text">
                <Trans>
                  For an individual consultation, you can fill out the 'NURE
                  applicant questionnaire'
                </Trans>
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="ask">
        <div className="container">
          <div className="ask__title">
            <h1 className="ask__suptitle">
              {" "}
              <Trans>
                Admission Committee of Kharkiv National University of Radio
                Electronics
              </Trans>
            </h1>
            <p className="ask__text">
              <Trans>
                The Admission Committee operates from Monday to Friday, from
                09:00 to 17:00, and on Saturdays from 09:00 to 13:00. Sundays
                are non-working days. The office is located in Room 117 of
                Building 'I' at Kharkiv National University of Radio Electronics
                (Kharkiv NURE).
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

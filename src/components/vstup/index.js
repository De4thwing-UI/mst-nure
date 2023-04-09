import React from "react"
import "./vstup.css"
import { StaticImage } from "gatsby-plugin-image"
import { Trans } from "react-i18next"

const Vstup = () => {
  return (
    <div>
      <div className="vstup">
        <div className="container">
          <div className="vstup__title">
            <Trans>Admission to Master's program in 2022</Trans>
          </div>
          <div className="vstup__inner">
            <ul className="vstup__timeline">
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    <Trans>Step 1. Register</Trans>
                  </h1>
                  <p className="vstup__item__text">
                    <Trans>
                      https://zno.testportal.com.ua/master/login – Participant's
                      Cabinet for the Unified Entrance Exam (ЄФВВ/ЄВІ) for
                      taking the Foreign Language Exam (ЄВІ) from May 11 to June
                      3 (at 18:00)
                    </Trans>
                  </p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    <Trans>Step 2. Entrance Exam</Trans>
                  </h1>
                  <p className="vstup__item__text">
                    <Trans>
                      The main session of the Unified Entrance Exam is held on
                      June 30th (an additional session is conducted on dates
                      determined by the Ukrainian Center for Assessment of
                      Education Quality).
                    </Trans>
                  </p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    <Trans>
                      Step 3. Register your electronic account from July 1st.
                    </Trans>
                  </h1>
                  <p className="vstup__item__text">
                    <Trans>
                      Step 4. Submit your application and required documents
                      from July 15th to July 23rd through your electronic
                      account.
                    </Trans>
                  </p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    <Trans>Step 4. Specialized entrance examinations</Trans>
                  </h1>
                  <p className="vstup__item__text">
                    <Trans>
                      For applicants who apply based on a higher education
                      degree (educational-qualification level) and have
                      successfully passed the unified entrance exam, the
                      specialized entrance examinations are held from July 19th
                      to July 30th.
                    </Trans>
                  </p>
                  <p className="vstup__item__text">
                    <Trans>Viewing competitive scores</Trans>
                  </p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    <Trans>
                      Step 5. Wait for the ranking list on August 2nd
                    </Trans>
                  </h1>
                  <p className="vstup__item__text">
                    <Trans>
                      Recommendations for enrollment on the state-funded quota
                      are provided no later than August 2nd.
                    </Trans>
                  </p>
                </div>
              </li>
              <li className="vstup__timeline__item">
                <div className="vstup__item__text">
                  <h1 className="vstup__item__title">
                    <Trans>Step 6. Submit original documents.</Trans>
                  </h1>
                  <p className="vstup__item__text">
                    <Trans>
                      During the period from August 2 (after the publication of
                      the list) to August 10, you need to submit the original
                      documents, thus fulfilling the requirements for admission
                      under the state order.
                    </Trans>
                  </p>
                  <p className="vstup__item__text">
                    <Trans>Set of documents</Trans>
                  </p>
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
                  <Trans>
                    Admission of applicants under the state order - August 12th.
                  </Trans>
                </h1>
                <p className="enrollment__text">
                  <Trans>
                    Fulfillment of requirements for admission to self-funded
                    places for individuals or legal entities ends on August 30th
                    at 12:00. Transfer to vacant places of the state and
                    targeted preferential state loans for individuals admitted
                    for tuition fees paid by individuals or legal entities (in
                    accordance with these Rules and Conditions) is carried out
                    no later than August 19th. Admission of applicants for
                    tuition fees paid by individuals or legal entities is on
                    August 31st.
                  </Trans>
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

import React from "react"
import "./atestat.css"
import { Trans } from "react-i18next"

const Atestat = () => {
  return (
    <div>
      <div className="atestat">
        <div className="container">
          <div className="atestat__title">
            <Trans>
              Admission to Kharkiv National University of Radio Electronics
              (KhNURE) based on a secondary school diploma
            </Trans>
          </div>
          <div className="atestat__inner">
            <ul className="atestat__timeline">
              <li className="atestat__timeline__item">
                <div className="atestat__item__text">
                  <h1 className="atestat__item__title">
                    <Trans>Step 1. Online application.</Trans>
                  </h1>
                  <p className="atestat__item__text">
                    <Trans>
                      In 2021, applicants who are applying for Bachelor's degree
                      programs based on a diploma of complete secondary
                      education for full-time study are required to submit their
                      applications for admission in electronic form on the
                      website https://ez.osvitavsim.org.ua/ from July 14th to
                      July 23rd
                    </Trans>
                  </p>
                  <p className="atestat__item__text">
                    <Trans>
                      After registration, the applicant will receive a login and
                      password to access their personal online account.
                    </Trans>
                  </p>
                  <p className="atestat__item__text">
                    <Trans>
                      The electronic application submitted by the applicant will
                      be immediately displayed in the section of the Unified
                      State Electronic Database on Education - EDEBO, to which
                      Kharkiv National University of Radio Electronics (KhNURE)
                      has access.
                    </Trans>
                  </p>
                </div>
              </li>
              <li className="atestat__timeline__item">
                <div className="atestat__item__text">
                  <h1 className="atestat__item__title">
                    <Trans>Step 2. List of recommended applicants</Trans>
                  </h1>
                  <p className="atestat__item__text">
                    <Trans>
                      On July 28th, you can familiarize yourself with the list
                      of recommended applicants on the website nure.ua
                    </Trans>
                  </p>
                </div>
              </li>
              <li className="atestat__timeline__item">
                <div className="atestat__item__text">
                  <h1 className="atestat__item__title">
                    <Trans>Step 3. Submission of documents</Trans>
                  </h1>
                  <p className="atestat__item__text">
                    <Trans>
                      From July 28th to August 2nd, 2021, personally submit the
                      original documents to the Admissions Committee of Kharkiv
                      National University of Radio Electronics (KhNURE). Please
                      prepare your documents in advance.
                    </Trans>
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
              <Trans>
                Admission to Kharkiv National University of Radio Electronics
                (KhNURE) based on a diploma of junior specialis
              </Trans>
            </h1>
            <p className="junior__text">
              <Trans>
                Applicants can be admitted on a state-funded basis only if they
                apply for the same or related field of study within the same
                field of knowledge. In this case, the academic difference in
                disciplines should not exceed 20 credits, which is indicated in
                writing on the reverse side of the applicant's application by
                the deputy dean of the Faculty of Computer Science, to which the
                applicant applies, and is certified with the signature of the
                dean.
              </Trans>
            </p>
          </div>
          <div className="junior__inner">
            <ul className="junior__timeline">
              <li className="junior__timeline__item">
                <div className="junior__item__text">
                  <h1 className="junior__item__title">
                    <Trans>
                      Step 1. Submit an application and documents from July 14th
                      to July 23rd.
                    </Trans>
                  </h1>
                  <p className="junior__item__text">
                    <Trans>Documents must be submitted in paper form.</Trans>
                  </p>
                  <p className="junior_text">
                    <Trans>To view the list of required documents</Trans>
                  </p>
                </div>
              </li>
              <li className="junior__timeline__item">
                <div className="junior__item__text">
                  <h1 className="junior__item__title">
                    <Trans>
                      Step 2. Take professional entrance exams from July 24 to
                      July 30, 2021.
                    </Trans>
                  </h1>
                  <p className="junior__item__text">
                    <Trans>
                      The required step is to pass professional exams
                    </Trans>
                  </p>
                </div>
              </li>
              <li className="junior__timeline__item">
                <div className="junior__item__text">
                  <h1 className="junior__item__title">
                    <Trans>
                      Step 3. Wait for the ranking list on August 2nd.
                    </Trans>
                  </h1>
                  <p className="junior__item__text">
                    <Trans>
                      The ranking list of applicants recommended for admission
                      under the state quota will be published on August 2, 2021.
                    </Trans>
                  </p>
                </div>
              </li>
              <li className="junior__timeline__item">
                <div className="junior__item__text">
                  <h1 className="junior__item__title">
                    <Trans>Step 4. Bring original documents in person.</Trans>
                  </h1>
                  <p className="junior__item__text">
                    <Trans>
                      After the publication of the list, it is necessary to
                      bring the original documents by 17:00 on August 4th, thus
                      fulfilling the requirements for admission under the state
                      order.
                    </Trans>
                  </p>
                  <p className="junior__item__text">
                    <Trans>
                      Admission of applicants under the state order will take
                      place on August 6th. Fulfillment of the requirements for
                      admission on a fee-paying basis for individuals/legal
                      entities in the daytime form of education ends at 12:00 on
                      August 30th, and for the correspondence form of education
                      - at 17:00 on September 30th.
                    </Trans>
                  </p>
                  <p className="junior__item__">
                    <Trans>
                      Admission of applicants on a fee-paying basis for
                      individuals/legal entities in the daytime form of
                      education will take place on August 31st, and for the
                      correspondence form of education - on October 1st.
                    </Trans>
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

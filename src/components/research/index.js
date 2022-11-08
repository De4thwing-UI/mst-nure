import React from "react"
import { Trans } from "react-i18next"
import "./research.css"

const Research = () => {
  return (
    <div className="research">
      <div className="container">
        <div className="research__title">
          <Trans>
            Student research work (NDRS) is implemented in the following way
          </Trans>
        </div>
        <div className="research__inner">
          <ul className="research__list">
            <li className="research__item">
              <span className="research__item__text">
                <Trans>
                  Participation of students in various scientific and practical
                  events: scientific seminars, forums, conferences, exhibitions,
                  competitions of student works, Olympiads in disciplines and
                  specialties.
                </Trans>
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                <Trans>
                  Involvement of students in the implementation of research
                  projects financed from various sources (state budget,
                  contracts, grants, etc.).
                </Trans>
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                <Trans>
                  Attestation works with research sections or of a completely
                  scientific and research nature.
                </Trans>
              </span>
            </li>
          </ul>
          <ul className="research__list">
            <li className="research__item">
              <span className="research__item__text">
                <Trans>
                  Individual research works of students, i.e. students'
                  participation in solving a certain problem under the guidance
                  of a specific scientific supervisor from among the teaching
                  staff.
                </Trans>
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                <Trans>Implementation of NDR in practice.</Trans>
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                <Trans>Inclusion of elements of the GDR in educational classes.</Trans>
              </span>
            </li>
            <li className="research__item">
              <span className="research__item__text">
                <Trans>Involvement of students in scientific and innovative activities.</Trans>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Research

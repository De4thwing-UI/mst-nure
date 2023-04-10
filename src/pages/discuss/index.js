import React from "react"
import { graphql } from "gatsby"
import "./discuss.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"

const DiscussgPage = () => {
  return (
    <div>
      <Header />
      <Title>
        {" "}
        <Trans>Discussion of OP</Trans>{" "}
      </Title>
      <div className="discuss">
        <div className="container">
          <div className="discuss__title">
            {" "}
            <Trans>Discussion of educational programs</Trans>{" "}
          </div>
          <div className="discuss__inner">
            <div className="discuss__text">
              <p className="discuss__text__item">
                <Trans>
                  The Department of MST has initiated the annual process of
                  public discussion of educational programs.
                </Trans>
              </p>
              <p className="discuss__text__item">
                <Trans>
                  The strategy for higher education reform includes the
                  establishment of a system for monitoring and continuous
                  improvement of the quality of higher education. This aligns
                  with the recommendations and standards of the European Higher
                  Education Area, taking into account the best domestic and
                  international practices. Please send your feedback to the
                  Department of MST at the email address: d_mst@nure.ua
                </Trans>
              </p>
              <p className="discuss__text__item">
                <Trans>
                  The key task of such a reform is to involve external and
                  internal stakeholders in the development of educational
                  programs.
                </Trans>
              </p>
              <p className="discuss__text__item">
                <Trans>
                  Suggestions and comments are requested to be sent to the email
                  address of the MST Department:
                </Trans>{" "}
                <span> d_mst @nure.ua </span>
              </p>
            </div>
            <div className="discuss__title">
              <Trans>Draft educational plans and programs for discussion</Trans>
            </div>
            <div className="discuss__text">
              <ul className="discuss__list">
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/14b7GFHjXqP3-s6Pb361tjw_OCBVCKhDj/view?usp=sharing"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    <Trans>
                      Curriculum for the educational and professional program'
                      Printed Publication Technologies' at the second level of
                      higher education.
                    </Trans>
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1WoL60ebWHIiolAF91RNFhLWXA2pRWq_F/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    <Trans>
                      Curriculum for the educational and professional program
                      'Computer Technologies and Publishing-Polygraphic
                      Productions Systems' at the second level of higher
                      education.
                    </Trans>
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1TLaoj7tpTnYEpHpppKWixuwM9MtuiZ_q/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    <Trans>
                      Curriculum for the educational and professional program
                      'Electronic Multimedia Publication Technologies' at the
                      second level of higher education.
                    </Trans>
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1C86semW58vpLdVJ1elpjRMRvvBHzlG2D/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    <Trans>
                      Curriculum for the educational and professional program
                      'Publishing and Printing Industry' at the first
                      (bachelor's) level of higher education.
                    </Trans>
                  </a>
                </li>
              </ul>
            </div>
            <div className="discuss__title">
              <Trans>Draft educational program proposals for discussion</Trans>
            </div>
            <div className="discuss__text">
              <ul className="discuss__list">
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1hpWSP1MgyLYnnlrEn-ZxqH1ZFGRGJQCt/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    <Trans>
                      Educational and professional program 'Printed Publication
                      Technologies' at the second level of higher education.
                    </Trans>
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1HVqnAn3yVEME5450T3-9I6VlqXEDuFfG/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    <Trans>
                      Educational and professional program 'Computer
                      Technologies and Publishing-Polygraphic Productions
                      Systems' at the second level of higher education.
                    </Trans>
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1IjZ4WUprMMClWNQnuI5qKTCtuPlNmGPe/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    <Trans>
                      Educational and professional program 'Electronic
                      Multimedia Publication Technologies' at the second level
                      of higher education.
                    </Trans>
                  </a>
                </li>
                <li className="discuss__list__item">
                  <a
                    href="https://drive.google.com/file/d/1-P0qD0KqNOP7pyWPEdSusGbHDZDdsGPW/view"
                    className="discuss__list__link"
                    target="_blank"
                  >
                    <Trans>
                      Educational and professional program 'Publishing and
                      Printing Business' at the first (bachelor's) level of
                      higher education.
                    </Trans>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default DiscussgPage

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

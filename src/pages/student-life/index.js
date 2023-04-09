import React from "react"
import { graphql } from "gatsby"
import "./student-life.css"
import { StaticImage } from "gatsby-plugin-image"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"
const StudentlifePage = () => {
  return (
    <div>
      <Header />
      <Title>
        {" "}
        <Trans>Student`s life</Trans>{" "}
      </Title>
      <div className="student-life">
        <div className="container">
          <div className="student-life__inner">
            <div className="student-life__title">
              <h1 className="student-life__suptitle">
                <Trans>Interesting and Diverse Student Life</Trans>
              </h1>
              <p className="student-life__text">
                <Trans>
                  In our university, various events such as concerts,
                  competitions, trainings, and workshops take place, where
                  students have the opportunity to showcase their talents, learn
                  something new, and engage in diverse activities.
                </Trans>
              </p>
              <p className="student-life__text">
                <Trans>
                  In September, the most grand and exciting event for first-year
                  students is traditionally the Zip-Quest.
                </Trans>
              </p>
            </div>
            <StaticImage src="../../images/student-life/1.png" alt="News" />
          </div>
        </div>
      </div>
      <div className="quest">
        <div className="container">
          <div className="quest__inner">
            <StaticImage src="../../images/student-life/2.png" alt="News" />
            <div className="quest__title">
              <h1 className="quest__suptitle"> Zip - квест </h1>
              <p className="quest__text">
                <Trans>
                  The event, known as Zip-Quest, takes place on a specially
                  prepared route within Kharkiv National University of Radio
                  Electronics (KhNURE), where participants get to explore the
                  various structural units of the university, participate in
                  competitions, and have a fun time. This year, each checkpoint
                  on the route represented a different country, and participants
                  had to complete tasks related to the country to earn points.
                  The organization of the quest involves volunteers who are
                  students themselves and assist teams in navigating the
                  university. The main goal of Zip-Quest is to foster friendship
                  among students and acquaint them with the structure of the
                  university.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="miss-nure">
        <div className="container">
          <div className="miss__nure__title">
            <h1 className="miss__nure__suptitle"> Міс і містер ХНУРЕ 2017 </h1>
            <p className="miss__nure__text">
              <Trans>
                On April 22, at Kharkiv National University of Radio
                Electronics, one of the annual beauty and talent contests, «Miss
                and Mister Kharkiv National University of Radio Electronics
                2017,» took place, which was held this time at the nightclub
                «Bolero»! The celebration of spring and beauty gathered over 300
                spectators, who filled the hall and eagerly watched what was
                happening on stage, cheering for their favorite participants.
              </Trans>
            </p>
          </div>
          <div className="miss-nure__inner">
            <StaticImage
              src="../../images/student-life/3.png"
              alt="News"
              className="miss-nure__image"
            />
            <StaticImage
              src="../../images/student-life/4.png"
              alt="News"
              className="miss-nure__image"
            />
            <StaticImage
              src="../../images/student-life/5.png"
              alt="News"
              className="miss-nure__image"
            />
            <StaticImage
              src="../../images/student-life/6.png"
              alt="News"
              className="miss-nure__image"
            />
          </div>
        </div>
      </div>
      <div className="mrs__nure">
        <div className="container">
          <div className="mrs__nure__inner">
            <div className="mrs__nure__result">
              <h1 className="mrs__nure__title">
                {" "}
                <Trans>The results of the contest</Trans>{" "}
              </h1>
              <p className="mrs__nure__text">
                <Trans>
                  The results of the contest showed that Maria Shatska, a
                  student of the Faculty of Automation and Computerized
                  Technologies, became Miss HNURE, and Sergei Butov, a student
                  of the Faculty of Computer Engineering and Management, became
                  Mr. HNURE.
                </Trans>
              </p>
              <p className="mrs__nure__text">
                <Trans>
                  Separately, the winners of the audience choice contest, which
                  took place with the support of the website 057.ua, were
                  honored. They were Elizaveta Chernysh from the Faculty of
                  Computer Science, and Andrii Kharlamov.
                </Trans>
              </p>
              <p className="mrs__nure__text">
                <Trans>
                  The contest evaluated not only beauty but also the talents of
                  our students. The most talented participants were recognized
                  as Konstantin Bovenko, who demonstrated professional
                  directorial work, and Darina Prykhodko, who performed in the
                  genre of sand animation.
                </Trans>
              </p>
            </div>
            <div className="mrs__nure__trio">
              <h1 className="mrs__nure__trio__title">
                <Trans>
                  The winners' lists were further complemented with:
                </Trans>
              </h1>
              <u className="mrs__nure__trio__list">
                <li className="mrs__nure__trio__item">
                  <span>
                    {" "}
                    <Trans>
                      First Vice Miss - Darina Prykhodko (Faculty of Electronics
                      and Telecommunications)
                    </Trans>{" "}
                  </span>
                </li>
                <li className="mrs__nure__trio__item">
                  <span>
                    {" "}
                    <Trans>
                      Second Vice Miss - Veronika Parkhomenko (Faculty of
                      Computer Science and Control)
                    </Trans>{" "}
                  </span>
                </li>
                <li className="mrs__nure__trio__item">
                  <span>
                    {" "}
                    <Trans>
                      First Vice Mister - Denis Petruk (Faculty of Computer
                      Science and Control)
                    </Trans>{" "}
                  </span>
                </li>
                <li className="mrs__nure__trio__item">
                  <span>
                    {" "}
                    <Trans>
                      Second Vice Mister - Emmanuel Biney (Faculty of Computer
                      Engineering and Management)
                    </Trans>{" "}
                  </span>
                </li>
              </u>
            </div>
          </div>
        </div>
      </div>
      <div className="molod-life">
        <div className="container">
          <div className="molod-life__inner">
            <div className="molod-life__title">
              <h1 className="molod-life__suptitle">
                <Trans>Radio Electronics and Youth in the 21st Century</Trans>
              </h1>
              <p className="molod-life__text">
                <Trans>
                  In April, Kharkiv National University of Radio Electronics
                  (KhNURE) annually hosts the International Youth Forum 'Radio
                  Electronics and Youth in the 21st Century'. The forum is
                  supported by the Ministry of Education and Science of Ukraine
                  and has been held since 1997.
                </Trans>
              </p>
              <p className="molod-life__text">
                <Trans>
                  The aim of the forum is to unite young scientists, students,
                  and postgraduates from different countries around the idea of
                  creating an information space, strengthening connections,
                  trust, and cooperation among them.
                </Trans>
              </p>
            </div>
            <StaticImage src="../../images/student-life/7.png" alt="News" />
          </div>
        </div>
      </div>
      <div className="exhibition">
        <div className="container">
          <div className="exhibition__inner">
            <h1 className="exhibition__title">
              <Trans>
                In addition, as part of the International Youth Forum 'Radio
                Electronics and Youth in the 21 st Century', a technical
                creativity exhibition is organized at the university, showcasing
                the technical projects and creative works of the youth.
              </Trans>
            </h1>
            <p className="exhibition__text">
              <Trans>
                The exhibition traditionally features devices, devices and
                hardware-software developments, software developments, as well
                as printing developments of students from the Department of MST,
                including posters on social and environmental topics, magazine
                and book publications created using multimedia information
                technologies.
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

export default StudentlifePage

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

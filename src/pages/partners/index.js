import React from "react"
import { graphql } from "gatsby"
import "./partners.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"

const PartnersPage = () => {
  return (
    <div>
      <Header />
      <Title>
        <Trans>Partners</Trans>
      </Title>
      <div className="partners">
        <div className="container">
          <div className="partners__title">
            <Trans>Vocational schools</Trans>
          </div>
          <ul className="partners__inner">
            <li className="partners__item">
              <a
                href="http://www.zgec.zp.ua/"
                className="partners__link"
                target="_blank"
              >
                <Trans>Zaporizhzhia State Engineering Academy</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.chtk.ck.ua/main/"
                className="partners__link"
                target="_blank"
              >
                <Trans>Cherkasy Art and Technical College</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://poligraflicey.sphere.kharkov.com/"
                className="partners__link"
                target="_blank"
              >
                <Trans>
                  Kharkiv Polygraphic Center for Vocational and Technical
                  Education
                </Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://kvppu.narod.ru/Index.htm"
                className="partners__link"
                target="_blank"
              >
                <Trans>Kyiv Higher Vocational Polygraphic School</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://old.iatp.org.ua/"
                className="partners__link"
                target="_blank"
              >
                <Trans>
                  Dnipro Center for Vocational and Technical Education in
                  Printing and Information Technologies
                </Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://zcpto.ho.ua/"
                className="partners__link"
                target="_blank"
              >
                <Trans>
                  Zaporizhia Center for Vocational and Technical Education
                </Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.vpu25.km.ua/"
                className="partners__link"
                target="_blank"
              >
                <Trans>Khmelnytskyi Higher Vocational School No. 25</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="" className="partners__link" target="_blank">
                <Trans>Donetsk Polygraphic Lyceum</Trans>
              </a>
            </li>
          </ul>
          <div className="partners__title">
            <Trans>Higher education institutions</Trans>
          </div>
          <ul className="partners__inner">
            <li className="partners__item">
              <a
                href="http://vpi.kpi.ua/"
                className="partners__link"
                target="_blank"
              >
                <Trans>
                  National Technical University of Ukraine 'Kyiv Polytechnic
                  Institute' Publishing and Printing Institute
                </Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://vpi.kpi.ua/"
                className="partners__link"
                target="_blank"
              >
                <Trans>Ukrainian Academy of Printing</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="https://lpnu.ua/"
                className="partners__link"
                target="_blank"
              >
                <Trans>Lviv Polytechnic National University</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="https://www.hneu.edu.ua/"
                className="partners__link"
                target="_blank"
              >
                <Trans>
                  Kharkiv National University of Economics named after S.
                  Kuznets
                </Trans>
              </a>
            </li>
          </ul>
          <div className="partners__title">
            <Trans>Enterprises</Trans>
          </div>
          <div className="partners__text">
            <p className="partners__text__item">
              <Trans>
                The beginning of student relations with enterprises starts from
                the 1st year. According to the curriculum of the course
                'Introduction to the Specialty,' 1st-year students go on
                informative excursions to printing enterprises in Kharkiv.
              </Trans>
            </p>
            <p className="partners__text__item">
              <Trans>
                From the 2nd to the 5th year, laboratory work and practical
                classes on specialized subjects such as 'Fundamentals of
                Printing Technology,' 'Technology and Equipment of Printing
                Processes' are conducted at the Printing Factory 'Tornado' (PP
                'Unisoft'), 'Technology of Operational and Special Printing,'
                'Photographic and Forming Processes,' 'Nodes and Mechanisms of
                Printing Equipment' at the Institute of Laser Technologies,
                Kharkiv Printing Center of Vocational and Technical Education,
                'Photographic and Forming Processes,' 'Color Management Systems'
                at LLC 'Burunin & Co,' 'Video Information Processing' at the
                Television Center of KhNURE, and others.
              </Trans>
            </p>
          </div>
          <ul className="partners__inner">
            <li className="partners__item">
              <a href="http://www.factor.ua/" className="partners__link">
                <Trans> «Factor - Print» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.format-kharkov.com.ua/"
                className="partners__link"
              >
                <Trans>«Factor - Print» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="http://www.goldenpages.ua/" className="partners__link">
                <Trans>«Golden Pages» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://mst.nure.ua/reproline.org"
                className="partners__link"
              >
                <Trans>«Reproline» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.niilt.kharkov.com/"
                className="partners__link"
              >
                <Trans>
                  «Research and Development Institute of Laser Technologies»
                  Joint Stock Company
                </Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="http://burunin.com.ua/" className="partners__link">
                <Trans>«Burunin and Co» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="http://www.ranok.com.ua/" className="partners__link">
                <Trans>LLC Publishing House 'Ranok'</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="#" className="partners__link">
                <Trans>«Astron Plus» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="http://madrid.in.ua/" className="partners__link">
                <Trans>«Madrid Printing» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="http://tube-plant.com/" className="partners__link">
                <Trans>«Tubnyi Zavod» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.qualium-systems.com/"
                className="partners__link"
              >
                <Trans>«Kvolium-Systems» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a
                href="http://www.qualium-systems.com/"
                className="partners__link"
              >
                <Trans>«Unisoft» PP</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="http://aladdin-print.ua/" className="partners__link">
                <Trans>«Aladdin-print» PP</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="http://wu.ua/" className="partners__link">
                <Trans>«Web Ukraine» LLC</Trans>
              </a>
            </li>
            <li className="partners__item">
              <a href="http://dnzpoligraf.com.ua/" className="partners__link">
                <Trans>
                  Kharkiv Polygraphic Center for Vocational and Technical
                  Education
                </Trans>
              </a>
            </li>
          </ul>
          <div className="partners__title">
            <Trans>International cooperation</Trans>
          </div>
          <div className="partners__text">
            <p className="partners__text__item">
              <Trans>
                One of the main directions of work of the MST Department is
                international cooperation with universities in Europe and North
                America. This direction of work allows for monitoring and
                improving the quality of education.
              </Trans>
            </p>
            <p className="partners__text__item">
              <Trans>
                The main forms of work in this direction include exchange of
                educational plans and programs, joint scientific research and
                development, preparation of joint publications and
                presentations, internships for faculty, staff, and graduate
                students of the department, as well as student exchange
                programs.
              </Trans>
            </p>
            <p className="partners__text__item">
              <Trans>
                Currently, there is a Double Degree program in place with the
                Higher School of Economics in Bydgoszcz, Poland. This program
                allows our students to obtain a master's degree from our
                university and a master's degree of European standard.
              </Trans>
            </p>
            <p className="partners__text__item">
              <Trans>
                The Department of International Cooperation at the MST
                department has signed scientific and technical cooperation
                agreements with the following international educational
                institutions:
              </Trans>
            </p>

            <ul className="partners__inner__text    ">
              <li className="partners__item">
                <span className="partners__item__text">
                  <Trans>
                    Угода про співробітництво між ХНУРЕ та Штутгартським медіа -
                    університетом.Студенти мають можливість пройти навчання за
                    програмою мобільності за наступними курсами: «Технологія
                    друкованих видань», «Створення аудіо - та відеоконтенту»,
                    «Міжнародний менеджмент в медіаіндустрії».
                  </Trans>
                </span>
              </li>
              <li className="partners__item">
                <span className="partners__item__text">
                  <Trans>
                    The agreement on scientific and educational cooperation
                    between St. Petersburg State University of Technology and
                    Design and Kharkiv National University of Radio Electronics
                    (NURE) includes joint scientific and practical conferences
                    being held.
                  </Trans>
                </span>
              </li>
              <li className="partners__item">
                <span className="partners__item__text">
                  <Trans>
                    Agreement on strengthening ties, expanding exchange of
                    experience in the field of publishing and printing, and
                    implementing innovative forms and methods of education
                    between universities: National Technical University of
                    Ukraine 'Kyiv Polytechnic Institute' (NTUU 'KPI'), Kharkiv
                    National University of Radio Electronics (NURE), Belarusian
                    State Technological University, Tashkent Institute of
                    Textile and Light Industry, Kazakh National Technical
                    University, Kyrgyz Technical University, Tajik Technical
                    University, Moscow State University of Printing.
                  </Trans>
                </span>
              </li>
            </ul>
            <p className="partner__text__item">
              <Trans>
                Agreement on cooperation between Kharkiv National University of
                Radio Electronics (NURE) and Higher School of Economics in
                Bydgoszcz (Poland). Within the framework of this agreement,
                joint work on the project 'Tourism in Skole' is carried out in
                2017-2018, with the aim of creating a multimedia application
                (with elements of geoinformatics) for desktop and mobile
                devices.
              </Trans>
            </p>
            <p className="partner__text__item">
              <Trans>
                From May 16 to May 22, 2017, a delegation consisting of Svitlana
                Kashuba (Professor at WSG, Director of the European Institute,
                Bydgoszcz, Poland), Marek Shamota (Professor, Director of the
                Department of Creative Industries 'Printing, Multimedia and Web
                Technologies' at WSG), and Oksana Bieliakova (Deputy Director of
                the Representative Office of the Polish Academy of Sciences in
                Kyiv) participated in the 2nd International Scientific and
                Technical Conference 'Printing, Multimedia and Web
                Technologies'.
              </Trans>
            </p>
            <p className="partner__text__item">
              <Trans>
                During this conference, Professor M. Shamota delivered a report
                entitled 'Contemporary Audiovisual Culture in the Context of
                Partnership Relations between Ukraine and Poland' during a
                plenary session.
              </Trans>
            </p>
            <p className="partner__text__item">
              <Trans>
                As part of this conference, a video conference was conducted
                with the University of Guanajuato (Mexico). Interesting
                presentations were made from both sides.
              </Trans>
            </p>
            <p className="partner__text__item">
              <Trans>
                Students from the Department of Media and Screen Technologies
                actively participated in the III International Exhibition 'The
                World through the Eyes of the Youth' held at the gallery under
                Brdo, in Bydgoszcz, Poland. They exhibited 18 works at the
                exhibition.
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

export default PartnersPage

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

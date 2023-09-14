import React from "react"
import { graphql, Link } from "gatsby"
import "./annotations.css"
import Header from "src/components/header"
import Footer from "src/components/footer"
import News from "src/components/lastnews"
import Title from "src/components/title"
import { Trans } from "react-i18next"
const AnnotationsPage = () => {
  return (
    <div>
      <Header />
      <Title>
        {" "}
        <Trans>Annotations of disciplines</Trans>{" "}
      </Title>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            {" "}
            <Trans>Free Choice Bachelor</Trans>{" "}
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F01.pdf&clen=72776&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Animation Technologies</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F02.pdf&clen=281627&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>
                    Fundamentals of Packaging Technology and Design.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F03.pdf&clen=80857&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>
                    Technological Process Management Systems for Publishing
                    Preparation.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F04.pdf&clen=120122&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Audio Information Processing.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F05.pdf&clen=103078&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Video Information Processing.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F06.pdf&clen=122067&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Printing Materials.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F07.pdf&clen=121648&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Digital Printing Technologies.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F08.pdf&clen=124971&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Technology of Offset and Specialty Printing.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F09.pdf&clen=101649&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>3D Modeling.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F11.pdf&clen=284251&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Visual Communications.</Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F12.pdf&clen=83004&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Management in Publishing and Printing Industry.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F13.pdf&clen=89605&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Fundamentals of Marketing and Advertising.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F14.pdf&clen=115309&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>
                    Fundamentals of Editing and Proofreading in Publishing.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F15.pdf&clen=110763&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Patent Studies and Copyright Law.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F16.pdf&clen=116205&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Typography Technologies.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F19.pdf&clen=88458&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Computer Networks.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F18.pdf&clen=401236&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Computer Game Design Technologies.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F17.pdf&clen=87764&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Fundamentals of UI/UX.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fvilnij-vibir-bakalavr%2F20.pdf&clen=94928&chunk=true"
                  className="annotations__link"
                  target="_blank"
                >
                  <Trans>Computer Visualization Technologies.</Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            {" "}
            <Trans>Bachelor's Degree in University Selection</Trans>{" "}
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-vnz%2F2.pdf&clen=281754&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Fundamentals of Graphic Design.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-vnz%2F3.pdf&clen=58354&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Fundamentals of Color Theory and Color Reproduction.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-vnz%2F4.pdf&clen=114473&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Software Tools for Computer Publishing Systems.</Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-vnz%2F5.pdf&clen=107875&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Design and Calculation of Technological Processes for
                    Publishing Preparation and Production.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-vnz%2F6.pdf&clen=82293&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Color Management Systems.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-vnz%2F7.pdf&clen=104572&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Theoretical Foundations of Halftoning.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-vnz%2F8.pdf&clen=282739&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Artistic Foundations of Publication Design.</Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            <Trans>Bachelor's Degree in Normative Sciences</Trans>
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F01.pdf&clen=105290&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Bachelor's Thesis.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F02.pdf&clen=75687&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Introduction to the Specialty.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F03.pdf&clen=83720&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Nodes and Mechanisms of Printing Equipment.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F04.pdf&clen=124518&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Engineering and Computer Graphics.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F05.pdf&clen=135091&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Informatics.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F06.pdf&clen=60234&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Graphic Information Processing.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F07.pdf&clen=130641&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Text Information Processing.</Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F08.pdf&clen=81543&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Fundamentals of Metrology, Standardization, and Quality
                    Management.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F09.pdf&clen=107927&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Fundamentals of Print Production Technology.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F10.pdf&clen=105398&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Technical Mechanics.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F11.pdf&clen=82109&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Photographic Registration and Forming Processes.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a href="#" target="_blank" className="annotations__link">
                  <Trans>Fundamentals of Materials Science.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fbakalavr-normativ%2F12.pdf&clen=109591&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Technical Tools in Publishing and Printing Industry.
                  </Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            {" "}
            <Trans>The Master of Normative Affairs</Trans>{" "}
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fmagistr-normativ%2F1.pdf&clen=122701&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Fundamentals of Scientific Research and Science
                    Organization.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fmagistr-normativ%2F2.pdf&clen=105766&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>System Analysis and Decision Support.</Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fmagistr-normativ%2F3.pdf&clen=121562&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Modeling of Technical Systems.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fmagistr-normativ%2F4.pdf&clen=122295&chunk=trueА"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Mathematical Statistics and Data Processing.</Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            {" "}
            <Trans>
              Bachelor's in Computer Science and Software Engineering
            </Trans>{" "}
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-bakalavr%2Fosnovi-web-tekhnologij.pdf&clen=51735&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Fundamentals of Web Technologies.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-bakalavr%2Ftekhnologiya-ta-obladnannya-poligrafichnikh-protsesiv.pdf&clen=122754&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Technology and Equipment of Printing Processes.</Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-bakalavr%2Fproektuvannya-kompyuternikh-vidavnichikh-sistem-ta-komponentiv.pdf&clen=121985&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Design of Computer Publishing Systems and Components
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-bakalavr%2Ftekhnologiya-pidgotovki-elektronnikh-vidan.pdf&clen=79404&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Technology of Electronic Publishing Preparation.
                  </Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            {" "}
            <Trans>Master's KTSVPV</Trans>{" "}
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F01.pdf&clen=143694&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Design and Development of Cross-Media Products.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F03.pdf&clen=88992&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Promotion of Cross-Media Products.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F07.pdf&clen=111053&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Information Security in Printing Industry.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F08.pdf&clen=86264&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Quality Evaluation of Printing Products.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F09.pdf&clen=399545&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Development and Modeling of Business Processes in Printing
                    Production.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F11.pdf&clen=96615&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Automated Management Systems for Publishing and Printing
                    Processes.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F12.pdf&clen=90310&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Design and Development of Interfaces for Interactive
                    Publications.
                  </Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F14.pdf&clen=114535&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Project Management.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F2.pdf&clen=58622&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Animation in Mobile Applications.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F13.pdf&clen=92563&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Multimedia Information Product Development Technologies.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F8.pdf&clen=88047&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Testing and Quality Assurance of Mobile Applications.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F1.pdf&clen=75558&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Design and Development of Mobile Applications.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F1.pdf&clen=75558&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Cutting-Edge Technologies and Materials.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F3.pdf&clen=135997&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Internet Marketing.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a href="#" target="_blank" className="annotations__link">
                  <Trans>
                    Organization and Management of Printing Production.
                  </Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            {" "}
            <Trans>Bachelor's in Business Administration</Trans>{" "}
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-bakalavr%2Fekspluatatcia-poligrafichnogo-obladnannya.pdf&clen=97818&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Operation of Printing Equipment.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-bakalavr%2Fosnovi-proektuvannya-elektronnikh-vidan.pdf&clen=85885&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Fundamentals of Electronic Publication Design.</Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-bakalavr%2Fproektuvannya-poligrafichnogo-virobnitstva.pdf&clen=84765&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Design of Printing Production.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-bakalavr%2Ftekhnologiya-ta-obladnannya-drukar-ta-pislyadruk-protsesiv.pdf&clen=85564&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Technology and Equipment for Printing and Post-Printing
                    Processes.
                  </Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            {" "}
            <Trans>Master's in Business Administration</Trans>{" "}
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F01.pdf&clen=143694&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Technologies for Securing Printed Products.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F14.pdf&clen=114535&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Project Management.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-magistr%2F2.pdf&clen=77375&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Operational and Specialized Types of Printing.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-magistr%2F3.pdf&clen=97506&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Organization and Management of Publishing and Printing
                    Production.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-magistr%2F4.pdf&clen=86264&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Quality assessment of printing products.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-magistr%2F5.pdf&clen=396901&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Automated management systems for printing production
                    processes.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-magistr%2F6.pdf&clen=85903&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Design and manufacturing technologies for packaging.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F03.pdf&clen=88992&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Promotion of Cross-Media Products.</Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-magistr%2F7.pdf&clen=398431&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Development and modeling of publishing technological
                    processes.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F01.pdf&clen=143694&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Design and Development of Cross-Media Products.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F01.pdf&clen=143694&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Design and Development of Cross-Media Products.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F8.pdf&clen=88047&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Testing and Quality Assurance of Mobile Applications.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-magistr%2F8.pdf&clen=90310&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Design and Development of Interfaces for Interactive
                    Publications.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F15.pdf&clen=108679&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Cutting-Edge Technologies and Materials.</Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            {" "}
            <Trans>
              Bachelor's degree in Engineering, Electronics, and
              Microelectronics Technology
            </Trans>{" "}
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-bakalavr%2Fweb-tekhnologiii.pdf&clen=52668&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Web technologies</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-bakalavr%2Fosnovi-proektuvannya-elektronnikh-vidan.pdf&clen=85885&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Computer technologies for advertising production for print
                    and electronic media.
                  </Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-bakalavr%2Fproektuvannya-elektronnikh-multimedijnikh-vidan.pdf&clen=80746&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Designing electronic multimedia publications.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-bakalavr%2Ftexnichni-zasoby-mediatechnologij.pdf&clen=78426&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Technical tools of media technologies.</Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="annotations">
        <div className="container">
          <div className="annotations__title">
            {" "}
            <Trans>
              Master's degree in Media Engineering and Multimedia Technologies
            </Trans>{" "}
          </div>
          <div className="annotations__inner">
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F1.pdf&clen=75558&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Design and Development of Mobile Applications.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F2.pdf&clen=58622&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Animation in Mobile Applications.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F3.pdf&clen=135997&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Web marketing</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F4.pdf&clen=50821&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Web system design and development.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F5.pdf&clen=47226&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Web analytics and search engine optimization.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F6.pdf&clen=92938&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Databases in Multimedia Systems</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F7.pdf&clen=179416&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>UI/UX of Multimedia Products</Trans>
                </a>
              </li>
            </ul>
            <ul className="annotations__list">
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftemv-magistr%2F8.pdf&clen=88047&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Testing and Quality Assurance of Mobile Applications
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F14.pdf&clen=114535&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Project Management.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-magistr%2F8.pdf&clen=90310&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>
                    Design and Development of Interfaces for Interactive
                    Publications.
                  </Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Ftdv-magistr%2F4.pdf&clen=86264&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Quality Evaluation of Printing Products.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F15.pdf&clen=108679&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Cutting-Edge Technologies and Materials.</Trans>
                </a>
              </li>
              <li className="annotations__list__item">
                <a
                  href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/viewer.html?pdfurl=http%3A%2F%2Fmst.nure.ua%2Fimages%2Fanotatsiyi-distsiplin-2019%2Fktsvpv-magistr%2F03.pdf&clen=88992&chunk=true"
                  target="_blank"
                  className="annotations__link"
                >
                  <Trans>Promotion of Cross-Media Products.</Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  )
}

export default AnnotationsPage

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

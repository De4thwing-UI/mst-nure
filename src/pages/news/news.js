import React from 'react';
import { graphql, Link } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
const NewsPage = () => {


  return (
    <div>
      <Header />
      <Footer />

    </div>
  )
};

export default NewsPage;

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

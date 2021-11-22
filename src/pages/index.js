import React from 'react';
import {graphql} from 'gatsby';
import Header from '../components/header/header';
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import { Button } from '@material-ui/core'

const IndexPage = () => {

  const { t } = useTranslation();

  return (
    <main>
      <Button variant="contained">Hello World</Button>
      <h1><Header/></h1>
      <h1><Trans>Welcome to my Gatsby site!</Trans></h1>
      <p><Trans>My name is Shanika</Trans></p>
      <p><Trans>My profession is SSE</Trans></p>
      <p><Trans>My Birthday is 1990/10/10</Trans></p>
      <p>{t('message')}</p>
    </main>
  )
};

export default IndexPage;

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
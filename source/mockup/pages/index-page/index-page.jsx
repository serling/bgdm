// IndexPage
import React from 'react';

import Layout from '../../../components/layout';
import Row from '../../../components/row';
import Hero from '../../../components/hero';
import Quote from '../../../components/quote';
import AllGames from '../../../components/all-games';
import Search from '../../../components/search';

const IndexPage = () => (
  <Layout>
    <Row>
      <Search />
    </Row>
    <Row>
      <AllGames heading={'lots and lots'} />
    </Row>
    <Row backgroundColor={Row.colors.secondary} padding={Row.paddings.large}>
      <Quote
        quoteText="hello"
        gameTitle="asd"
        gameHref="#"
        text="hello, everybody"
        reviewerName="Terje"
        reviewerHref="#"
      />
    </Row>
    <Row>
      <Hero />
    </Row>
  </Layout>
);

export default IndexPage;

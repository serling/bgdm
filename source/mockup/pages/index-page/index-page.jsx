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
      <Hero />
    </Row>
    <Row backgroundColor={Row.colors.secondary} padding={Row.paddings.large}>
      <Quote
        text="Et overraskende lyspunkt."
        gameTitle="(Long and Convoluted Title)"
        gameHref="#superfun"
        reviewerName="Espen"
        reviewerHref="#tarjei"
      />
    </Row>
    <Row>
      <div>testing backgrounds</div>
      <div>testing backgrounds</div>
      <div>testing backgrounds</div>
    </Row>
    <Row>
      <AllGames heading={'The whole collection'} />
    </Row>
  </Layout>
);

export default IndexPage;

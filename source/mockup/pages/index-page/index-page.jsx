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
    <Row
      backgroundName="background2"
      // backgroundColor={Row.colors.secondary}
      padding={Row.paddings.huge}
    >
      <Quote
        text="Et overraskende lyspunkt. Et overraskende lyspunkt."
        gameTitle="(Long and Convoluted Title)"
        gameHref="#superfun"
        reviewerName="Espen"
        reviewerHref="#tarjei"
      />
    </Row>
    <Row>
      <AllGames heading={'The whole collection'} />
    </Row>
  </Layout>
);

export default IndexPage;

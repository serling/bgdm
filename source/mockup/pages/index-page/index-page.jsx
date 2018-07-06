// IndexPage
import React from 'react';

import Layout from '../../../components/layout';
import Row from '../../../components/row';
import Quote from '../../../components/quote';
import AllGames from '../../../components/all-games';
import Search from '../../../components/search';

const IndexPage = () => (
  <Layout>
    <Row>
      <Search />
    </Row>
    <Row backgroundName="background19" padding={Row.paddings.huge}>
      <Quote
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro magnam molestias quidem impedit, cumque, nihil necessitatibus perspiciatis adipisci sit assumenda in cupiditate quaerat accusamus dolor dolores quo voluptas deserunt."
        gameTitle="This is a Title 3"
        gameHref="#superfun"
        userName="Espen,"
        userHref="#tarjei"
      />
    </Row>
    <Row>
      <AllGames heading={'The whole collection'} />
    </Row>
  </Layout>
);

export default IndexPage;

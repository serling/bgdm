// IndexPage
import React from 'react';

import Layout from '../../../components/layout';
import FilteredGamesList from '../../../components/filtered-games-list';

const oldGames = {
  heading: 'new category',
  gridColumns: 4,
  games: [
    {
      title: 'new thing #1'
    },
    {
      title: 'new thing #2'
    },
    {
      title: 'new thing #3',
      isLoading: true
    },
    {
      title: 'new thing #4'
    },
    {
      title: 'new thing #5'
    }
  ]
};

const newGames = {
  heading: 'old category',
  gridColumns: 3,
  games: [
    {
      title: 'old thing #1'
    },
    {
      title: 'old thing #2'
    },
    {
      title: 'old thing #3'
    }
  ]
};

const IndexPage = () => (
  <Layout>
    <FilteredGamesList {...newGames} />
    <FilteredGamesList showControls={true} {...oldGames} />
  </Layout>
);

export default IndexPage;

// IndexPage
import React from 'react';

import Layout from '../../../components/layout';
import Hero from '../../../components/hero';
import AllGames from '../../../components/all-games';

const oldGames = {
  heading: 'new category',
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

const oneGame = {
  heading: 'just the one',
  games: [
    {
      title: 'one thing'
    }
  ]
};

const IndexPage = () => (
  <Layout>
    <Hero main={oneGame} highlights={newGames} />
    <AllGames games={oldGames} />
  </Layout>
);

export default IndexPage;

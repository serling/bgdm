// IndexPage
import React from 'react';

import Layout from '../../../components/layout';
import Hero from '../../../components/hero';
import AllGames from '../../../components/all-games';

const oldGames = {
  heading: 'new category',
  games: [
    {
      title: 'new thing #1',
      href: '#place',
      imgSrc: '#'
    },
    {
      title: 'new thing #2',
      href: '#place',
      imgSrc: '#'
    },
    {
      title: 'new thing #3',
      isLoading: true,
      href: '#place',
      imgSrc: '#'
    },
    {
      title: 'new thing #4',
      href: '#place',
      imgSrc: '#'
    },
    {
      title: 'new thing #5',
      href: '#place',
      imgSrc: '#'
    }
  ]
};

const newGames = {
  heading: 'old category',
  games: [
    {
      title: 'old thing #1',
      href: '#place',
      imgSrc: '#'
    },
    {
      title: 'old thing #2',
      href: '#place',
      imgSrc: '#'
    },
    {
      title: 'old thing #3',
      href: '#place',
      imgSrc: '#'
    }
  ]
};

const oneGame = {
  heading: 'just the one',
  games: [
    {
      title: 'one thing',
      href: '#place',
      imgSrc: '#'
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

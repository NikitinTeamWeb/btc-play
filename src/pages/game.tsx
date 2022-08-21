import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';

import GamePlayer from '../components/GamePlayer/GamePlayer';

const Game: NextPage = () => {
  return (
    <Layout title="home">
      <GamePlayer />
    </Layout>
  );
};

export default Game;

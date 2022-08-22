import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';

import GamePlayer from '../components/GamePlayer/GamePlayer';
import Results from '../components/Results/Results';
import InfoGame from '../components/InfoGame/InfoGame';

const Game: NextPage = () => {
  return (
    <Layout title="home">
      <GamePlayer />
      <Results />
      <InfoGame />
    </Layout>
  );
};

export default Game;

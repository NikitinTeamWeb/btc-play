import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';

import GamePlayer from '../components/GamePlayer/GamePlayer';
import Results from '../components/Results/Results';
import InfoGame from '../components/InfoGame/InfoGame';
import CasinoGames from '../components/CasinoGames/CasinoGames';

import { resultsCategory } from '../components/Results/game';

const Game: NextPage = () => {
  return (
    <Layout title="home">
      <GamePlayer />
      <Results resultsCategory={resultsCategory} />
      <InfoGame />
      <CasinoGames isSwiper isGamePage />
    </Layout>
  );
};

export default Game;

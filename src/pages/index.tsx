import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Banners from '../components/Banners/Banners';
import BannerGames from '../components/BannerGames/BannerGames';
import CasinoGames from '../components/CasinoGames/CasinoGames';
import NoCrypto from '../components/NoCrypto/NoCrypto';
import Winner from '../components/Winner/Winner';
import Results from '../components/Results/Results';
import GameProviders from '../components/GameProviders/GameProviders';

import { resultsCategory } from '../components/Results/main';

import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  console.log(resultsCategory);

  return (
    <Layout title="home">
      <Banners />
      <BannerGames />
      <CasinoGames />
      <NoCrypto />
      <Winner />
      <Results resultsCategory={resultsCategory} />
      <GameProviders />
    </Layout>
  );
};

export default Home;

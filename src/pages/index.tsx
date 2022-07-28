import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Banners from '../components/Banners/Banners';
import CasinoGame from '../components/CasinoGame/CasinoGame';
import Games from '../components/Games/Games';
import GameProviders from '../components/GameProviders/GameProviders';

import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <Banners />
      <CasinoGame />
      <Games />
      <GameProviders />
    </Layout>
  );
};

export default Home;

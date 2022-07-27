import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Banners from '../components/Banners/Banners';
import CasinoGame from '../components/CasinoGame/CasinoGame';

import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <Banners />
      <CasinoGame />
    </Layout>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Banners from '../components/Banners/Banners';

import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <Banners />
    </Layout>
  );
};

export default Home;

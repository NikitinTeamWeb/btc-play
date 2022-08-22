import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';
import Faq from '../components/Faq/Faq';

const Game: NextPage = () => {
  return (
    <Layout title="home">
      <Faq />
    </Layout>
  );
};

export default Game;

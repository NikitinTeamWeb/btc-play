import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';
import Sorting from '../components/Sorting/Sorting';

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <Sorting />
    </Layout>
  );
};

export default Home;

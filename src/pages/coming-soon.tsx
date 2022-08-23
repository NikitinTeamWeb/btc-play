import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import ComingSoon from '../components/ComingSoon/ComingSoon';

const Coming: NextPage = () => {
  return (
    <div className="app">
      <Head>
        <title>Coming Soon</title>
      </Head>
      <ComingSoon />
    </div>
  );
};

export default Coming;

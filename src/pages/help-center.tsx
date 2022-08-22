import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';
import HelpCenter from '../components/HelpCenter/HelpCenter';

const Help: NextPage = () => {
  return (
    <Layout title="Help Center" noFooter>
      <HelpCenter />
    </Layout>
  );
};

export default Help;

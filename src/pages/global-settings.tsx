import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';
import GlobalSettings from '../components/GlobalSettings/GlobalSettings';

const Global: NextPage = () => {
  return (
    <Layout title="Global Setting" noFooter>
      <GlobalSettings />
    </Layout>
  );
};

export default Global;

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';
import Faq from '../components/Faq/Faq';

const FAQ: NextPage = () => {
  return (
    <Layout title="FAQ">
      <Faq />
    </Layout>
  );
};

export default FAQ;

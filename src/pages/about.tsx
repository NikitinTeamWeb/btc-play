import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';
import About from '../components/About/About';

const AboutUs: NextPage = () => {
  return (
    <Layout title="about us">
      <About />
    </Layout>
  );
};

export default AboutUs;

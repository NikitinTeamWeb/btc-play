import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';
import ResponsibleG from '../components/ResponsibleG/ResponsibleG';

const AboutUs: NextPage = () => {
  return (
    <Layout title="Responsible GaminG">
      <ResponsibleG />
    </Layout>
  );
};

export default AboutUs;

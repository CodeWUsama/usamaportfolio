import React from 'react';
import Head from 'next/head';

import LandingPage from '../components/LandingPage';

const Home = () => (
  <>
    <Head>
      <title>Usama Bilal</title>
      <link rel="icon" href="/assets/usamabilal-circular.png" />
      <meta property="og:title" content="Usama Bilal - Software Engineer" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="http://usamabilal.com/" />
      <meta property="og:image" content="https://i.ibb.co/ByGSHLc/usamabilal.png" />
    </Head>
    <LandingPage />;
  </>
);

export default Home;

import React from 'react';
import Head from 'next/head';

import LandingPage from '../components/LandingPage';

const Home = () => (
  <>
    <Head>
      <title>Usama Bilal</title>
      <link rel="icon" href="/assets/usamabilal-circular.png" />
      <meta
        name="description"
        content="Usama Bilal - software engineer having expertise in web development particularly as Frontend Developer. Usama Bilal is open to work as a React developer, Frontend developer or Fullstack developer"
      />
      <meta
        name="keywords"
        content="Usama, Bilal, Usama Bilal, React Developer, Frontend Developer, Frontend Engineer, Fullstack Developer"
      />
      <meta name="author" content="Usama Bilal" />
      <meta property="og:title" content="Usama Bilal - Software Engineer" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="http://usamabilal.com/" />
      <meta property="og:image" content={process.env.NEXT_PUBLIC_OG_IMAGE} />
      <meta
        property="og:description"
        content="A passionate software engineer, specialized in web development using React & Node JS. I create amazing web applications to make the internet a better place."
      />
    </Head>
    <LandingPage />
  </>
);

export default Home;

import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { AboutController } from '@/src/about/controller/AboutController';
import AboutView from '@/src/about/View/AboutView';

const AboutPage: NextPage = (props) => (
  <div>
    <AboutController {...props}>
      <Head>
        <link rel="icon" href="/books.svg" type="image/svg" sizes="70x70" />
        <title>About Us - BookStorm | 2024</title>
        <meta name="description" content="Welcome to our online bookstore where you can find a wide selection of eBooks for all genres. Browse, download, and enjoy reading anytime, anywhere." />

        <meta name="keywords" content="online bookstore, eBooks, buy books online, download books, digital books, reading, literature, fiction, non-fiction" />

        <meta name="author" content="https://bookstorm.vercel.app/" />
        <meta property="og:title" content="Online Bookstore - BookStorm | 2024" />
        <meta property="og:description" content="Welcome to our online bookstore where you can find a wide selection of eBooks for all genres. Browse, download, and enjoy reading anytime, anywhere." />
        <meta property="og:image" content="/og/bookstore.svg" />
        <meta property="og:url" content="https://bookstorm.vercel.app/" />

        <meta name="twitter:card" content="/og/bookstore.svg" />
        <meta name="twitter:title" content="Online Bookstore - BookStorm | 2024" />
        <meta name="twitter:description" content="Welcome to our online bookstore where you can find a wide selection of eBooks for all genres. Browse, download, and enjoy reading anytime, anywhere." />
        <meta name="twitter:image" content="/og/twitter-og.png" />
      </Head>

      <AboutView />
    </AboutController>
  </div>
);

export default AboutPage;
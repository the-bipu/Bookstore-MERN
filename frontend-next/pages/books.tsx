import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { BooksController } from '@/src/books/controller/BooksController';
import BooksView from '@/src/books/View/BooksView';

const BooksPage: NextPage = (props) => (
  <div>
    <BooksController {...props}>
      <Head>
        <link rel="icon" href="/books-main.png" type="image/png" sizes="70x70" />
        <title></title>
        <meta name="description" content="" />

        <meta name="keywords" content="" />

        <meta name="author" content="Internpluss.com" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/og/books-og.png" />
        <meta property="og:url" content="" />

        <meta name="twitter:card" content="/og/twitter-og.png" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="/og/twitter-og.png" />
      </Head>

      <BooksView />
    </BooksController>
  </div>
);

export default BooksPage;
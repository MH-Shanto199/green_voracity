import Head from 'next/head';
import React from 'react';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header';

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          {props.title ? props.title + ' - GreenVoracity' : 'GreenVoracity'}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="container m-auto mt-4 px-4">{props.children}</main>
        <Footer />
      </div>
    </>
  );
}

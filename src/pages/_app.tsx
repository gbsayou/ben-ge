import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Open_Sans} from 'next/font/google';
import Head from 'next/head';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={openSans.className}>
      <Head>
        <title>Ben Ge</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

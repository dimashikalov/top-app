import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <div>
       <Head>
        <title>MyTop - наш лучший топ</title>
      <link key={1} rel="icon" href="/favicon.ico" />
      <link href='<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">'/>
        </Head>
       <Component {...pageProps} />  
  </div>;
}

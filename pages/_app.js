import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '300'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

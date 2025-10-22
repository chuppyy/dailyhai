import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
         <script defer src="https://videoadstech.org/ads/daily_livextop_com.3dd74abb-c76d-4936-8245-274ca14396be.video.js"></script>
      <script async src="https://server.adhub.media/ads/daily_livextop_com.f2c61baf-ac9a-418a-8159-d87098abab6c.display.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};

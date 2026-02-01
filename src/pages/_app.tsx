import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
         <script defer src="https://videoadstech.org/ads/dailynewsus_daily24_blog.f5bf71ae-78ec-4909-934a-23ab3391027b.video.js"></script>
<script async src="https://server.adhub.media/ads/dailynewsus_daily24_blog.770b683b-4e0e-46b9-8914-f43db02ba074.display.js"></script>
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

import GlobalFont from "components/Font/GlobalFont";
import Layout from "components/Layout/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <GoogleAnalytics trackPageViews />
      <GlobalFont />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Layout>
  );
}

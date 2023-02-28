import React, { Fragment, ReactNode } from "react";
import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Filter from "components/Filter/Filter";
import { usePathname } from "next/navigation";
// import { ThemeProvider } from 'next-themes';
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const pathname = usePathname() as string;
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <meta name="author" content="@sss" />
        <meta property="og:site_name" content="good game" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content={`https://njan.win${pathname}`} />
      </Head>
      <Filter />
      <Header />
      {/* <Menu /> */}
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;

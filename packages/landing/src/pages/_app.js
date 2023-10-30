import { NextUIProvider } from '@nextui-org/react'
import 'common/assets/css/flaticon.css';
import '../containers/CryptoModern/CountDown/timer.css';
import 'common/assets/css/icon-example-page.css';
// swiper bundle styles
import 'swiper/css/bundle';
import 'common/assets/css/react-slick.css';
import 'common/assets/css/rc-collapse.css';
import 'rc-collapse/assets/index.css';
import 'common/assets/css/rc-drawer.css';


import ResetCSS from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/saasAppDark';
import Footer from 'containers/SaasAppDark/Footer';
import Navbar from 'containers/SaasAppDark/Navbar';
import { ContentWrapper, GlobalStyle } from 'containers/SaasAppDark/saasAppDark.style';
import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

export default function CustomApp({ Component, pageProps }) {
  return (
      <NextUIProvider>
      <ThemeProvider theme={theme}>

      <Fragment>
        <Head>
          <title>Coora | Unleash your creativity using Artificial Intelligence</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=DM+Sans:wght@400&family=Inter:wght@400;500;600&family=Manrope:wght@700&family=Noto+Serif+KR:wght@700;900&display=swap"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
        <Component {...pageProps} />
        <Footer />
        </ContentWrapper>
      </Fragment>
      </ThemeProvider>
      </NextUIProvider>
  );
}

import ResetCSS from 'common/assets/css/style';
import AIPhotos from 'common/components/AiPhotos';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/saasAppDark';
import ProductSlide from 'containers/AppModern/ProductSlide';
import Banner from 'containers/SaasAppDark/Banner';
import Footer from 'containers/SaasAppDark/Footer';
import Navbar from 'containers/SaasAppDark/Navbar';
import { ContentWrapper, GlobalStyle } from 'containers/SaasAppDark/saasAppDark.style';
import Services from 'containers/SaasAppDark/Services';
import StatsCounter from 'containers/SaasAppDark/StatsCounter';
import Testimonials from 'containers/SaasAppDark/Testimonials';
import TextToImage from 'containers/SaasAppDark/TextToImage';
import UpdateScreen from 'containers/SaasModern/UpdateScreen';
import CallToAction from 'containers/WebAppMinimal/CallToAction';
import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}


const SaasAppDark = () => {
  const size = typeof window !== 'undefined' && useWindowSize();

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Coora | Unleash your creativity using Artificial Intelligence</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
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
          <Banner />
          <Services />
          <UpdateScreen />

          <AIPhotos />
          <TextToImage />

          <StatsCounter />
          <Testimonials />
          <ProductSlide />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasAppDark;

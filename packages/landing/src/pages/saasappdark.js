import AIPhotos from 'common/components/AiPhotos';
import ProductSlide from 'containers/AppModern/ProductSlide';
import Banner from 'containers/SaasAppDark/Banner';
import Services from 'containers/SaasAppDark/Services';
import StatsCounter from 'containers/SaasAppDark/StatsCounter';
import Testimonials from 'containers/SaasAppDark/Testimonials';
import TextToImage from 'containers/SaasAppDark/TextToImage';
import UpdateScreen from 'containers/SaasModern/UpdateScreen';
import CallToAction from 'containers/WebAppMinimal/CallToAction';
import React, { Fragment, useEffect, useState } from 'react';

const SaasAppDark = () => {
  return (
      <>
          <Banner />
          <Services />
          <UpdateScreen />

          <AIPhotos />
          <TextToImage />

          <StatsCounter />
          <Testimonials />
          <ProductSlide />
          <CallToAction />
       </>

  );
};
export default SaasAppDark;

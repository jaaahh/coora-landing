import React from 'react';
import Container from 'common/components/UI/Container';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, {
  Pattern,
  Content,
} from './cta.style';
import Box from 'common/components/Box';
import bannerBtn1 from 'common/assets/image/foodDelivery/banner-apple.svg';
import bannerBtn2 from 'common/assets/image/foodDelivery/banner-google-play.svg';

const CallToAction = () => {
  return (
    <Section>
      <Pattern />
      <Container width="1400px">
        <Content>
          <Heading content="Your Visual Journey Starts Here"/>
          <Text content="Are you ready to redefine your visual journey? Join us today, and together, let's transform the way we capture and share our world. Download now and be a part of the future!" />
            <Box className="buttonWrap">
              <Link href={""} key={`banner-button`}>
                <a className="bannerAppBtn">
                  <img src={bannerBtn1?.src} width="30" height="30" alt={""} />
                  <Box className="btnContent">
                    <Text as="span" content={"Download on the"} />
                    <Text as="p" content={"AppStore"} />
                  </Box>
                </a>
              </Link>
              <Link href={""} key={`banner-button`}>
                <a className="bannerAppBtn">
                  <img src={bannerBtn2?.src} width="30" height="30" alt={""} />
                  <Box className="btnContent">
                    <Text as="span" content={"Download on the"} />
                    <Text as="p" content={"Playstore"} />
                  </Box>
                </a>
              </Link>
            </Box>
          <span>
            <Link href="#">2,500+ Upvote on ProductHunt</Link>
          </span>
        </Content>
      </Container>
    </Section>
  );
};

export default CallToAction;

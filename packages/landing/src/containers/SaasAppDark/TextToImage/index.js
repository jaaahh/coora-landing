import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import {textToImageFeatures } from 'common/data/SaasAppDark';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Section, {
  Content,
  FeatureList, FigureGroup, Grid
} from './monitoring.style';

import texttoimage from '../../../common/assets/image/text_to_image.png';



const TextToImage = () => {
  return (
    <Section>
      <Container width="1300px">
        <Grid>
        <Content>
            <Text className="subtitle" content="Text to Image" />
            <Heading content="Generate photos with Text" />
            <Text
              className="description"
              content='Unlock the power of words and imagination with our Text to Image feature. This groundbreaking tool takes your thoughts, stories, and ideas and transforms them into stunning visuals.'
            />
            <FeatureList>
              {textToImageFeatures?.map((feature) => (
                <div className="feature" key={feature.id}>
                  <figure className="icon">
                    <img src={feature?.icon?.src} alt="feature icon" />
                  </figure>
                  <div className="feature-content">
                    <Heading as="h4" content={feature.title} />
                    <Text content={feature.desc} />
                  </div>
                </div>
              ))}
            </FeatureList>
          </Content>
          <FigureGroup>
            <Fade up>
              <img src={texttoimage.src} alt="report1" />
            </Fade>
   
          </FigureGroup>

        </Grid>
      </Container>
    </Section>
  );
};

export default TextToImage;

import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { monitoringFeatures } from 'common/data/SaasAppDark';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Section, {
  Content,
  FeatureList, FigureGroup, Grid
} from './monitoring.style';

const AIPhotos = () => {
  return (
    <Section>
      <Container width="1300px">
        <Grid>
          <FigureGroup>
            <Fade up>
              <img src={"https://images.prismic.io/remini-marketing-website/d4e548d5-6064-4e07-a982-ea39937a4c2f_ai-photos-home.webp?auto=compress%2Cformat&fit=max&w=1440"} alt="report1" />
            </Fade>
            <div className="graph-2">
              <Fade up delay={200}>
                <img src={"https://images.prismic.io/remini-marketing-website/d4e548d5-6064-4e07-a982-ea39937a4c2f_ai-photos-home.webp?auto=compress%2Cformat&fit=max&w=1440"} alt="report2" />
              </Fade>
            </div>
          </FigureGroup>
          <Content>
            <Text className="subtitle" content="AI Photos" />
            <Heading content="Generate photos of yourself, with AI" />
            <Text
              className="description"
              content='With our AI-powered tool, you can now create stunning, unique images of yourself in a way that was once unimaginable'
            />
            <FeatureList>
              {monitoringFeatures?.map((feature) => (
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
        </Grid>
      </Container>
    </Section>
  );
};

export default AIPhotos;

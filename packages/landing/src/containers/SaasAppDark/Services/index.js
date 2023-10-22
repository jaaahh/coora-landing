import { default as Heading, default as Text } from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { services } from 'common/data/SaasAppDark';
import Section, { Grid, Item, SectionHeading } from './services.style';

const Services = () => {
  return (
    <Section id="how-to">
      <Container width="1400px">
        <SectionHeading>
          <Heading
            as="h2"
            content="Why another social media? "
          />
          <Text content="While other social media apps may excel at connecting people, we specialize in transforming your visual journey. With us, your images are more than just posts; they're narratives, they're art, and they're an integral part of your life." />
        </SectionHeading>
        <Grid>
          {services.map((service) => (
            <Item key={service.id}>
              <span className="icon">
                <i />
              </span>
              <Heading as="h4" content={service.title} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;

import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { footer } from 'common/data/SaasAppDark';
import { Icon } from 'react-icons-kit';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { ic_place } from 'react-icons-kit/md/ic_place';
import {
  AboutUs, ContactInfo, FooterWidget, Grid, InfoItem, Section
} from './footer.style';

const Footer = () => {
  return (
    <Section>
      <Container width="1300px">
        <Grid>
          <AboutUs>
            <Image src={footer.about.logo?.src} alt="Web App Creative" />
            <Text content={footer.about.text} />
            <InfoItem>
              <Icon icon={paperPlane} size={22} />
              <Text content={footer.contactInfo.email} />
            </InfoItem>
          </AboutUs>
          {footer.widgets.map((item) => (
            <FooterWidget key={item.id}>
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((item) => (
                  <li className="widgetListItem" key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
   
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;

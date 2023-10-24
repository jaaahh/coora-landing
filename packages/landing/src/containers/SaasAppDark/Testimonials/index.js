import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import Text from 'common/components/Text'
import Container from 'common/components/UI/Container'
import { testimonials } from 'common/data/SaasAppDark'
import Section, {
  AuthorInfo,
  Item,
  ReactSlick,
  SectionHeading,
} from './testimonials.style'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Testimonials = () => {
  return (
    <Section id='testimonials'>
      <Container width='1300px'>
        <SectionHeading>
          <Text as='span' content='Compliments' />
          <Heading content='What our users like about it' />
        </SectionHeading>
        <ReactSlick {...settings}>
          {testimonials.map((testimonial) => (
            <Item key={testimonial.id}>
              <div>
                <Text as='blockquote' content={testimonial.quote} />
              </div>
              <AuthorInfo>
              <figure>
                <Image src={testimonial.logo?.src} alt='logo' className="avatar"/>
                <div className='detail-container'>
                <Heading as='h4' content={testimonial.author} />
                <Text content={testimonial.designation} />
                </div>
                </figure>

              </AuthorInfo>
            </Item>
          ))}
        </ReactSlick>
      </Container>
    </Section>
  )
}

export default Testimonials

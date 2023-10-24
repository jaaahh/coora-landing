// menu items
export const menu_items = [
  {
    label: 'Home',
    path: '#home',
    offset: '70',
  },
  {
    label: 'How to',
    path: '#how-to',
    offset: '70',
  },
  {
    label: 'Testimonials',
    path: '#testimonials',
    offset: '70',
  },

];

// service section
import envato from 'common/assets/image/saasAppDark/clients/envato.png';
import evernote from 'common/assets/image/saasAppDark/clients/evernote.png';
import forbes from 'common/assets/image/saasAppDark/clients/forbes.png';
import geekwire from 'common/assets/image/saasAppDark/clients/geekwire.png';
import slack from 'common/assets/image/saasAppDark/clients/slack.png';
import usaToday from 'common/assets/image/saasAppDark/clients/usa-today.png';
import headphone from 'common/assets/image/saasAppDark/icons/headphone.svg';
// monitoring section
import rocket from 'common/assets/image/saasAppDark/icons/rocket.svg';
// service section
import service1 from 'common/assets/image/saasAppDark/icons/service1.svg';
import service2 from 'common/assets/image/saasAppDark/icons/service2.svg';
import service3 from 'common/assets/image/saasAppDark/icons/service3.svg';
import service4 from 'common/assets/image/saasAppDark/icons/service4.svg';
import service5 from 'common/assets/image/saasAppDark/icons/service5.svg';
// footer section
import siteLogo from 'common/assets/image/saasAppDark/logo.svg';
// news feed section
import post1 from 'common/assets/image/saasAppDark/post1.png';
import post2 from 'common/assets/image/saasAppDark/post2.png';
import post3 from 'common/assets/image/saasAppDark/post3.png';
// testimonials section
import avatar1 from 'common/assets/image/saasAppDark/avatar-1.jpeg';
import avatar2 from 'common/assets/image/saasAppDark/avatar-2.jpg';
import avatar3 from 'common/assets/image/saasAppDark/avatar-2.jpg';
import avatar4 from 'common/assets/image/saasAppDark/avatar-2.jpg';

export const clients = [envato, evernote, forbes, geekwire, slack, usaToday];


export const services = [
  {
    id: 1,
    title: 'AI Magic',
    icon: service1,
  },
  {
    id: 2,
    title: 'Creative Playground',
    icon: service2,
  },
  {
    id: 3,
    title: 'Smart Auto-Editing',
    icon: service3,
  },
  {
    id: 4,
    title: 'Diverse Community',
    icon: service5,
  },
  {
    id: 4,
    title: 'Future of Visuals',
    icon: service5,
  },
];


export const monitoringFeatures = [
  {
    id: 1,
    icon: rocket,
    title: 'Personalized Artistry',
    desc: `Our AI understands your individual style and preferences. It uses this information to craft images of you that reflect your personality.`,
  },
  {
    id: 2,
    icon: headphone,
    title: 'Endless Possibilities',
    desc: `No need for a professional photoshoot. You can generate an array of images for any occasion, from casual selfies to formal portraits, and everything in between.`,
  },
];

export const textToImageFeatures = [
  {
    id: 1,
    icon: rocket,
    title: 'Creative Expression',
    desc: `Say goodbye to the limitations of text. With our Text to Image feature, you can bring your words to life, making your stories and ideas more captivating than ever before.`,
  },
  {
    id: 2,
    icon: headphone,
    title: 'Unleash Your Creativity',
    desc: `Whether you're a professional writer or someone who loves to jot down thoughts, our Text to Image feature unleashes your creative potential in ways you've never imagined.`,
  },
];

// stats counter section
export const statsCounter = {
  blockTitle: {
    subtitle: 'Statistics',
    title: `Ultimate AI Generation tool for your photos`,
    text: "Your privacy is our priority. Our app is designed to ensure the safety and security of your photos. You're in control of who sees your moments.",
    button: {
      link: '#',
      label: 'Discover more',
    },
  },
  posts: [
    {
      count: '100',
      title: 'More than',
      text: 'Models',
      symbol: '+',
    },
    {
      count: '10',
      title: 'Community with',
      text: 'Creators',
      symbol: 'K+',
    },
    {
      count: '100',
      title: 'Up to',
      text: 'Availablity',
      symbol: '%',
    },
    {
      count: '5x',
      title: 'Up to',
      text: 'Faster then others',
      symbol: '',
    },
  ],
};

// video intro section
export const videoIntro = {
  features: [
    {
      id: 1,
      title: '1-month Free Trial',
      desc: 'We are open for trial sessions',
    },
    {
      id: 2,
      title: 'Sales Widgets',
      desc: 'Stay on top of your task lists',
    },
    {
      id: 3,
      title: 'Free security update',
      desc: 'Every month we provide updates',
    },
  ],
};

export const posts = [
  {
    id: 1,
    date: 'June 3, 2020',
    image: post1,
    title: 'The three Fundamental Rules to Keep Your Website Goal Orientated',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 2,
    date: 'Dec 8, 2020',
    image: post2,
    title: 'Five Common Mistakes Teams Make When Tracking Performance',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 3,
    date: 'Dec 8, 2020',
    image: post3,
    title: `Why You Might Want to Reconsider with Tracking First Meaningful Paint`,
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
];

export const testimonials = [
  {
    id: 1,
    logo: avatar1,
    author: 'Sarah',
    designation: 'Professional Photographer',
    quote: `This app has truly exceeded my expectations. The AI-enhanced images are mind-blowing, and the creative possibilities are endless. It's now an integral part of my toolkit.`,
  },
  {
    id: 2,
    logo: avatar2,
    author: 'Mark',
    designation: 'Casual Snapper',
    quote: `My everyday snapshots now look like professional photos, and the auto-editing feature is a real time-saver. I can't imagine posting pictures without it.`,
  },
  {
    id: 3,
    logo: avatar3,
    author: 'Emily',
    designation: 'Art Enthusiast',
    quote: `The filters and effects are incredibly versatile, allowing me to create visually stunning images that tell a story. It's like having a virtual art studio right in my pocket.`,
  },
  {
    id: 4,
    logo: avatar4,
    author: 'Gracelyn Mason',
    designation: 'Social Media Influencer',
    quote: `This app has given me a unique edge. My followers love the vibrancy and creativity in my posts, thanks to the AI enhancements and filters.`,
  },
];

export const footer = {
  about: {
    logo: siteLogo,
    text: `Unlock the limitless potential of your images with our cutting-edge AI Image Social Media App!.`,
  },
  widgets: [
    {
      id: 2,
      title: 'About Us',
      list: [
        {
          id: 1,
          title: 'Support Center',
          link: 'https://help.coora.ai',
        },

        {
          id: 3,
          title: 'About Us',
          link: './about-us',
        },

      ],
    },
    {
      id: 3,
      title: 'Our Information',
      list: [

        {
          id: 2,
          title: 'Privacy Policy',
          link: './privacy-policy',
        },
        {
          id: 3,
          title: 'Terms & Conditions',
          link: './terms-conditions',
        },

      ],
    },
    {
      id: 4,
      title: '',
      list: [

      ],
    },
  ],
  contactInfo: {
    title: 'Contact info',
    email: `hello@coora.co`,
  },
};

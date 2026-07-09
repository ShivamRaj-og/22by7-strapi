import type { Attribute, Schema } from '@strapi/strapi';

export interface CommonFooter extends Schema.Component {
  collectionName: 'components_common_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
  };
}

export interface CommonHeader extends Schema.Component {
  collectionName: 'components_common_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
  };
}

export interface CommonTestCard extends Schema.Component {
  collectionName: 'components_common_test_cards';
  info: {
    displayName: 'test.card';
  };
  attributes: {
    bgColor: Attribute.String;
    brand: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
    personImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    role: Attribute.String;
    text: Attribute.Text;
  };
}

export interface CommonTestimonialSection extends Schema.Component {
  collectionName: 'components_common_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    cards: Attribute.Component<'common.test-card', true>;
    description: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface HomeAuraSection extends Schema.Component {
  collectionName: 'components_home_aura_sections';
  info: {
    displayName: 'Aura Section';
  };
  attributes: {
    cta: Attribute.Component<'partials.cta'>;
    status: Attribute.Component<'partials.status'>;
    subHeading: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface HomeAwardsSection extends Schema.Component {
  collectionName: 'components_home_awards_sections';
  info: {
    displayName: 'Awards Section';
  };
  attributes: {
    awards: Attribute.Component<'partials.img-text', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface HomeBanner extends Schema.Component {
  collectionName: 'components_home_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    description: Attribute.Text;
    servicesLeft: Attribute.Component<'partials.card-home-hero', true>;
    servicesRight: Attribute.Component<'partials.card-home-hero', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface HomeBrandMarque extends Schema.Component {
  collectionName: 'components_home_brand_marques';
  info: {
    displayName: 'Brand Marque';
  };
  attributes: {
    logos: Attribute.Component<'partials.img-text', true>;
    marqueeData: Attribute.Component<'partials.text', true>;
    status: Attribute.Component<'partials.status'>;
  };
}

export interface HomeIndustriesSection extends Schema.Component {
  collectionName: 'components_home_industries_sections';
  info: {
    description: '';
    displayName: 'Industries Section';
  };
  attributes: {
    description: Attribute.Text;
    industries: Attribute.Component<'partials.img-text', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface HomeIntroSection extends Schema.Component {
  collectionName: 'components_home_intro_sections';
  info: {
    description: '';
    displayName: 'Intro Section';
  };
  attributes: {
    cards: Attribute.Component<'partials.text-text-img', true>;
    description: Attribute.Text;
    image1: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    statsData: Attribute.Component<'partials.num-text', true>;
    status: Attribute.Component<'partials.status'>;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface HomeOurPortfolio extends Schema.Component {
  collectionName: 'components_home_our_portfolios';
  info: {
    displayName: 'Our Portfolio';
  };
  attributes: {
    cards: Attribute.Component<'partials.card-port', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface PartialsCardHomeHero extends Schema.Component {
  collectionName: 'components_partials_card_home_heroes';
  info: {
    displayName: 'card.home.hero';
  };
  attributes: {
    bgColor: Attribute.String;
    desc: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Text;
    subtitle: Attribute.String;
    textColor: Attribute.String;
    title: Attribute.String;
  };
}

export interface PartialsCardPort extends Schema.Component {
  collectionName: 'components_partials_card_ports';
  info: {
    displayName: 'card.port';
  };
  attributes: {
    cta: Attribute.Component<'partials.cta', true>;
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface PartialsCta extends Schema.Component {
  collectionName: 'components_partials_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.Text;
  };
}

export interface PartialsImgText extends Schema.Component {
  collectionName: 'components_partials_img_texts';
  info: {
    displayName: 'img.text';
  };
  attributes: {
    alt: Attribute.String;
    src: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PartialsNumText extends Schema.Component {
  collectionName: 'components_partials_num_texts';
  info: {
    description: '';
    displayName: 'num.text';
  };
  attributes: {
    label: Attribute.Text;
    number: Attribute.String;
    suffix: Attribute.String;
  };
}

export interface PartialsStatus extends Schema.Component {
  collectionName: 'components_partials_statuses';
  info: {
    displayName: 'Status';
  };
  attributes: {
    visible: Attribute.Boolean;
  };
}

export interface PartialsText extends Schema.Component {
  collectionName: 'components_partials_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface PartialsTextTextImg extends Schema.Component {
  collectionName: 'components_partials_text_text_imgs';
  info: {
    displayName: 'text.text.img';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Attribute.Text;
    title: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.footer': CommonFooter;
      'common.header': CommonHeader;
      'common.test-card': CommonTestCard;
      'common.testimonial-section': CommonTestimonialSection;
      'home.aura-section': HomeAuraSection;
      'home.awards-section': HomeAwardsSection;
      'home.banner': HomeBanner;
      'home.brand-marque': HomeBrandMarque;
      'home.industries-section': HomeIndustriesSection;
      'home.intro-section': HomeIntroSection;
      'home.our-portfolio': HomeOurPortfolio;
      'partials.card-home-hero': PartialsCardHomeHero;
      'partials.card-port': PartialsCardPort;
      'partials.cta': PartialsCta;
      'partials.img-text': PartialsImgText;
      'partials.num-text': PartialsNumText;
      'partials.status': PartialsStatus;
      'partials.text': PartialsText;
      'partials.text-text-img': PartialsTextTextImg;
    }
  }
}

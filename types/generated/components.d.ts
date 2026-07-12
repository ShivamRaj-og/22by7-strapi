import type { Attribute, Schema } from '@strapi/strapi';

export interface AboutAboutNote extends Schema.Component {
  collectionName: 'components_about_about_notes';
  info: {
    displayName: 'About Note';
  };
  attributes: {
    note: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
  };
}

export interface AboutBannerSection extends Schema.Component {
  collectionName: 'components_about_banner_sections';
  info: {
    displayName: 'Banner Section';
  };
  attributes: {
    description: Attribute.Text;
    image1: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface AboutIntroSection extends Schema.Component {
  collectionName: 'components_about_intro_sections';
  info: {
    displayName: 'Intro Section';
  };
  attributes: {
    description1: Attribute.RichText;
    description2: Attribute.RichText;
    status: Attribute.Component<'partials.status'>;
  };
}

export interface AboutLeaderSection extends Schema.Component {
  collectionName: 'components_about_leader_sections';
  info: {
    description: '';
    displayName: 'Leader Section';
  };
  attributes: {
    leaders: Attribute.Component<'partials.text-text-img', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface AboutOurTeam extends Schema.Component {
  collectionName: 'components_about_our_teams';
  info: {
    description: '';
    displayName: 'Our Team';
  };
  attributes: {
    description: Attribute.Text;
    reachData: Attribute.Component<'partials.card-ab-reac', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface AboutTeamMember extends Schema.Component {
  collectionName: 'components_about_team_members';
  info: {
    description: '';
    displayName: 'Team Member';
  };
  attributes: {
    founders: Attribute.Component<'partials.card-mem', true>;
    founderTitle: Attribute.String;
    mainTitle: Attribute.String;
    managementTeam: Attribute.Component<'partials.card-mem', true>;
    managementTitle: Attribute.String;
    status: Attribute.Component<'partials.status'>;
  };
}

export interface AboutVisionSection extends Schema.Component {
  collectionName: 'components_about_vision_sections';
  info: {
    displayName: 'Vision Section';
  };
  attributes: {
    cards: Attribute.Component<'partials.card-vis', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface AcademyBannerSection extends Schema.Component {
  collectionName: 'components_academy_banner_sections';
  info: {
    displayName: 'Banner Section';
  };
  attributes: {
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface AcademyConstantSection extends Schema.Component {
  collectionName: 'components_academy_constant_sections';
  info: {
    displayName: 'Constant Section';
  };
  attributes: {
    description: Attribute.Text;
    description1: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface AcademyGurukul extends Schema.Component {
  collectionName: 'components_academy_gurukuls';
  info: {
    description: '';
    displayName: 'Gurukul';
  };
  attributes: {
    description: Attribute.Text;
    offerings: Attribute.Component<'partials.guru-card', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface AcademyJourneySection extends Schema.Component {
  collectionName: 'components_academy_journey_sections';
  info: {
    description: '';
    displayName: 'Journey Section';
  };
  attributes: {
    cta: Attribute.Component<'partials.cta'>;
    description: Attribute.RichText;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface AcademyPillar extends Schema.Component {
  collectionName: 'components_academy_pillars';
  info: {
    displayName: 'Pillar';
  };
  attributes: {
    pillars: Attribute.Component<'partials.text-text-img', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface AcademyValueSection extends Schema.Component {
  collectionName: 'components_academy_value_sections';
  info: {
    description: '';
    displayName: 'Value Section';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface AuraAgentic extends Schema.Component {
  collectionName: 'components_aura_agentics';
  info: {
    displayName: 'Agentic';
  };
  attributes: {
    description: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface AuraAuraExperience extends Schema.Component {
  collectionName: 'components_aura_aura_experiences';
  info: {
    displayName: 'Aura Experience';
  };
  attributes: {
    leaders: Attribute.Component<'partials.text-text-img', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface AuraBannerSection extends Schema.Component {
  collectionName: 'components_aura_banner_sections';
  info: {
    description: '';
    displayName: 'Banner Section';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface AuraComplexity extends Schema.Component {
  collectionName: 'components_aura_complexities';
  info: {
    description: '';
    displayName: 'Complexity';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface AuraExperienceSection extends Schema.Component {
  collectionName: 'components_aura_experience_sections';
  info: {
    description: '';
    displayName: 'Experience Section';
  };
  attributes: {
    cta: Attribute.Component<'partials.cta'>;
    description: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface AuraFeatureSection extends Schema.Component {
  collectionName: 'components_aura_feature_sections';
  info: {
    displayName: 'Feature Section';
  };
  attributes: {
    features: Attribute.Component<'partials.img-text', true>;
    focusAreas: Attribute.Component<'partials.img-text', true>;
    status: Attribute.Component<'partials.status'>;
    titleFeature: Attribute.String;
    titleFocus: Attribute.String;
  };
}

export interface AuraFutureBuilding extends Schema.Component {
  collectionName: 'components_aura_future_buildings';
  info: {
    description: '';
    displayName: 'Future Building';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    subHeading: Attribute.String;
    subtitle: Attribute.String;
    subtitle1: Attribute.String;
    subtitle3: Attribute.String;
    title: Attribute.String;
  };
}

export interface AuraOverview extends Schema.Component {
  collectionName: 'components_aura_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
  };
}

export interface BlogBlogContent extends Schema.Component {
  collectionName: 'components_blog_blog_contents';
  info: {
    description: '';
    displayName: 'Blog Content';
  };
  attributes: {
    content: Attribute.RichText;
    date: Attribute.Date;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    readTime: Attribute.Integer;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface BlogBlogListing extends Schema.Component {
  collectionName: 'components_blog_blog_listings';
  info: {
    displayName: 'Blog Listing';
  };
  attributes: {
    filter: Attribute.Component<'partials.text', true>;
    popularBlogs: Attribute.Relation<
      'blog.blog-listing',
      'oneToMany',
      'api::blog.blog'
    >;
    popularBlogTitle: Attribute.String;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface BlogPluseListing extends Schema.Component {
  collectionName: 'components_blog_pluse_listings';
  info: {
    description: '';
    displayName: 'Pluse Listing';
  };
  attributes: {
    about: Attribute.Component<'partials.text-desc'>;
    newsletter: Attribute.Component<'partials.text-desc'>;
    postTitle: Attribute.String;
    status: Attribute.Component<'partials.status'>;
    tags: Attribute.Component<'partials.text', true>;
  };
}

export interface CareerCareerInfo extends Schema.Component {
  collectionName: 'components_career_career_infos';
  info: {
    displayName: 'Career Info';
  };
  attributes: {
    email: Attribute.String;
    mainTitle: Attribute.String;
    phone: Attribute.String;
    status: Attribute.Component<'partials.status'>;
    zohoLink: Attribute.Text;
  };
}

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

export interface ContactBannerForm extends Schema.Component {
  collectionName: 'components_contact_banner_forms';
  info: {
    displayName: 'Banner Form';
  };
  attributes: {
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.String;
    formHeading: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface ContactFindUs extends Schema.Component {
  collectionName: 'components_contact_find_uses';
  info: {
    displayName: 'Find Us';
  };
  attributes: {
    mapLink: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface ContactHeadquarters extends Schema.Component {
  collectionName: 'components_contact_headquarters';
  info: {
    description: '';
    displayName: 'Headquarters';
  };
  attributes: {
    cards: Attribute.Component<'partials.card-cnt-hq', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColour: Attribute.String;
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

export interface IndustryBannerSection extends Schema.Component {
  collectionName: 'components_industry_banner_sections';
  info: {
    description: '';
    displayName: 'Banner Section';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface IndustryChallenges extends Schema.Component {
  collectionName: 'components_industry_challenges';
  info: {
    description: '';
    displayName: 'Challenges';
  };
  attributes: {
    cards: Attribute.Component<'partials.text-desc', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface IndustryIndustrySolutions extends Schema.Component {
  collectionName: 'components_industry_industry_solutions';
  info: {
    description: '';
    displayName: 'Industry Solutions';
  };
  attributes: {
    description: Attribute.Text;
    industrySolutions: Attribute.Component<'partials.card-indus', true>;
    status: Attribute.Component<'partials.status'>;
    subtitle: Attribute.String;
    subtitleColor: Attribute.String;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface IndustryMainBanner extends Schema.Component {
  collectionName: 'components_industry_main_banners';
  info: {
    description: '';
    displayName: 'Main Banner';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface IndustryManufacture extends Schema.Component {
  collectionName: 'components_industry_manufactures';
  info: {
    description: '';
    displayName: 'Manufacture';
  };
  attributes: {
    ManufactureData: Attribute.Component<'partials.card-service', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface IndustryWhyChooseUs extends Schema.Component {
  collectionName: 'components_industry_why_choose_uses';
  info: {
    description: '';
    displayName: 'Why Choose Us';
  };
  attributes: {
    features: Attribute.Component<'partials.text-text-img', true>;
    status: Attribute.Component<'partials.status'>;
    subtitle: Attribute.String;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface LifeatBannerSection extends Schema.Component {
  collectionName: 'components_lifeat_banner_sections';
  info: {
    description: '';
    displayName: 'Banner Section';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title1: Attribute.String;
    title2: Attribute.String;
    title3: Attribute.String;
    titleColor1: Attribute.String;
    titleColor2: Attribute.String;
    titleColor3: Attribute.String;
  };
}

export interface LifeatConstantSection extends Schema.Component {
  collectionName: 'components_lifeat_constant_sections';
  info: {
    description: '';
    displayName: 'Constant Section';
  };
  attributes: {
    description: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface LifeatCultureSection extends Schema.Component {
  collectionName: 'components_lifeat_culture_sections';
  info: {
    description: '';
    displayName: 'Culture Section';
  };
  attributes: {
    cards: Attribute.Component<'partials.text-desc', true>;
    description: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface LifeatEmployeeSection extends Schema.Component {
  collectionName: 'components_lifeat_employee_sections';
  info: {
    description: '';
    displayName: 'Employee Section';
  };
  attributes: {
    offerings: Attribute.Component<'partials.guru-card', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface LifeatFindingSection extends Schema.Component {
  collectionName: 'components_lifeat_finding_sections';
  info: {
    description: '';
    displayName: 'Finding Section';
  };
  attributes: {
    description: Attribute.Text;
    description1: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface LifeatJoinSection extends Schema.Component {
  collectionName: 'components_lifeat_join_sections';
  info: {
    description: '';
    displayName: 'Join Section';
  };
  attributes: {
    cta: Attribute.Component<'partials.cta'>;
    description: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface LifeatWhatwe extends Schema.Component {
  collectionName: 'components_lifeat_whatwes';
  info: {
    description: '';
    displayName: 'Whatwe';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface PartialsCardAbReac extends Schema.Component {
  collectionName: 'components_partials_card_ab_reacs';
  info: {
    description: '';
    displayName: 'card.ab.reac';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
    value: Attribute.String;
  };
}

export interface PartialsCardCntHq extends Schema.Component {
  collectionName: 'components_partials_card_cnt_hqs';
  info: {
    displayName: 'Card.Cnt.HQ';
  };
  attributes: {
    address: Attribute.String;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    email: Attribute.String;
    fax: Attribute.String;
    location: Attribute.String;
    mobile: Attribute.String;
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

export interface PartialsCardIndus extends Schema.Component {
  collectionName: 'components_partials_card_induses';
  info: {
    description: '';
    displayName: 'card.indus';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle1: Attribute.Text;
    subtitle2: Attribute.Text;
    subtitle3: Attribute.Text;
    title: Attribute.String;
  };
}

export interface PartialsCardMem extends Schema.Component {
  collectionName: 'components_partials_card_mems';
  info: {
    description: '';
    displayName: 'card.mem';
  };
  attributes: {
    description: Attribute.Text;
    designation: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
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

export interface PartialsCardService extends Schema.Component {
  collectionName: 'components_partials_card_services';
  info: {
    description: '';
    displayName: 'Card.Service';
  };
  attributes: {
    bgColor: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    item1: Attribute.String;
    item2: Attribute.String;
    item3: Attribute.String;
    item4: Attribute.String;
    item5: Attribute.String;
    title: Attribute.String;
  };
}

export interface PartialsCardVis extends Schema.Component {
  collectionName: 'components_partials_card_vis';
  info: {
    displayName: 'card.vis';
  };
  attributes: {
    color: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface PartialsGuruCard extends Schema.Component {
  collectionName: 'components_partials_guru_cards';
  info: {
    description: '';
    displayName: 'guru.card';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Attribute.String;
    title: Attribute.String;
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

export interface PartialsStatCard extends Schema.Component {
  collectionName: 'components_partials_stat_cards';
  info: {
    description: '';
    displayName: 'stat.card';
  };
  attributes: {
    count: Attribute.String;
    subtitle: Attribute.String;
    title: Attribute.String;
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

export interface PartialsTextDesc extends Schema.Component {
  collectionName: 'components_partials_text_descs';
  info: {
    displayName: 'Text.Desc';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
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

export interface ServiceBanner extends Schema.Component {
  collectionName: 'components_service_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    description: Attribute.Text;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgBg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgBgGradient: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.RichText;
  };
}

export interface ServiceServiceInfo extends Schema.Component {
  collectionName: 'components_service_service_infos';
  info: {
    displayName: 'Service Info';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title1: Attribute.String;
    title2: Attribute.String;
    title3: Attribute.String;
  };
}

export interface ServiceServices extends Schema.Component {
  collectionName: 'components_service_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    cards: Attribute.Component<'partials.card-service', true>;
    status: Attribute.Component<'partials.status'>;
    title1: Attribute.String;
    title2: Attribute.String;
  };
}

export interface ServiceWhyUs extends Schema.Component {
  collectionName: 'components_service_why_uses';
  info: {
    displayName: 'Why Us';
  };
  attributes: {
    cards: Attribute.Component<'partials.text-text-img', true>;
    status: Attribute.Component<'partials.status'>;
    title1: Attribute.String;
    title2: Attribute.String;
    title3: Attribute.String;
  };
}

export interface SolutionApproach extends Schema.Component {
  collectionName: 'components_solution_approaches';
  info: {
    description: '';
    displayName: 'Approach';
  };
  attributes: {
    cards: Attribute.Component<'partials.text-desc', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface SolutionBanner extends Schema.Component {
  collectionName: 'components_solution_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface SolutionOfferingSection extends Schema.Component {
  collectionName: 'components_solution_offering_sections';
  info: {
    displayName: 'Offering Section';
  };
  attributes: {
    offerings: Attribute.Component<'partials.text-text-img', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface SolutionOurPartners extends Schema.Component {
  collectionName: 'components_solution_our_partners';
  info: {
    displayName: 'Our Partners';
  };
  attributes: {
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

export interface SolutionPartnerWithUs extends Schema.Component {
  collectionName: 'components_solution_partner_with_uses';
  info: {
    displayName: 'Partner With Us';
  };
  attributes: {
    cards: Attribute.Component<'partials.img-text', true>;
    status: Attribute.Component<'partials.status'>;
    subtitle: Attribute.String;
    title: Attribute.String;
    titleColor: Attribute.String;
  };
}

export interface SolutionSliderSection extends Schema.Component {
  collectionName: 'components_solution_slider_sections';
  info: {
    displayName: 'Slider Section';
  };
  attributes: {
    slides: Attribute.Component<'partials.img-text', true>;
    status: Attribute.Component<'partials.status'>;
  };
}

export interface SolutionStatsSections extends Schema.Component {
  collectionName: 'components_solution_stats_sections';
  info: {
    description: '';
    displayName: 'Stats Sections';
  };
  attributes: {
    cards: Attribute.Component<'partials.stat-card', true>;
    status: Attribute.Component<'partials.status'>;
  };
}

export interface SolutionWeStandOut extends Schema.Component {
  collectionName: 'components_solution_we_stand_outs';
  info: {
    description: '';
    displayName: 'We Stand Out';
  };
  attributes: {
    cardImage1: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardImage2: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardImage3: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardTitle1: Attribute.Text;
    cardTitle2: Attribute.Text;
    cardTitle3: Attribute.Text;
    status: Attribute.Component<'partials.status'>;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.about-note': AboutAboutNote;
      'about.banner-section': AboutBannerSection;
      'about.intro-section': AboutIntroSection;
      'about.leader-section': AboutLeaderSection;
      'about.our-team': AboutOurTeam;
      'about.team-member': AboutTeamMember;
      'about.vision-section': AboutVisionSection;
      'academy.banner-section': AcademyBannerSection;
      'academy.constant-section': AcademyConstantSection;
      'academy.gurukul': AcademyGurukul;
      'academy.journey-section': AcademyJourneySection;
      'academy.pillar': AcademyPillar;
      'academy.value-section': AcademyValueSection;
      'aura.agentic': AuraAgentic;
      'aura.aura-experience': AuraAuraExperience;
      'aura.banner-section': AuraBannerSection;
      'aura.complexity': AuraComplexity;
      'aura.experience-section': AuraExperienceSection;
      'aura.feature-section': AuraFeatureSection;
      'aura.future-building': AuraFutureBuilding;
      'aura.overview': AuraOverview;
      'blog.blog-content': BlogBlogContent;
      'blog.blog-listing': BlogBlogListing;
      'blog.pluse-listing': BlogPluseListing;
      'career.career-info': CareerCareerInfo;
      'common.footer': CommonFooter;
      'common.header': CommonHeader;
      'common.test-card': CommonTestCard;
      'common.testimonial-section': CommonTestimonialSection;
      'contact.banner-form': ContactBannerForm;
      'contact.find-us': ContactFindUs;
      'contact.headquarters': ContactHeadquarters;
      'home.aura-section': HomeAuraSection;
      'home.awards-section': HomeAwardsSection;
      'home.banner': HomeBanner;
      'home.brand-marque': HomeBrandMarque;
      'home.industries-section': HomeIndustriesSection;
      'home.intro-section': HomeIntroSection;
      'home.our-portfolio': HomeOurPortfolio;
      'industry.banner-section': IndustryBannerSection;
      'industry.challenges': IndustryChallenges;
      'industry.industry-solutions': IndustryIndustrySolutions;
      'industry.main-banner': IndustryMainBanner;
      'industry.manufacture': IndustryManufacture;
      'industry.why-choose-us': IndustryWhyChooseUs;
      'lifeat.banner-section': LifeatBannerSection;
      'lifeat.constant-section': LifeatConstantSection;
      'lifeat.culture-section': LifeatCultureSection;
      'lifeat.employee-section': LifeatEmployeeSection;
      'lifeat.finding-section': LifeatFindingSection;
      'lifeat.join-section': LifeatJoinSection;
      'lifeat.whatwe': LifeatWhatwe;
      'partials.card-ab-reac': PartialsCardAbReac;
      'partials.card-cnt-hq': PartialsCardCntHq;
      'partials.card-home-hero': PartialsCardHomeHero;
      'partials.card-indus': PartialsCardIndus;
      'partials.card-mem': PartialsCardMem;
      'partials.card-port': PartialsCardPort;
      'partials.card-service': PartialsCardService;
      'partials.card-vis': PartialsCardVis;
      'partials.cta': PartialsCta;
      'partials.guru-card': PartialsGuruCard;
      'partials.img-text': PartialsImgText;
      'partials.num-text': PartialsNumText;
      'partials.stat-card': PartialsStatCard;
      'partials.status': PartialsStatus;
      'partials.text': PartialsText;
      'partials.text-desc': PartialsTextDesc;
      'partials.text-text-img': PartialsTextTextImg;
      'service.banner': ServiceBanner;
      'service.service-info': ServiceServiceInfo;
      'service.services': ServiceServices;
      'service.why-us': ServiceWhyUs;
      'solution.approach': SolutionApproach;
      'solution.banner': SolutionBanner;
      'solution.offering-section': SolutionOfferingSection;
      'solution.our-partners': SolutionOurPartners;
      'solution.partner-with-us': SolutionPartnerWithUs;
      'solution.slider-section': SolutionSliderSection;
      'solution.stats-sections': SolutionStatsSections;
      'solution.we-stand-out': SolutionWeStandOut;
    }
  }
}

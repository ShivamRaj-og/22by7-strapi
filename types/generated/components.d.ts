import type { Attribute, Schema } from '@strapi/strapi';

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

export interface HomeBanner extends Schema.Component {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    status: Attribute.Component<'partials.status'>;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.blog-content': BlogBlogContent;
      'home.banner': HomeBanner;
      'partials.status': PartialsStatus;
    }
  }
}

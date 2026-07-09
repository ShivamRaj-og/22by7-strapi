import type { Attribute, Schema } from '@strapi/strapi';

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
      'home.banner': HomeBanner;
      'partials.status': PartialsStatus;
    }
  }
}

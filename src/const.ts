import {City} from './types/offer';

const AppRoute = {
  Root: '/',
  Favorites: '/favorites',
  Login: '/login',
  Offer: '/offer/:id'
} as const;

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const NameSpace = {
  Offers: 'OFFERS',
  Offer: 'OFFER',
  NearOffers: 'NEAR_OFFERS',
  Favorites: 'FAVORITES',
  Comments: 'COMMENTS',
  User: 'USER'
} as const;

const URL_MARKER_DEFAULT = '../../../markup/img/pin.svg';
const URL_MARKER_CURRENT = '../../../markup/img/pin-active.svg';

const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 12
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 12
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 12
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.377956,
      longitude: 4.897070,
      zoom: 12
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 12
    }
  }
];

const DEFAULT_CITY = CITIES[0];

export {AppRoute, AuthorizationStatus, NameSpace, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CITY};

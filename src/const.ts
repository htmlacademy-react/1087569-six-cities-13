const Setting = {
  CardsCount: 5
};

const AppRoute = {
  Root: '/',
  Favorites: '/favorites',
  Login: '/login',
  Offer: '/offer/'
} as const;

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {Setting, AppRoute, AuthorizationStatus};

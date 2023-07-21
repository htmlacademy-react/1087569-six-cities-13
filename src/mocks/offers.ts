import {Offer, OfferDetail} from '../types/offer';

const offers: Offer[] = [
  {
    id: 'e4d1588c-9372-4d2c-a08b-caaf23f668e6',
    title: 'The house among olive ',
    type: 'hotel',
    price: 402,
    previewImage: 'https://13.design.pages.academy/static/hotel/7.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.8
  },
  {
    id: '4157daa8-b21d-4961-a465-94323176ba12',
    title: 'House in countryside',
    type: 'house',
    price: 368,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2
  },
  {
    id: '6852faac-d558-4549-9ab8-229255ee863e',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 258,
    previewImage: 'https://13.design.pages.academy/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2
  },
  {
    id: 'f6e517e8-d266-48f0-9f61-8d2f2b3e6be6',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 116,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.5
  }
];

const favoritesOffers: Offer[] = [
  {
    id: 'e4d1588c-9372-4d2c-a08b-caaf23f668e6',
    title: 'The house among olive ',
    type: 'hotel',
    price: 402,
    previewImage: 'https://13.design.pages.academy/static/hotel/7.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.8
  },
  {
    id: 'f6e517e8-d266-48f0-9f61-8d2f2b3e6be6',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 116,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.5
  }
];

const detailsOffers: OfferDetail[] = [
  {
    id: 'e4d1588c-9372-4d2c-a08b-caaf23f668e6',
    title: 'The house among olive ',
    type: 'hotel',
    price: 402,
    previewImage: 'https://13.design.pages.academy/static/hotel/7.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris',
    bedrooms: 2,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg'
    ],
    maxAdults: 3
  },
  {
    id: '4157daa8-b21d-4961-a465-94323176ba12',
    title: 'House in countryside',
    type: 'house',
    price: 368,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris',
    bedrooms: 1,
    goods: [
      'Baby seat',
      'Breakfast',
      'Kitchen',
      'Dishwasher'
    ],
    host: {
      name: 'Donald Duck',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '6852faac-d558-4549-9ab8-229255ee863e',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 258,
    previewImage: 'https://13.design.pages.academy/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris',
    bedrooms: 1,
    goods: [
      'Baby seat',
      'Breakfast',
      'Kitchen',
      'Dishwasher',
      'Wi-Fi'
    ],
    host: {
      name: 'Donald Obama',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'https://13.design.pages.academy/static/hotel/8.jpg',
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/7.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg'
    ],
    maxAdults: 5
  },
  {
    id: 'f6e517e8-d266-48f0-9f61-8d2f2b3e6be6',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 116,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris',
    bedrooms: 1,
    goods: [
      'Baby seat',
      'Breakfast',
      'Kitchen',
      'Dishwasher',
      'Wi-Fi'
    ],
    host: {
      name: 'Dustin Porier',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg'
    ],
    maxAdults: 1
  }
];

export {offers, favoritesOffers, detailsOffers};

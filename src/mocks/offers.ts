import {Offer} from '../types/offer';

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

export {offers, favoritesOffers};

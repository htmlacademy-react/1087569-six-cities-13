import {createReducer} from '@reduxjs/toolkit';
import {Offer, OfferDetail, City} from '../types/offer';
import {Comment} from '../types/comment';
import {DEFAULT_CITY, CITIES, AuthorizationStatus} from '../const';
import {fetchOffers, fetchOffer, fetchNearOffers, fetchComments, dropOffer, setActiveCity, setOffersDataLoadingStatus, requireAuthorization} from './actions';

const initialState: {
  offers: Offer[];
  nearOffers: Offer[];
  comments: Comment[];
  offer: OfferDetail | null;
  favorites: Offer[];
  activeCity: City;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
} = {
  offers: [],
  nearOffers: [],
  comments: [],
  offer: null,
  favorites: [],
  activeCity: DEFAULT_CITY,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(fetchNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(fetchComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearOffers = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = CITIES.find((city) => city.name === action.payload) as City;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};

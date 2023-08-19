import {createReducer} from '@reduxjs/toolkit';
import {Offer, OfferDetail, City} from '../types/offer';
import {Comment} from '../types/comment';
import {DEFAULT_CITY, CITIES, AuthorizationStatus} from '../const';
import {fetchOffers, /*fetchOffer, fetchNearOffers, fetchComments,*/ dropOffer, setActiveCity, setOffersDataLoadingStatus, requireAuthorization, setError} from './actions';

const initialState: {
  offers: Offer[];
  nearOffers: Offer[];
  comments: Comment[];
  offer: OfferDetail | null;
  favorites: Offer[];
  activeCity: City;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
} = {
  offers: [],
  nearOffers: [],
  comments: [],
  offer: null,
  favorites: [],
  activeCity: DEFAULT_CITY,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    /*.addCase(fetchOffer, (state, action) => {
      state.offer = detailsOffers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearOffers, (state, action) => {
      state.nearOffers = offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchComments, (state) => {
      state.comments = comments;
    })*/
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

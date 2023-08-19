import {createReducer} from '@reduxjs/toolkit';
import {Offer, OfferDetail, City} from '../types/offer';
import {Comment} from '../types/comment';
import {DEFAULT_CITY, CITIES} from '../const';
import {fetchOffers, /*fetchOffer, fetchNearOffers, fetchComments,*/ dropOffer, setActiveCity, setOffersDataLoadingStatus} from './actions';

const initialState: {
  offers: Offer[];
  nearOffers: Offer[];
  comments: Comment[];
  offer: OfferDetail | null;
  favorites: Offer[];
  activeCity: City;
  isOffersDataLoading: boolean;
} = {
  offers: [],
  nearOffers: [],
  comments: [],
  offer: null,
  favorites: [],
  activeCity: DEFAULT_CITY,
  isOffersDataLoading: false
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
    });
});

export {reducer};

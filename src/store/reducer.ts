import {createReducer} from '@reduxjs/toolkit';
import {offers, detailsOffers} from '../mocks/offers';
import {comments} from '../mocks/comments';
import {Offer, OfferDetail, City} from '../types/offer';
import {Comment} from '../types/comment';
import {DEFAULT_CITY, CITIES} from '../const';
import {fetchOffers, fetchOffer, fetchNearOffers, fetchComments, dropOffer, setActiveCity} from './actions';

const initialState: {
  offers: Offer[];
  nearOffers: Offer[];
  comments: Comment[];
  offer: OfferDetail | null;
  favorites: Offer[];
  activeCity: City;
} = {
  offers,
  nearOffers: [],
  comments: [],
  offer: null,
  favorites: [],
  activeCity: DEFAULT_CITY
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = detailsOffers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearOffers, (state, action) => {
      state.nearOffers = offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchComments, (state) => {
      state.comments = comments;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearOffers = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = CITIES.find((city) => city.name === action.payload) as City;
    });
});

export {reducer};

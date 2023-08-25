import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {commentsProcess} from './comments-process/comments-process.slice';
import {favoritesProcess} from './favorites-process/favorites-process.slice';
import {nearOffersProcess} from './near-offers-process/near-offers-process.slice';
import {offerProcess} from './offer-process/offer-process.slice';
import {offersProcess} from './offers-process/offers-process.slice';
import {userProcess} from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Comments]: commentsProcess.reducer,
  [NameSpace.Favorites]: favoritesProcess.reducer,
  [NameSpace.NearOffers]: nearOffersProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.User]: userProcess.reducer
});

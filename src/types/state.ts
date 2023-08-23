import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Offer, City, OfferDetail} from './offer';
import {Comment} from './comment';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type OffersProcess = {
  offers: Offer[];
  activeCity: City;
  isOffersDataLoading: boolean;
};

export type OfferProcess = {
  offer: OfferDetail | null;
  isOfferDataLoading: boolean;
}

export type NearOffersProcess = {
  nearOffers: Offer[];
}

export type FavoritesProcess = {
  favorites: Offer[];
  isFavoritesDataLoading: boolean;
}

export type CommentsProcess = {
  comments: Comment[];
  sendingCommentStatus: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import {store} from '../store';
import {AuthorizationStatus, RequestStatus} from '../const';
import {Offer, City, OfferDetail} from './offer';
import {Comment} from './comment';
import {UserData} from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  currentUser: UserData | null;
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
  sendingCommentStatus: RequestStatus;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

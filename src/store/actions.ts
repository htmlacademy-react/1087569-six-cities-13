import {createAction} from '@reduxjs/toolkit';
import {Offer, OfferDetail} from '../types/offer';
import {Comment} from '../types/comment';
import {NameSpace, AuthorizationStatus} from '../const';
import {AppRoute} from '../const';

const fetchOffers = createAction<Offer[]>(`${NameSpace.Offers}/fetch`);

const fetchOffer = createAction<OfferDetail>(`${NameSpace.Offer}/fetch`);

const fetchNearOffers = createAction<Offer[]>(`${NameSpace.NearOffers}/fetch`);

const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus/fetch');

const fetchComments = createAction<Comment[]>(`${NameSpace.Comments}/fetch`);

const fetchFavorites = createAction<Offer[]>(`${NameSpace.Favorites}/fetch`);

const postComment = createAction<Comment>(`${NameSpace.Comments}/add`);

const dropOffer = createAction(`${NameSpace.Offer}/drop`);

const setActiveCity = createAction<string>(`${NameSpace.Offers}/setActiveCity`);

const requireAuthorization = createAction<AuthorizationStatus>(`${NameSpace.User}/requireAuthorization`);

const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

const dropSendingStatus = createAction(`${NameSpace.Comments}/dropSendingStatus`);

export {fetchOffers, fetchOffer, fetchNearOffers, fetchComments, fetchFavorites, postComment, dropSendingStatus, dropOffer, setActiveCity, setOffersDataLoadingStatus, requireAuthorization, redirectToRoute};



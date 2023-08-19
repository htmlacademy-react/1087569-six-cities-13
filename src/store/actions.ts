import {createAction} from '@reduxjs/toolkit';
import {Offer, OfferDetail} from '../types/offer';
import {NameSpace} from '../const';

const fetchOffers = createAction<Offer[]>(`${NameSpace.Offers}/fetch`);

const fetchOffer = createAction<OfferDetail['id']>(`${NameSpace.Offer}/fetch`);

const fetchNearOffers = createAction<OfferDetail['id']>(`${NameSpace.NearOffers}/fetch`);

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

const fetchComments = createAction<OfferDetail['id']>(`${NameSpace.Comments}/fetch`);

const fetchFavorites = createAction(`${NameSpace.Favorites}/fetch`);

const dropOffer = createAction(`${NameSpace.Offer}/drop`);

const setActiveCity = createAction<string>(`${NameSpace.Offers}/setActiveCity`);

export {fetchOffers, fetchOffer, fetchNearOffers, fetchComments, fetchFavorites, dropOffer, setActiveCity, setOffersDataLoadingStatus};



import {createAction} from '@reduxjs/toolkit/dist/createAction';
import {OfferDetail, City} from '../types/offer';
import {NameSpace} from '../const';

const fetchOffers = createAction(`${NameSpace.Offers}/fetch`);

const fetchOffer = createAction<OfferDetail['id']>(`${NameSpace.Offer}/fetch`);

const fetchNearOffers = createAction<OfferDetail['id']>(`${NameSpace.NearOffers}/fetch`);

const fetchComments = createAction<OfferDetail['id']>(`${NameSpace.Comments}/fetch`);

const fetchFavorites = createAction(`${NameSpace.Favorites}/fetch`);

const dropOffer = createAction(`${NameSpace.Offer}/drop`);

const setActiveCity = createAction<City>(`${NameSpace.Offers}/setActiveCity`);

export {fetchOffers, fetchOffer, fetchNearOffers, fetchComments, fetchFavorites, dropOffer, setActiveCity};



import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer, City} from '../../types/offer';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getActiveCity = (state: State): City => state[NameSpace.Offers].activeCity;

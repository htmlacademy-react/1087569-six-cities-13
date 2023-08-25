import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {OfferDetail} from '../../types/offer';

export const getOffer = (state: State): OfferDetail | null => state[NameSpace.Offer].offer;
export const getOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isOfferDataLoading;
